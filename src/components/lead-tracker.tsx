"use client";

import { useEffect } from 'react';
import { captureUTMParams } from '@/lib/lead-tracking';

export function LeadTracker() {
  useEffect(() => {
    captureUTMParams();
  }, []);

  return null; // This component doesn't render anything visible
}
