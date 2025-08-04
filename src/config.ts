export interface BrandingConfig {
  businessName: string;
  logoUrl?: string;
  primaryColor: string;
  accentColor: string;
  fontFamily: string;
}

export const defaultConfig = {
  branding: {
    businessName: "Kims Nails",
    primaryColor: "#f73bde",
    accentColor: "#f0e033",
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