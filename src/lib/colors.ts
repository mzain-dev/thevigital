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
    name: 'Purple',
    primary: 'hsl(258 80% 35%)', // #4411ab converted to HSL
    secondary: 'hsl(258 70% 96%)',
    accent: 'hsl(258 70% 96%)',
    background: 'hsl(0 0% 100%)',
    foreground: 'hsl(240 10% 3.9%)',
    muted: 'hsl(258 70% 96%)',
    mutedForeground: 'hsl(258 80% 35%)',
    border: 'hsl(258 70% 96%)',
    input: 'hsl(258 70% 96%)',
    ring: 'hsl(258 80% 35%)',
  },
];

export const darkColorPalettes: ColorPalette[] = [
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
    name: 'Purple Dark',
    primary: 'hsl(258 80% 70%)', // Lighter version of #4411ab for dark mode
    secondary: 'hsl(258 70% 20%)',
    accent: 'hsl(258 70% 20%)',
    background: 'hsl(258 80% 4.9%)',
    foreground: 'hsl(258 70% 98%)',
    muted: 'hsl(258 70% 20%)',
    mutedForeground: 'hsl(258 80% 65%)',
    border: 'hsl(258 70% 20%)',
    input: 'hsl(258 70% 20%)',
    ring: 'hsl(258 80% 70%)',
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
