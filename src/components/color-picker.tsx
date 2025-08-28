'use client';

import React, { useState, useEffect } from 'react';
import { useColor } from '@/contexts/color-context';
import { ColorPalette } from '@/lib/colors';
import { Palette, RotateCcw } from 'lucide-react';

interface ColorPickerProps {
  className?: string;
}

export function ColorPicker({ className }: ColorPickerProps) {
  const {
    currentPalette,
    setCurrentPalette,
    customPrimaryColor,
    setCustomPrimaryColor,
    availablePalettes,
    resetToDefault,
  } = useColor();

  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'presets' | 'custom'>('presets');
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className={`${className}`}>
        <div className="flex items-center gap-2 px-3 py-2 bg-secondary text-secondary-foreground rounded-md">
          <div className="w-4 h-4" />
          <span className="hidden sm:inline">Colors</span>
        </div>
      </div>
    );
  }

  const handlePaletteSelect = (palette: ColorPalette) => {
    setCurrentPalette(palette);
    setIsOpen(false);
  };

  const handleCustomColorChange = (color: string) => {
    setCustomPrimaryColor(color);
  };

  const handleColorInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value;
    // Convert hex to HSL if needed
    if (color.startsWith('#')) {
      const hex = color.replace('#', '');
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);
      
      const hsl = rgbToHsl(r, g, b);
      handleCustomColorChange(`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`);
    } else {
      handleCustomColorChange(color);
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Color Picker Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
        title="Customize Colors"
      >
        <Palette className="w-4 h-4" />
        <span className="hidden sm:inline">Colors</span>
      </button>

      {/* Color Picker Dropdown */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-80 bg-background border border-border rounded-lg shadow-lg z-50">
          <div className="p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Customize Colors</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                ×
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-border mb-4">
              <button
                onClick={() => setActiveTab('presets')}
                className={`px-4 py-2 ${
                  activeTab === 'presets'
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Presets
              </button>
              <button
                onClick={() => setActiveTab('custom')}
                className={`px-4 py-2 ${
                  activeTab === 'custom'
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Custom
              </button>
            </div>

            {/* Content */}
            {activeTab === 'presets' && (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  {availablePalettes.map((palette) => (
                    <button
                      key={palette.name}
                      onClick={() => handlePaletteSelect(palette)}
                      className={`p-3 rounded-md border transition-all ${
                        currentPalette.name === palette.name
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div
                          className="w-4 h-4 rounded-full border border-border"
                          style={{ backgroundColor: palette.primary }}
                        />
                        <span className="text-sm font-medium">{palette.name}</span>
                      </div>
                      <div className="flex gap-1">
                        <div
                          className="w-3 h-3 rounded border border-border"
                          style={{ backgroundColor: palette.primary }}
                        />
                        <div
                          className="w-3 h-3 rounded border border-border"
                          style={{ backgroundColor: palette.secondary }}
                        />
                        <div
                          className="w-3 h-3 rounded border border-border"
                          style={{ backgroundColor: palette.accent }}
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'custom' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Primary Color
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value={customPrimaryColor.startsWith('hsl') ? hslToHex(customPrimaryColor) : customPrimaryColor}
                      onChange={(e) => handleColorInputChange(e)}
                      className="w-12 h-10 rounded border border-border cursor-pointer"
                    />
                    <input
                      type="text"
                      value={customPrimaryColor}
                      onChange={(e) => handleCustomColorChange(e.target.value)}
                      placeholder="hsl(240, 5.9%, 10%)"
                      className="flex-1 px-3 py-2 border border-border rounded-md bg-background text-foreground"
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={resetToDefault}
                    className="flex items-center gap-2 px-3 py-2 text-sm bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Reset
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// Utility functions for color conversion
function rgbToHsl(r: number, g: number, b: number) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

function hslToHex(hsl: string): string {
  const match = hsl.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
  if (!match) return '#000000';

  const h = parseInt(match[1]);
  const s = parseInt(match[2]);
  const l = parseInt(match[3]);

  const c = (1 - Math.abs(2 * l / 100 - 1)) * s / 100;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l / 100 - c / 2;

  let r = 0;
  let g = 0;
  let b = 0;

  if (h >= 0 && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (h >= 60 && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (h >= 180 && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (h >= 240 && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (h >= 300 && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  const rHex = Math.round((r + m) * 255).toString(16).padStart(2, '0');
  const gHex = Math.round((g + m) * 255).toString(16).padStart(2, '0');
  const bHex = Math.round((b + m) * 255).toString(16).padStart(2, '0');

  return `#${rHex}${gHex}${bHex}`;
}
