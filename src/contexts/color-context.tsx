'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { ColorPalette, defaultColorPalettes, generateCustomPalette, applyColorPalette } from '@/lib/colors';

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
  const [currentPalette, setCurrentPalette] = useState<ColorPalette>(defaultColorPalettes[0]); // Slate is at index 0
  const [customPrimaryColor, setCustomPrimaryColor] = useState<string>('hsl(222.2 84% 4.9%)'); // Slate primary color
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only applying colors after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Always use light mode palettes only
  const availablePalettes = defaultColorPalettes;

  // Apply palette when it changes (only after mount)
  useEffect(() => {
    if (mounted) {
      applyColorPalette(currentPalette);
    }
  }, [currentPalette, mounted]);

  // Initialize with light mode palette
  useEffect(() => {
    if (mounted) {
      setCurrentPalette(defaultColorPalettes[0]); // Slate
    }
  }, [mounted]);

  // Generate custom palette when custom primary color changes (only after mount)
  useEffect(() => {
    if (mounted) {
      const customPalette = generateCustomPalette(customPrimaryColor, false); // Always light mode
      setCurrentPalette(customPalette);
    }
  }, [customPrimaryColor, mounted]);

  const resetToDefault = () => {
    if (mounted) {
      setCurrentPalette(defaultColorPalettes[0]); // Slate
      setCustomPrimaryColor('hsl(222.2 84% 4.9%)'); // Reset to Slate primary color
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
