export interface Theme {
  name: string;
  label: string;
  cssVars: {
    light: Record<string, string>;
    dark: Record<string, string>;
  };
  fonts?: {
    primary?: string;
    secondary?: string;
    mono?: string;
    fontUrl?: string;
  };
}

export const themes: Theme[] = [
  {
    name: "default",
    label: "Default",
    cssVars: {
      light: {
        "--background": "oklch(1 0 0)",
        "--foreground": "oklch(0.145 0 0)",
        "--card": "oklch(1 0 0)",
        "--card-foreground": "oklch(0.145 0 0)",
        "--popover": "oklch(1 0 0)",
        "--popover-foreground": "oklch(0.145 0 0)",
        "--primary": "oklch(0.205 0 0)",
        "--primary-foreground": "oklch(0.985 0 0)",
        "--secondary": "oklch(0.97 0 0)",
        "--secondary-foreground": "oklch(0.205 0 0)",
        "--muted": "oklch(0.97 0 0)",
        "--muted-foreground": "oklch(0.556 0 0)",
        "--accent": "oklch(0.97 0 0)",
        "--accent-foreground": "oklch(0.205 0 0)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.922 0 0)",
        "--input": "oklch(0.922 0 0)",
        "--ring": "oklch(0.708 0 0)",
        "--radius": "0.625rem"
      },
      dark: {
        "--background": "oklch(0.145 0 0)",
        "--foreground": "oklch(0.985 0 0)",
        "--card": "oklch(0.205 0 0)",
        "--card-foreground": "oklch(0.985 0 0)",
        "--popover": "oklch(0.205 0 0)",
        "--popover-foreground": "oklch(0.985 0 0)",
        "--primary": "oklch(0.922 0 0)",
        "--primary-foreground": "oklch(0.205 0 0)",
        "--secondary": "oklch(0.269 0 0)",
        "--secondary-foreground": "oklch(0.985 0 0)",
        "--muted": "oklch(0.269 0 0)",
        "--muted-foreground": "oklch(0.708 0 0)",
        "--accent": "oklch(0.269 0 0)",
        "--accent-foreground": "oklch(0.985 0 0)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(1 0 0 / 10%)",
        "--input": "oklch(1 0 0 / 15%)",
        "--ring": "oklch(0.556 0 0)"
      }
    }
  },
  {
    name: "blue",
    label: "Blue",
    cssVars: {
      light: {
        "--background": "oklch(1 0 0)",
        "--foreground": "oklch(0.145 0 0)",
        "--card": "oklch(1 0 0)",
        "--card-foreground": "oklch(0.145 0 0)",
        "--popover": "oklch(1 0 0)",
        "--popover-foreground": "oklch(0.145 0 0)",
        "--primary": "oklch(0.6 0.25 253)",
        "--primary-foreground": "oklch(0.985 0 0)",
        "--secondary": "oklch(0.97 0.01 253)",
        "--secondary-foreground": "oklch(0.205 0 0)",
        "--muted": "oklch(0.97 0.01 253)",
        "--muted-foreground": "oklch(0.556 0.01 253)",
        "--accent": "oklch(0.94 0.05 253)",
        "--accent-foreground": "oklch(0.205 0 0)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.922 0.01 253)",
        "--input": "oklch(0.922 0.01 253)",
        "--ring": "oklch(0.6 0.25 253)",
        "--radius": "0.625rem"
      },
      dark: {
        "--background": "oklch(0.145 0.01 253)",
        "--foreground": "oklch(0.985 0 0)",
        "--card": "oklch(0.205 0.01 253)",
        "--card-foreground": "oklch(0.985 0 0)",
        "--popover": "oklch(0.205 0.01 253)",
        "--popover-foreground": "oklch(0.985 0 0)",
        "--primary": "oklch(0.7 0.2 253)",
        "--primary-foreground": "oklch(0.145 0.01 253)",
        "--secondary": "oklch(0.269 0.01 253)",
        "--secondary-foreground": "oklch(0.985 0 0)",
        "--muted": "oklch(0.269 0.01 253)",
        "--muted-foreground": "oklch(0.708 0.01 253)",
        "--accent": "oklch(0.35 0.05 253)",
        "--accent-foreground": "oklch(0.985 0 0)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(1 0 0 / 10%)",
        "--input": "oklch(1 0 0 / 15%)",
        "--ring": "oklch(0.7 0.2 253)"
      }
    }
  },
  {
    name: "green",
    label: "Green",
    cssVars: {
      light: {
        "--background": "oklch(1 0 0)",
        "--foreground": "oklch(0.145 0 0)",
        "--card": "oklch(1 0 0)",
        "--card-foreground": "oklch(0.145 0 0)",
        "--popover": "oklch(1 0 0)",
        "--popover-foreground": "oklch(0.145 0 0)",
        "--primary": "oklch(0.5 0.2 142)",
        "--primary-foreground": "oklch(0.985 0 0)",
        "--secondary": "oklch(0.97 0.01 142)",
        "--secondary-foreground": "oklch(0.205 0 0)",
        "--muted": "oklch(0.97 0.01 142)",
        "--muted-foreground": "oklch(0.556 0.01 142)",
        "--accent": "oklch(0.94 0.05 142)",
        "--accent-foreground": "oklch(0.205 0 0)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.922 0.01 142)",
        "--input": "oklch(0.922 0.01 142)",
        "--ring": "oklch(0.5 0.2 142)",
        "--radius": "0.625rem"
      },
      dark: {
        "--background": "oklch(0.145 0.01 142)",
        "--foreground": "oklch(0.985 0 0)",
        "--card": "oklch(0.205 0.01 142)",
        "--card-foreground": "oklch(0.985 0 0)",
        "--popover": "oklch(0.205 0.01 142)",
        "--popover-foreground": "oklch(0.985 0 0)",
        "--primary": "oklch(0.65 0.15 142)",
        "--primary-foreground": "oklch(0.145 0.01 142)",
        "--secondary": "oklch(0.269 0.01 142)",
        "--secondary-foreground": "oklch(0.985 0 0)",
        "--muted": "oklch(0.269 0.01 142)",
        "--muted-foreground": "oklch(0.708 0.01 142)",
        "--accent": "oklch(0.35 0.05 142)",
        "--accent-foreground": "oklch(0.985 0 0)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(1 0 0 / 10%)",
        "--input": "oklch(1 0 0 / 15%)",
        "--ring": "oklch(0.65 0.15 142)"
      }
    }
  },
  {
    name: "orange",
    label: "Orange",
    cssVars: {
      light: {
        "--background": "oklch(1 0 0)",
        "--foreground": "oklch(0.145 0 0)",
        "--card": "oklch(1 0 0)",
        "--card-foreground": "oklch(0.145 0 0)",
        "--popover": "oklch(1 0 0)",
        "--popover-foreground": "oklch(0.145 0 0)",
        "--primary": "oklch(0.6 0.2 42)",
        "--primary-foreground": "oklch(0.985 0 0)",
        "--secondary": "oklch(0.97 0.01 42)",
        "--secondary-foreground": "oklch(0.205 0 0)",
        "--muted": "oklch(0.97 0.01 42)",
        "--muted-foreground": "oklch(0.556 0.01 42)",
        "--accent": "oklch(0.94 0.05 42)",
        "--accent-foreground": "oklch(0.205 0 0)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.922 0.01 42)",
        "--input": "oklch(0.922 0.01 42)",
        "--ring": "oklch(0.6 0.2 42)",
        "--radius": "0.625rem"
      },
      dark: {
        "--background": "oklch(0.145 0.01 42)",
        "--foreground": "oklch(0.985 0 0)",
        "--card": "oklch(0.205 0.01 42)",
        "--card-foreground": "oklch(0.985 0 0)",
        "--popover": "oklch(0.205 0.01 42)",
        "--popover-foreground": "oklch(0.985 0 0)",
        "--primary": "oklch(0.7 0.15 42)",
        "--primary-foreground": "oklch(0.145 0.01 42)",
        "--secondary": "oklch(0.269 0.01 42)",
        "--secondary-foreground": "oklch(0.985 0 0)",
        "--muted": "oklch(0.269 0.01 42)",
        "--muted-foreground": "oklch(0.708 0.01 42)",
        "--accent": "oklch(0.35 0.05 42)",
        "--accent-foreground": "oklch(0.985 0 0)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(1 0 0 / 10%)",
        "--input": "oklch(1 0 0 / 15%)",
        "--ring": "oklch(0.7 0.15 42)"
      }
    }
  },
  {
    name: "red",
    label: "Red",
    cssVars: {
      light: {
        "--background": "oklch(1 0 0)",
        "--foreground": "oklch(0.145 0 0)",
        "--card": "oklch(1 0 0)",
        "--card-foreground": "oklch(0.145 0 0)",
        "--popover": "oklch(1 0 0)",
        "--popover-foreground": "oklch(0.145 0 0)",
        "--primary": "oklch(0.55 0.25 12)",
        "--primary-foreground": "oklch(0.985 0 0)",
        "--secondary": "oklch(0.97 0.01 12)",
        "--secondary-foreground": "oklch(0.205 0 0)",
        "--muted": "oklch(0.97 0.01 12)",
        "--muted-foreground": "oklch(0.556 0.01 12)",
        "--accent": "oklch(0.94 0.05 12)",
        "--accent-foreground": "oklch(0.205 0 0)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.922 0.01 12)",
        "--input": "oklch(0.922 0.01 12)",
        "--ring": "oklch(0.55 0.25 12)",
        "--radius": "0.625rem"
      },
      dark: {
        "--background": "oklch(0.145 0.01 12)",
        "--foreground": "oklch(0.985 0 0)",
        "--card": "oklch(0.205 0.01 12)",
        "--card-foreground": "oklch(0.985 0 0)",
        "--popover": "oklch(0.205 0.01 12)",
        "--popover-foreground": "oklch(0.985 0 0)",
        "--primary": "oklch(0.7 0.2 12)",
        "--primary-foreground": "oklch(0.145 0.01 12)",
        "--secondary": "oklch(0.269 0.01 12)",
        "--secondary-foreground": "oklch(0.985 0 0)",
        "--muted": "oklch(0.269 0.01 12)",
        "--muted-foreground": "oklch(0.708 0.01 12)",
        "--accent": "oklch(0.35 0.05 12)",
        "--accent-foreground": "oklch(0.985 0 0)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(1 0 0 / 10%)",
        "--input": "oklch(1 0 0 / 15%)",
        "--ring": "oklch(0.7 0.2 12)"
      }
    }
  },
  {
    "name": "cyberpunk",
    "label": "Cyberpunk",
    "fonts": {
      "primary": "'Orbitron', monospace",
      "secondary": "'JetBrains Mono', monospace",
      "mono": "'JetBrains Mono', monospace",
      "fontUrl": "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;900&family=JetBrains+Mono:ital,wght@0,400;0,600;1,400&display=swap"
    },
    "cssVars": {
      "light": {
        /* Core surface colours — high-key, almost white */
        "--background": "oklch(0.96 0.01 260)",
        "--foreground": "oklch(0.22 0.03 280)",
  
        /* Cards & popovers — subtle glass-morph tint */
        "--card": "oklch(0.98 0.02 260 / 0.8)",
        "--card-foreground": "oklch(0.25 0.04 280)",
        "--popover": "oklch(0.98 0.02 260 / 0.9)",
        "--popover-foreground": "oklch(0.25 0.04 280)",
  
        /* Neon magentas & cyans */
        "--primary": "oklch(0.75 0.32 325)",
        "--primary-foreground": "oklch(0.98 0.01 260)",
        "--secondary": "oklch(0.92 0.1 190)",
        "--secondary-foreground": "oklch(0.2 0.05 260)",
  
        /* Muted greys with a cool hue */
        "--muted": "oklch(0.9 0.02 260)",
        "--muted-foreground": "oklch(0.55 0.03 260)",
  
        /* Accent — electric cyan */
        "--accent": "oklch(0.7 0.28 190)",
        "--accent-foreground": "oklch(0.98 0.01 260)",
  
        /* Destructive — hot red */
        "--destructive": "oklch(0.7 0.3 25)",
        "--border": "oklch(0.85 0.05 260)",
        "--input": "oklch(0.94 0.02 260)",
        "--ring": "oklch(0.75 0.32 325)",
        "--radius": "0.25rem"
      },
      "dark": {
        /* unchanged – already solid */
        "--background": "oklch(0.02 0.01 270)",
        "--foreground": "oklch(0.95 0.2 320)",
        "--card": "oklch(0.05 0.02 270)",
        "--card-foreground": "oklch(0.9 0.15 320)",
        "--popover": "oklch(0.05 0.02 270)",
        "--popover-foreground": "oklch(0.9 0.15 320)",
        "--primary": "oklch(0.8 0.35 320)",
        "--primary-foreground": "oklch(0.02 0.01 270)",
        "--secondary": "oklch(0.1 0.03 270)",
        "--secondary-foreground": "oklch(0.85 0.2 180)",
        "--muted": "oklch(0.08 0.02 270)",
        "--muted-foreground": "oklch(0.65 0.1 270)",
        "--accent": "oklch(0.7 0.3 180)",
        "--accent-foreground": "oklch(0.02 0.01 270)",
        "--destructive": "oklch(0.7 0.35 15)",
        "--border": "oklch(0.15 0.04 270)",
        "--input": "oklch(0.1 0.03 270)",
        "--ring": "oklch(0.8 0.35 320)"
      }
    }
  },
  {
    name: "elegant",
    label: "Elegant",
    fonts: {
      primary: "'Playfair Display', serif",
      secondary: "'Crimson Text', serif",
      mono: "'JetBrains Mono', monospace",
      fontUrl: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Crimson+Text:ital,wght@0,400;0,600;1,400;1,600&family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
    },
    cssVars: {
      light: {
        "--background": "oklch(0.98 0.005 60)",
        "--foreground": "oklch(0.15 0.02 30)",
        "--card": "oklch(0.99 0.003 60)",
        "--card-foreground": "oklch(0.15 0.02 30)",
        "--popover": "oklch(0.99 0.003 60)",
        "--popover-foreground": "oklch(0.15 0.02 30)",
        "--primary": "oklch(0.3 0.08 30)",
        "--primary-foreground": "oklch(0.98 0.005 60)",
        "--secondary": "oklch(0.92 0.01 60)",
        "--secondary-foreground": "oklch(0.25 0.05 30)",
        "--muted": "oklch(0.94 0.008 60)",
        "--muted-foreground": "oklch(0.45 0.03 30)",
        "--accent": "oklch(0.88 0.02 45)",
        "--accent-foreground": "oklch(0.2 0.04 30)",
        "--destructive": "oklch(0.5 0.15 15)",
        "--border": "oklch(0.88 0.015 60)",
        "--input": "oklch(0.9 0.012 60)",
        "--ring": "oklch(0.35 0.1 30)",
        "--radius": "0.75rem"
      },
      dark: {
        "--background": "oklch(0.08 0.01 30)",
        "--foreground": "oklch(0.95 0.008 60)",
        "--card": "oklch(0.12 0.015 30)",
        "--card-foreground": "oklch(0.92 0.006 60)",
        "--popover": "oklch(0.12 0.015 30)",
        "--popover-foreground": "oklch(0.92 0.006 60)",
        "--primary": "oklch(0.85 0.02 60)",
        "--primary-foreground": "oklch(0.1 0.012 30)",
        "--secondary": "oklch(0.18 0.02 30)",
        "--secondary-foreground": "oklch(0.88 0.008 60)",
        "--muted": "oklch(0.15 0.018 30)",
        "--muted-foreground": "oklch(0.65 0.005 60)",
        "--accent": "oklch(0.25 0.03 45)",
        "--accent-foreground": "oklch(0.9 0.006 60)",
        "--destructive": "oklch(0.65 0.18 15)",
        "--border": "oklch(0.2 0.025 30)",
        "--input": "oklch(0.16 0.02 30)",
        "--ring": "oklch(0.8 0.015 60)"
      }
    }
  },
  {
    name: "retro",
    label: "Retro",
    fonts: {
      primary: "'Fredoka', cursive",
      secondary: "'Space Grotesk', sans-serif",
      mono: "'JetBrains Mono', monospace",
      fontUrl: "https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
    },
    cssVars: {
      light: {
        "--background": "oklch(0.96 0.02 50)",
        "--foreground": "oklch(0.2 0.05 20)",
        "--card": "oklch(0.98 0.015 50)",
        "--card-foreground": "oklch(0.2 0.05 20)",
        "--popover": "oklch(0.98 0.015 50)",
        "--popover-foreground": "oklch(0.2 0.05 20)",
        "--primary": "oklch(0.6 0.2 25)",
        "--primary-foreground": "oklch(0.98 0.015 50)",
        "--secondary": "oklch(0.85 0.08 40)",
        "--secondary-foreground": "oklch(0.25 0.06 20)",
        "--muted": "oklch(0.9 0.04 45)",
        "--muted-foreground": "oklch(0.5 0.04 25)",
        "--accent": "oklch(0.75 0.15 60)",
        "--accent-foreground": "oklch(0.2 0.05 20)",
        "--destructive": "oklch(0.55 0.18 15)",
        "--border": "oklch(0.82 0.06 45)",
        "--input": "oklch(0.85 0.05 45)",
        "--ring": "oklch(0.6 0.2 25)",
        "--radius": "1rem"
      },
      dark: {
        "--background": "oklch(0.12 0.03 20)",
        "--foreground": "oklch(0.92 0.02 50)",
        "--card": "oklch(0.16 0.04 20)",
        "--card-foreground": "oklch(0.9 0.02 50)",
        "--popover": "oklch(0.16 0.04 20)",
        "--popover-foreground": "oklch(0.9 0.02 50)",
        "--primary": "oklch(0.7 0.22 25)",
        "--primary-foreground": "oklch(0.12 0.03 20)",
        "--secondary": "oklch(0.22 0.05 20)",
        "--secondary-foreground": "oklch(0.85 0.06 40)",
        "--muted": "oklch(0.18 0.04 20)",
        "--muted-foreground": "oklch(0.65 0.03 40)",
        "--accent": "oklch(0.35 0.1 60)",
        "--accent-foreground": "oklch(0.9 0.02 50)",
        "--destructive": "oklch(0.65 0.2 15)",
        "--border": "oklch(0.25 0.05 20)",
        "--input": "oklch(0.2 0.04 20)",
        "--ring": "oklch(0.7 0.22 25)"
      }
    }
  },
  {
    name: "minimal",
    label: "Minimal",
    fonts: {
      primary: "system-ui, -apple-system, sans-serif",
      secondary: "ui-monospace, monospace",
      mono: "ui-monospace, monospace"
    },
    cssVars: {
      light: {
        "--background": "oklch(1 0 0)",
        "--foreground": "oklch(0 0 0)",
        "--card": "oklch(0.99 0 0)",
        "--card-foreground": "oklch(0 0 0)",
        "--popover": "oklch(1 0 0)",
        "--popover-foreground": "oklch(0 0 0)",
        "--primary": "oklch(0 0 0)",
        "--primary-foreground": "oklch(1 0 0)",
        "--secondary": "oklch(0.95 0 0)",
        "--secondary-foreground": "oklch(0 0 0)",
        "--muted": "oklch(0.96 0 0)",
        "--muted-foreground": "oklch(0.4 0 0)",
        "--accent": "oklch(0.92 0 0)",
        "--accent-foreground": "oklch(0 0 0)",
        "--destructive": "oklch(0 0 0)",
        "--border": "oklch(0.9 0 0)",
        "--input": "oklch(0.95 0 0)",
        "--ring": "oklch(0 0 0)",
        "--radius": "0rem"
      },
      dark: {
        "--background": "oklch(0 0 0)",
        "--foreground": "oklch(1 0 0)",
        "--card": "oklch(0.03 0 0)",
        "--card-foreground": "oklch(1 0 0)",
        "--popover": "oklch(0 0 0)",
        "--popover-foreground": "oklch(1 0 0)",
        "--primary": "oklch(1 0 0)",
        "--primary-foreground": "oklch(0 0 0)",
        "--secondary": "oklch(0.1 0 0)",
        "--secondary-foreground": "oklch(1 0 0)",
        "--muted": "oklch(0.08 0 0)",
        "--muted-foreground": "oklch(0.7 0 0)",
        "--accent": "oklch(0.15 0 0)",
        "--accent-foreground": "oklch(1 0 0)",
        "--destructive": "oklch(0.8 0 0)",
        "--border": "oklch(0.2 0 0)",
        "--input": "oklch(0.1 0 0)",
        "--ring": "oklch(1 0 0)"
      }
    }
  },
  {
    name: "neon",
    label: "Neon",
    fonts: {
      primary: "'Space Grotesk', sans-serif",
      secondary: "'JetBrains Mono', monospace",
      mono: "'JetBrains Mono', monospace",
      fontUrl: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
    },
    cssVars: {
      light: {
        "--background": "oklch(0.08 0.01 270)",
        "--foreground": "oklch(0.95 0.15 300)",
        "--card": "oklch(0.12 0.02 270)",
        "--card-foreground": "oklch(0.9 0.12 300)",
        "--popover": "oklch(0.12 0.02 270)",
        "--popover-foreground": "oklch(0.9 0.12 300)",
        "--primary": "oklch(0.75 0.35 300)",
        "--primary-foreground": "oklch(0.08 0.01 270)",
        "--secondary": "oklch(0.18 0.03 180)",
        "--secondary-foreground": "oklch(0.85 0.2 180)",
        "--muted": "oklch(0.15 0.02 270)",
        "--muted-foreground": "oklch(0.65 0.08 300)",
        "--accent": "oklch(0.7 0.3 180)",
        "--accent-foreground": "oklch(0.08 0.01 270)",
        "--destructive": "oklch(0.7 0.35 15)",
        "--border": "oklch(0.25 0.05 270)",
        "--input": "oklch(0.2 0.03 270)",
        "--ring": "oklch(0.75 0.35 300)",
        "--radius": "0.5rem"
      },
      dark: {
        "--background": "oklch(0.04 0.005 270)",
        "--foreground": "oklch(0.98 0.2 300)",
        "--card": "oklch(0.08 0.01 270)",
        "--card-foreground": "oklch(0.95 0.15 300)",
        "--popover": "oklch(0.08 0.01 270)",
        "--popover-foreground": "oklch(0.95 0.15 300)",
        "--primary": "oklch(0.8 0.4 300)",
        "--primary-foreground": "oklch(0.04 0.005 270)",
        "--secondary": "oklch(0.12 0.02 180)",
        "--secondary-foreground": "oklch(0.9 0.25 180)",
        "--muted": "oklch(0.1 0.01 270)",
        "--muted-foreground": "oklch(0.7 0.1 300)",
        "--accent": "oklch(0.75 0.35 180)",
        "--accent-foreground": "oklch(0.04 0.005 270)",
        "--destructive": "oklch(0.75 0.4 15)",
        "--border": "oklch(0.2 0.03 270)",
        "--input": "oklch(0.15 0.02 270)",
        "--ring": "oklch(0.8 0.4 300)"
      }
    }
  },
  {
    name: "sunset",
    label: "Sunset",
    fonts: {
      primary: "'Inter', sans-serif",
      secondary: "'Fira Code', monospace",
      mono: "'Fira Code', monospace",
      fontUrl: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Fira+Code:wght@300;400;500;600;700&display=swap"
    },
    cssVars: {
      light: {
        "--background": "oklch(0.97 0.02 35)",
        "--foreground": "oklch(0.2 0.05 15)",
        "--card": "oklch(0.99 0.01 35)",
        "--card-foreground": "oklch(0.2 0.05 15)",
        "--popover": "oklch(0.99 0.01 35)",
        "--popover-foreground": "oklch(0.2 0.05 15)",
        "--primary": "oklch(0.65 0.25 25)",
        "--primary-foreground": "oklch(0.99 0.01 35)",
        "--secondary": "oklch(0.85 0.08 45)",
        "--secondary-foreground": "oklch(0.25 0.06 15)",
        "--muted": "oklch(0.92 0.03 40)",
        "--muted-foreground": "oklch(0.5 0.04 20)",
        "--accent": "oklch(0.7 0.2 50)",
        "--accent-foreground": "oklch(0.2 0.05 15)",
        "--destructive": "oklch(0.6 0.2 15)",
        "--border": "oklch(0.88 0.05 40)",
        "--input": "oklch(0.9 0.04 40)",
        "--ring": "oklch(0.65 0.25 25)",
        "--radius": "0.75rem"
      },
      dark: {
        "--background": "oklch(0.15 0.03 15)",
        "--foreground": "oklch(0.92 0.02 35)",
        "--card": "oklch(0.18 0.04 15)",
        "--card-foreground": "oklch(0.9 0.02 35)",
        "--popover": "oklch(0.18 0.04 15)",
        "--popover-foreground": "oklch(0.9 0.02 35)",
        "--primary": "oklch(0.75 0.3 25)",
        "--primary-foreground": "oklch(0.15 0.03 15)",
        "--secondary": "oklch(0.25 0.05 15)",
        "--secondary-foreground": "oklch(0.8 0.06 45)",
        "--muted": "oklch(0.2 0.04 15)",
        "--muted-foreground": "oklch(0.65 0.03 35)",
        "--accent": "oklch(0.4 0.15 50)",
        "--accent-foreground": "oklch(0.9 0.02 35)",
        "--destructive": "oklch(0.7 0.25 15)",
        "--border": "oklch(0.3 0.06 15)",
        "--input": "oklch(0.22 0.04 15)",
        "--ring": "oklch(0.75 0.3 25)"
      }
    }
  },
  {
    name: "ocean",
    label: "Ocean",
    fonts: {
      primary: "'Poppins', sans-serif",
      secondary: "'Source Code Pro', monospace",
      mono: "'Source Code Pro', monospace",
      fontUrl: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Source+Code+Pro:wght@300;400;500;600;700&display=swap"
    },
    cssVars: {
      light: {
        "--background": "oklch(0.98 0.01 220)",
        "--foreground": "oklch(0.18 0.02 200)",
        "--card": "oklch(0.99 0.005 220)",
        "--card-foreground": "oklch(0.18 0.02 200)",
        "--popover": "oklch(0.99 0.005 220)",
        "--popover-foreground": "oklch(0.18 0.02 200)",
        "--primary": "oklch(0.55 0.2 210)",
        "--primary-foreground": "oklch(0.99 0.005 220)",
        "--secondary": "oklch(0.92 0.02 220)",
        "--secondary-foreground": "oklch(0.25 0.03 200)",
        "--muted": "oklch(0.94 0.015 220)",
        "--muted-foreground": "oklch(0.45 0.02 200)",
        "--accent": "oklch(0.85 0.05 190)",
        "--accent-foreground": "oklch(0.2 0.02 200)",
        "--destructive": "oklch(0.55 0.18 15)",
        "--border": "oklch(0.88 0.02 220)",
        "--input": "oklch(0.9 0.015 220)",
        "--ring": "oklch(0.55 0.2 210)",
        "--radius": "0.5rem"
      },
      dark: {
        "--background": "oklch(0.1 0.02 200)",
        "--foreground": "oklch(0.95 0.01 220)",
        "--card": "oklch(0.14 0.025 200)",
        "--card-foreground": "oklch(0.92 0.01 220)",
        "--popover": "oklch(0.14 0.025 200)",
        "--popover-foreground": "oklch(0.92 0.01 220)",
        "--primary": "oklch(0.7 0.25 210)",
        "--primary-foreground": "oklch(0.1 0.02 200)",
        "--secondary": "oklch(0.2 0.03 200)",
        "--secondary-foreground": "oklch(0.85 0.02 220)",
        "--muted": "oklch(0.16 0.025 200)",
        "--muted-foreground": "oklch(0.65 0.01 220)",
        "--accent": "oklch(0.3 0.08 190)",
        "--accent-foreground": "oklch(0.9 0.01 220)",
        "--destructive": "oklch(0.65 0.2 15)",
        "--border": "oklch(0.25 0.04 200)",
        "--input": "oklch(0.18 0.03 200)",
        "--ring": "oklch(0.7 0.25 210)"
      }
    }
  },
  {
    name: "forest",
    label: "Forest",
    fonts: {
      primary: "'Merriweather', serif",
      secondary: "'Roboto Mono', monospace",
      mono: "'Roboto Mono', monospace",
      fontUrl: "https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&family=Roboto+Mono:wght@300;400;500;600;700&display=swap"
    },
    cssVars: {
      light: {
        "--background": "oklch(0.97 0.01 120)",
        "--foreground": "oklch(0.2 0.03 90)",
        "--card": "oklch(0.98 0.008 120)",
        "--card-foreground": "oklch(0.2 0.03 90)",
        "--popover": "oklch(0.98 0.008 120)",
        "--popover-foreground": "oklch(0.2 0.03 90)",
        "--primary": "oklch(0.4 0.15 130)",
        "--primary-foreground": "oklch(0.98 0.008 120)",
        "--secondary": "oklch(0.9 0.02 110)",
        "--secondary-foreground": "oklch(0.25 0.04 90)",
        "--muted": "oklch(0.93 0.015 120)",
        "--muted-foreground": "oklch(0.5 0.02 100)",
        "--accent": "oklch(0.82 0.06 140)",
        "--accent-foreground": "oklch(0.2 0.03 90)",
        "--destructive": "oklch(0.55 0.18 15)",
        "--border": "oklch(0.85 0.03 120)",
        "--input": "oklch(0.88 0.025 120)",
        "--ring": "oklch(0.4 0.15 130)",
        "--radius": "0.625rem"
      },
      dark: {
        "--background": "oklch(0.12 0.02 90)",
        "--foreground": "oklch(0.92 0.01 120)",
        "--card": "oklch(0.16 0.025 90)",
        "--card-foreground": "oklch(0.9 0.01 120)",
        "--popover": "oklch(0.16 0.025 90)",
        "--popover-foreground": "oklch(0.9 0.01 120)",
        "--primary": "oklch(0.65 0.2 130)",
        "--primary-foreground": "oklch(0.12 0.02 90)",
        "--secondary": "oklch(0.22 0.03 90)",
        "--secondary-foreground": "oklch(0.85 0.02 110)",
        "--muted": "oklch(0.18 0.025 90)",
        "--muted-foreground": "oklch(0.65 0.01 120)",
        "--accent": "oklch(0.35 0.1 140)",
        "--accent-foreground": "oklch(0.9 0.01 120)",
        "--destructive": "oklch(0.65 0.2 15)",
        "--border": "oklch(0.28 0.04 90)",
        "--input": "oklch(0.2 0.03 90)",
        "--ring": "oklch(0.65 0.2 130)"
      }
    }
  },
  {
    name: "lavender",
    label: "Lavender",
    fonts: {
      primary: "'Nunito', sans-serif",
      secondary: "'Cascadia Code', monospace",
      mono: "'Cascadia Code', monospace",
      fontUrl: "https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&display=swap"
    },
    cssVars: {
      light: {
        "--background": "oklch(0.98 0.01 280)",
        "--foreground": "oklch(0.2 0.02 260)",
        "--card": "oklch(0.99 0.008 280)",
        "--card-foreground": "oklch(0.2 0.02 260)",
        "--popover": "oklch(0.99 0.008 280)",
        "--popover-foreground": "oklch(0.2 0.02 260)",
        "--primary": "oklch(0.6 0.18 280)",
        "--primary-foreground": "oklch(0.99 0.008 280)",
        "--secondary": "oklch(0.92 0.02 290)",
        "--secondary-foreground": "oklch(0.25 0.03 260)",
        "--muted": "oklch(0.94 0.015 280)",
        "--muted-foreground": "oklch(0.5 0.02 270)",
        "--accent": "oklch(0.85 0.05 300)",
        "--accent-foreground": "oklch(0.2 0.02 260)",
        "--destructive": "oklch(0.55 0.18 15)",
        "--border": "oklch(0.88 0.02 280)",
        "--input": "oklch(0.9 0.015 280)",
        "--ring": "oklch(0.6 0.18 280)",
        "--radius": "0.875rem"
      },
      dark: {
        "--background": "oklch(0.1 0.015 260)",
        "--foreground": "oklch(0.95 0.01 280)",
        "--card": "oklch(0.14 0.02 260)",
        "--card-foreground": "oklch(0.92 0.01 280)",
        "--popover": "oklch(0.14 0.02 260)",
        "--popover-foreground": "oklch(0.92 0.01 280)",
        "--primary": "oklch(0.75 0.22 280)",
        "--primary-foreground": "oklch(0.1 0.015 260)",
        "--secondary": "oklch(0.2 0.025 260)",
        "--secondary-foreground": "oklch(0.85 0.02 290)",
        "--muted": "oklch(0.16 0.02 260)",
        "--muted-foreground": "oklch(0.65 0.01 280)",
        "--accent": "oklch(0.3 0.08 300)",
        "--accent-foreground": "oklch(0.9 0.01 280)",
        "--destructive": "oklch(0.65 0.2 15)",
        "--border": "oklch(0.25 0.03 260)",
        "--input": "oklch(0.18 0.025 260)",
        "--ring": "oklch(0.75 0.22 280)"
      }
    }
  },
  {
    name: "midnight",
    label: "Midnight",
    fonts: {
      primary: "'IBM Plex Sans', sans-serif",
      secondary: "'IBM Plex Mono', monospace",
      mono: "'IBM Plex Mono', monospace",
      fontUrl: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@300;400;500;600;700&display=swap"
    },
    cssVars: {
      light: {
        "--background": "oklch(0.95 0.005 240)",
        "--foreground": "oklch(0.15 0.01 220)",
        "--card": "oklch(0.97 0.003 240)",
        "--card-foreground": "oklch(0.15 0.01 220)",
        "--popover": "oklch(0.97 0.003 240)",
        "--popover-foreground": "oklch(0.15 0.01 220)",
        "--primary": "oklch(0.25 0.05 240)",
        "--primary-foreground": "oklch(0.97 0.003 240)",
        "--secondary": "oklch(0.88 0.01 240)",
        "--secondary-foreground": "oklch(0.2 0.015 220)",
        "--muted": "oklch(0.9 0.008 240)",
        "--muted-foreground": "oklch(0.45 0.008 230)",
        "--accent": "oklch(0.82 0.02 250)",
        "--accent-foreground": "oklch(0.15 0.01 220)",
        "--destructive": "oklch(0.5 0.15 15)",
        "--border": "oklch(0.85 0.01 240)",
        "--input": "oklch(0.87 0.008 240)",
        "--ring": "oklch(0.25 0.05 240)",
        "--radius": "0.375rem"
      },
      dark: {
        "--background": "oklch(0.08 0.008 220)",
        "--foreground": "oklch(0.95 0.005 240)",
        "--card": "oklch(0.12 0.01 220)",
        "--card-foreground": "oklch(0.92 0.005 240)",
        "--popover": "oklch(0.12 0.01 220)",
        "--popover-foreground": "oklch(0.92 0.005 240)",
        "--primary": "oklch(0.8 0.08 240)",
        "--primary-foreground": "oklch(0.08 0.008 220)",
        "--secondary": "oklch(0.18 0.015 220)",
        "--secondary-foreground": "oklch(0.85 0.01 240)",
        "--muted": "oklch(0.15 0.012 220)",
        "--muted-foreground": "oklch(0.65 0.005 240)",
        "--accent": "oklch(0.25 0.03 250)",
        "--accent-foreground": "oklch(0.9 0.005 240)",
        "--destructive": "oklch(0.65 0.18 15)",
        "--border": "oklch(0.22 0.02 220)",
        "--input": "oklch(0.16 0.012 220)",
        "--ring": "oklch(0.8 0.08 240)"
      }
    }
  }
];

export function applyScopedTheme(element: HTMLElement, theme: Theme, isDark: boolean) {
  const vars = isDark ? theme.cssVars.dark : theme.cssVars.light;
  
  Object.entries(vars).forEach(([key, value]) => {
    element.style.setProperty(key, value);
  });

  // Apply font families if defined
  if (theme.fonts) {
    // Load font if URL is provided
    if (theme.fonts.fontUrl) {
      loadFont(theme.fonts.fontUrl);
    }
    
    if (theme.fonts.primary) {
      element.style.setProperty('--font-family', theme.fonts.primary);
      element.style.fontFamily = theme.fonts.primary;
    }
    if (theme.fonts.mono) {
      element.style.setProperty('--font-mono', theme.fonts.mono);
    }
  }
}

function loadFont(url: string) {
  // Check if font link already exists
  const existingLink = document.querySelector(`link[href="${url}"]`);
  if (existingLink) return;

  // Create and append font link
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = url;
  document.head.appendChild(link);
}

export function getThemeStyles(theme: Theme, isDark: boolean): React.CSSProperties {
  const vars = isDark ? theme.cssVars.dark : theme.cssVars.light;
  
  const styles: Record<string, string> = {};
  Object.entries(vars).forEach(([key, value]) => {
    styles[key] = value;
  });

  // Add font families if defined
  if (theme.fonts) {
    // Load font if URL is provided (client-side only)
    if (typeof window !== 'undefined' && theme.fonts.fontUrl) {
      loadFont(theme.fonts.fontUrl);
    }
    
    if (theme.fonts.primary) {
      styles['--font-family'] = theme.fonts.primary;
      styles.fontFamily = theme.fonts.primary;
    }
    if (theme.fonts.mono) {
      styles['--font-mono'] = theme.fonts.mono;
    }
  }
  
  return styles as React.CSSProperties;
}
