export interface ColorPalette {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  foreground: string;
  muted: string;
  mutedForeground: string;
  border: string;
  input: string;
  ring: string;
}

export const defaultColorPalettes: ColorPalette[] = [
  {
    name: 'Slate + Blue',
    primary: 'hsl(240 100% 29%)', // #000093 converted to HSL
    secondary: 'hsl(210 40% 96%)', // Keep slate secondary
    accent: 'hsl(240 100% 29%)', // Use blue as accent
    background: 'hsl(0 0% 100%)',
    foreground: 'hsl(222.2 84% 4.9%)', // Keep slate foreground
    muted: 'hsl(210 40% 96%)', // Keep slate muted
    mutedForeground: 'hsl(215.4 16.3% 46.9%)',
    border: 'hsl(214.3 31.8% 91.4%)', // Keep slate border
    input: 'hsl(214.3 31.8% 91.4%)',
    ring: 'hsl(240 100% 29%)', // Use blue for ring
  },
  {
    name: 'Zinc + Purple',
    primary: 'hsl(262 83% 58%)', // #8B5CF6 converted to HSL
    secondary: 'hsl(240 5% 90%)', // Light zinc secondary
    accent: 'hsl(262 83% 58%)', // Use purple as accent
    background: 'hsl(0 0% 100%)',
    foreground: 'hsl(240 6% 25%)', // #3F3F46 converted to HSL
    muted: 'hsl(240 5% 90%)', // Light zinc muted
    mutedForeground: 'hsl(240 5% 45%)',
    border: 'hsl(240 5% 85%)', // Light zinc border
    input: 'hsl(240 5% 85%)',
    ring: 'hsl(262 83% 58%)', // Use purple for ring
  },
  {
    name: 'Zinc + Green',
    primary: 'hsl(160 84% 39%)', // #10B981 converted to HSL
    secondary: 'hsl(240 5% 90%)', // Light zinc secondary
    accent: 'hsl(160 84% 39%)', // Use green as accent
    background: 'hsl(0 0% 100%)',
    foreground: 'hsl(240 6% 25%)', // #3F3F46 converted to HSL
    muted: 'hsl(240 5% 90%)', // Light zinc muted
    mutedForeground: 'hsl(240 5% 45%)',
    border: 'hsl(240 5% 85%)', // Light zinc border
    input: 'hsl(240 5% 85%)',
    ring: 'hsl(160 84% 39%)', // Use green for ring
  },
  {
    name: 'Orange + Blue',
    primary: 'hsl(240 100% 29%)', // #000093 converted to HSL
    secondary: 'hsl(25 95% 95%)', // Light orange secondary
    accent: 'hsl(240 100% 29%)', // Use blue as accent
    background: 'hsl(0 0% 100%)',
    foreground: 'hsl(25 95% 20%)', // Dark orange foreground
    muted: 'hsl(25 95% 95%)', // Light orange muted
    mutedForeground: 'hsl(25 95% 40%)',
    border: 'hsl(25 95% 90%)', // Light orange border
    input: 'hsl(25 95% 90%)',
    ring: 'hsl(240 100% 29%)', // Use blue for ring
  },
  {
    name: 'Zinc',
    primary: 'hsl(240 5.9% 10%)',
    secondary: 'hsl(240 4.8% 95.9%)',
    accent: 'hsl(240 4.8% 95.9%)',
    background: 'hsl(0 0% 100%)',
    foreground: 'hsl(240 10% 3.9%)',
    muted: 'hsl(240 4.8% 95.9%)',
    mutedForeground: 'hsl(240 3.8% 46.1%)',
    border: 'hsl(240 5.9% 90%)',
    input: 'hsl(240 5.9% 90%)',
    ring: 'hsl(240 5.9% 10%)',
  },
  {
    name: 'Slate',
    primary: 'hsl(222.2 84% 4.9%)',
    secondary: 'hsl(210 40% 96%)',
    accent: 'hsl(210 40% 96%)',
    background: 'hsl(0 0% 100%)',
    foreground: 'hsl(222.2 84% 4.9%)',
    muted: 'hsl(210 40% 96%)',
    mutedForeground: 'hsl(215.4 16.3% 46.9%)',
    border: 'hsl(214.3 31.8% 91.4%)',
    input: 'hsl(214.3 31.8% 91.4%)',
    ring: 'hsl(222.2 84% 4.9%)',
  },
  {
    name: 'Blue',
    primary: 'hsl(221.2 83.2% 53.3%)',
    secondary: 'hsl(210 40% 96%)',
    accent: 'hsl(210 40% 96%)',
    background: 'hsl(0 0% 100%)',
    foreground: 'hsl(222.2 84% 4.9%)',
    muted: 'hsl(210 40% 96%)',
    mutedForeground: 'hsl(215.4 16.3% 46.9%)',
    border: 'hsl(214.3 31.8% 91.4%)',
    input: 'hsl(214.3 31.8% 91.4%)',
    ring: 'hsl(221.2 83.2% 53.3%)',
  },
  {
    name: 'Green',
    primary: 'hsl(142.1 76.2% 36.3%)',
    secondary: 'hsl(138 76% 97%)',
    accent: 'hsl(138 76% 97%)',
    background: 'hsl(0 0% 100%)',
    foreground: 'hsl(240 10% 3.9%)',
    muted: 'hsl(138 76% 97%)',
    mutedForeground: 'hsl(142.1 76.2% 36.3%)',
    border: 'hsl(138 76% 97%)',
    input: 'hsl(138 76% 97%)',
    ring: 'hsl(142.1 76.2% 36.3%)',
  },
  {
    name: 'Purple',
    primary: 'hsl(262.1 83.3% 57.8%)',
    secondary: 'hsl(263 70% 96%)',
    accent: 'hsl(263 70% 96%)',
    background: 'hsl(0 0% 100%)',
    foreground: 'hsl(240 10% 3.9%)',
    muted: 'hsl(263 70% 96%)',
    mutedForeground: 'hsl(262.1 83.3% 57.8%)',
    border: 'hsl(263 70% 96%)',
    input: 'hsl(263 70% 96%)',
    ring: 'hsl(262.1 83.3% 57.8%)',
  },
  {
    name: 'Orange',
    primary: 'hsl(24.6 95% 53.1%)',
    secondary: 'hsl(48 96% 89%)',
    accent: 'hsl(48 96% 89%)',
    background: 'hsl(0 0% 100%)',
    foreground: 'hsl(20 14.3% 4.1%)',
    muted: 'hsl(48 96% 89%)',
    mutedForeground: 'hsl(24.6 95% 53.1%)',
    border: 'hsl(48 96% 89%)',
    input: 'hsl(48 96% 89%)',
    ring: 'hsl(24.6 95% 53.1%)',
  },
];

export const darkColorPalettes: ColorPalette[] = [
  {
    name: 'Slate + Blue Dark',
    primary: 'hsl(240 100% 70%)', // Lighter blue for dark mode
    secondary: 'hsl(217.2 32.6% 17.5%)', // Keep slate secondary
    accent: 'hsl(240 100% 70%)', // Use lighter blue as accent
    background: 'hsl(222.2 84% 4.9%)',
    foreground: 'hsl(210 40% 98%)', // Keep slate foreground
    muted: 'hsl(217.2 32.6% 17.5%)', // Keep slate muted
    mutedForeground: 'hsl(215 20.2% 65.1%)',
    border: 'hsl(217.2 32.6% 17.5%)', // Keep slate border
    input: 'hsl(217.2 32.6% 17.5%)',
    ring: 'hsl(240 100% 70%)', // Use lighter blue for ring
  },
  {
    name: 'Zinc + Purple Dark',
    primary: 'hsl(262 83% 75%)', // Lighter purple for dark mode
    secondary: 'hsl(240 6% 20%)', // Dark zinc secondary
    accent: 'hsl(262 83% 75%)', // Use lighter purple as accent
    background: 'hsl(240 6% 15%)', // Dark zinc background
    foreground: 'hsl(240 6% 85%)', // Light zinc foreground
    muted: 'hsl(240 6% 20%)', // Dark zinc muted
    mutedForeground: 'hsl(240 6% 60%)',
    border: 'hsl(240 6% 20%)', // Dark zinc border
    input: 'hsl(240 6% 20%)',
    ring: 'hsl(262 83% 75%)', // Use lighter purple for ring
  },
  {
    name: 'Zinc + Green Dark',
    primary: 'hsl(160 84% 60%)', // Lighter green for dark mode
    secondary: 'hsl(240 6% 20%)', // Dark zinc secondary
    accent: 'hsl(160 84% 60%)', // Use lighter green as accent
    background: 'hsl(240 6% 15%)', // Dark zinc background
    foreground: 'hsl(240 6% 85%)', // Light zinc foreground
    muted: 'hsl(240 6% 20%)', // Dark zinc muted
    mutedForeground: 'hsl(240 6% 60%)',
    border: 'hsl(240 6% 20%)', // Dark zinc border
    input: 'hsl(240 6% 20%)',
    ring: 'hsl(160 84% 60%)', // Use lighter green for ring
  },
  {
    name: 'Orange + Blue Dark',
    primary: 'hsl(240 100% 70%)', // Lighter blue for dark mode
    secondary: 'hsl(25 95% 20%)', // Dark orange secondary
    accent: 'hsl(240 100% 70%)', // Use lighter blue as accent
    background: 'hsl(25 95% 15%)', // Dark orange background
    foreground: 'hsl(25 95% 85%)', // Light orange foreground
    muted: 'hsl(25 95% 20%)', // Dark orange muted
    mutedForeground: 'hsl(25 95% 60%)',
    border: 'hsl(25 95% 20%)', // Dark orange border
    input: 'hsl(25 95% 20%)',
    ring: 'hsl(240 100% 70%)', // Use lighter blue for ring
  },
  {
    name: 'Zinc Dark',
    primary: 'hsl(0 0% 98%)',
    secondary: 'hsl(240 3.7% 15.9%)',
    accent: 'hsl(240 3.7% 15.9%)',
    background: 'hsl(240 10% 3.9%)',
    foreground: 'hsl(0 0% 98%)',
    muted: 'hsl(240 3.7% 15.9%)',
    mutedForeground: 'hsl(240 5% 64.9%)',
    border: 'hsl(240 3.7% 15.9%)',
    input: 'hsl(240 3.7% 15.9%)',
    ring: 'hsl(0 0% 98%)',
  },
  {
    name: 'Slate Dark',
    primary: 'hsl(210 40% 98%)',
    secondary: 'hsl(217.2 32.6% 17.5%)',
    accent: 'hsl(217.2 32.6% 17.5%)',
    background: 'hsl(222.2 84% 4.9%)',
    foreground: 'hsl(210 40% 98%)',
    muted: 'hsl(217.2 32.6% 17.5%)',
    mutedForeground: 'hsl(215 20.2% 65.1%)',
    border: 'hsl(217.2 32.6% 17.5%)',
    input: 'hsl(217.2 32.6% 17.5%)',
    ring: 'hsl(210 40% 98%)',
  },
];

export function generateCustomPalette(baseColor: string, isDark: boolean = false): ColorPalette {
  // This is a simplified color generation - in a real app you might want more sophisticated color theory
  const hsl = parseHsl(baseColor);
  
  if (!hsl) {
    return defaultColorPalettes[0];
  }

  const { h, s, l } = hsl;
  
  if (isDark) {
    return {
      name: 'Custom Dark',
      primary: `hsl(${h} ${s}% ${Math.min(98, l + 20)}%)`,
      secondary: `hsl(${h} ${Math.max(10, s - 20)}% ${Math.max(15, l - 30)}%)`,
      accent: `hsl(${h} ${Math.max(10, s - 20)}% ${Math.max(15, l - 30)}%)`,
      background: `hsl(${h} ${Math.max(10, s - 30)}% ${Math.max(5, l - 50)}%)`,
      foreground: `hsl(${h} ${Math.max(10, s - 20)}% ${Math.min(98, l + 20)}%)`,
      muted: `hsl(${h} ${Math.max(10, s - 20)}% ${Math.max(15, l - 30)}%)`,
      mutedForeground: `hsl(${h} ${Math.max(10, s - 30)}% ${Math.max(45, l - 20)}%)`,
      border: `hsl(${h} ${Math.max(10, s - 20)}% ${Math.max(15, l - 30)}%)`,
      input: `hsl(${h} ${Math.max(10, s - 20)}% ${Math.max(15, l - 30)}%)`,
      ring: `hsl(${h} ${Math.max(10, s - 20)}% ${Math.min(98, l + 20)}%)`,
    };
  } else {
    return {
      name: 'Custom Light',
      primary: `hsl(${h} ${s}% ${Math.max(10, l - 20)}%)`,
      secondary: `hsl(${h} ${Math.max(10, s - 20)}% ${Math.min(96, l + 20)}%)`,
      accent: `hsl(${h} ${Math.max(10, s - 20)}% ${Math.min(96, l + 20)}%)`,
      background: `hsl(${h} ${Math.max(10, s - 30)}% ${Math.min(100, l + 30)}%)`,
      foreground: `hsl(${h} ${Math.max(10, s - 20)}% ${Math.max(10, l - 20)}%)`,
      muted: `hsl(${h} ${Math.max(10, s - 20)}% ${Math.min(96, l + 20)}%)`,
      mutedForeground: `hsl(${h} ${Math.max(10, s - 30)}% ${Math.max(40, l - 10)}%)`,
      border: `hsl(${h} ${Math.max(10, s - 20)}% ${Math.min(90, l + 10)}%)`,
      input: `hsl(${h} ${Math.max(10, s - 20)}% ${Math.min(90, l + 10)}%)`,
      ring: `hsl(${h} ${Math.max(10, s - 20)}% ${Math.max(10, l - 20)}%)`,
    };
  }
}

function parseHsl(hslString: string): { h: number; s: number; l: number } | null {
  const match = hslString.match(/hsl\((\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)%\s*,\s*(\d+(?:\.\d+)?)%\)/);
  if (match) {
    return {
      h: parseFloat(match[1]),
      s: parseFloat(match[2]),
      l: parseFloat(match[3]),
    };
  }
  return null;
}

export function applyColorPalette(palette: ColorPalette) {
  const root = document.documentElement;
  
  Object.entries(palette).forEach(([key, value]) => {
    if (key !== 'name') {
      root.style.setProperty(`--${key}`, value);
    }
  });
}
