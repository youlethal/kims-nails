export interface BrandingConfig {
  businessName: string;
  primaryColor: string;
  accentColor: string;
  fontFamily: string;
}

export const defaultConfig = {
  branding: {
    businessName: "Kims Nails",
    primaryColor: "#6366f1",
    accentColor: "#6366f1",
    fontFamily: "Inter, sans-serif"
  },
  modules: ["booking","gallery"],
  darkMode: false
};

export function applyBranding(branding: BrandingConfig) {
  const root = document.documentElement;
  root.style.setProperty('--primary-color', branding.primaryColor);
  root.style.setProperty('--accent-color', branding.accentColor);
  root.style.setProperty('--font-family', branding.fontFamily);
}