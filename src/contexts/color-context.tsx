'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { ColorPalette, defaultColorPalettes, darkColorPalettes, generateCustomPalette, applyColorPalette } from '@/lib/colors';

interface ColorContextType {
  currentPalette: ColorPalette;
  setCurrentPalette: (palette: ColorPalette) => void;
  customPrimaryColor: string;
  setCustomPrimaryColor: (color: string) => void;
  availablePalettes: ColorPalette[];
  resetToDefault: () => void;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export function ColorProvider({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [currentPalette, setCurrentPalette] = useState<ColorPalette>(defaultColorPalettes[0]);
  const [customPrimaryColor, setCustomPrimaryColor] = useState<string>('hsl(240 100% 29%)');
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only applying colors after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Get available palettes based on current theme
  const availablePalettes = resolvedTheme === 'dark' 
    ? [...darkColorPalettes, ...defaultColorPalettes]
    : [...defaultColorPalettes, ...darkColorPalettes];

  // Apply palette when it changes (only after mount)
  useEffect(() => {
    if (mounted) {
      applyColorPalette(currentPalette);
    }
  }, [currentPalette, mounted]);

  // Update palette when theme changes (only after mount)
  useEffect(() => {
    if (mounted && resolvedTheme) {
      if (resolvedTheme === 'dark') {
        setCurrentPalette(darkColorPalettes[0]);
      } else {
        setCurrentPalette(defaultColorPalettes[0]);
      }
    }
  }, [resolvedTheme, mounted]);

  // Generate custom palette when custom primary color changes (only after mount)
  useEffect(() => {
    if (mounted && resolvedTheme) {
      const customPalette = generateCustomPalette(customPrimaryColor, resolvedTheme === 'dark');
      setCurrentPalette(customPalette);
    }
  }, [customPrimaryColor, resolvedTheme, mounted]);

  const resetToDefault = () => {
    if (mounted && resolvedTheme) {
      if (resolvedTheme === 'dark') {
        setCurrentPalette(darkColorPalettes[0]);
      } else {
        setCurrentPalette(defaultColorPalettes[0]);
      }
      setCustomPrimaryColor('hsl(240 5.9% 10%)');
    }
  };

  const value: ColorContextType = {
    currentPalette,
    setCurrentPalette,
    customPrimaryColor,
    setCustomPrimaryColor,
    availablePalettes,
    resetToDefault,
  };

  return (
    <ColorContext.Provider value={value}>
      {children}
    </ColorContext.Provider>
  );
}

export function useColor() {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error('useColor must be used within a ColorProvider');
  }
  return context;
}
