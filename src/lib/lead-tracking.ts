export interface LeadTrackingData {
  source_url: string;
  form_name: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
}

/**
 * Call this function once when the application loads to capture any UTM
 * parameters from the URL and store them in sessionStorage for the duration
 * of the user's visit.
 */
export function captureUTMParams() {
  if (typeof window === 'undefined') return;

  const urlParams = new URLSearchParams(window.location.search);
  const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

  let hasUtm = false;
  utmParams.forEach((param) => {
    const value = urlParams.get(param);
    if (value) {
      sessionStorage.setItem(param, value);
      hasUtm = true;
    }
  });

  // If new UTM parameters were found, we can optionally clear old ones that weren't present
  // in the current URL to ensure the source is accurate for the current session.
  if (hasUtm) {
    utmParams.forEach((param) => {
      if (!urlParams.get(param)) {
        sessionStorage.removeItem(param);
      }
    });
  }
}

/**
 * Call this function right before form submission to gather all lead data.
 * @param formName - The name/identifier of the form being submitted.
 */
export function getLeadData(formName: string): LeadTrackingData {
  if (typeof window === 'undefined') {
    return {
      source_url: '',
      form_name: formName,
      utm_source: '',
      utm_medium: '',
      utm_campaign: '',
      utm_term: '',
      utm_content: '',
    };
  }

  return {
    source_url: window.location.href,
    form_name: formName,
    utm_source: sessionStorage.getItem('utm_source') || '',
    utm_medium: sessionStorage.getItem('utm_medium') || '',
    utm_campaign: sessionStorage.getItem('utm_campaign') || '',
    utm_term: sessionStorage.getItem('utm_term') || '',
    utm_content: sessionStorage.getItem('utm_content') || '',
  };
}

/**
 * Helper to dynamically append lead tracking data to a FormData object.
 */
export function appendLeadDataToFormData(formData: FormData, formName: string) {
  const leadData = getLeadData(formName);
  Object.entries(leadData).forEach(([key, value]) => {
    formData.append(key, value as string);
  });
}
