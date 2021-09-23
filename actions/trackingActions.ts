declare global {
  interface Window {
    dataLayer: any;
  }
}

export const ctaCreateAccountTracking = (button: string): void => {
  if (typeof window !== 'undefined' && window) {
    const { dataLayer } = window;
    if (dataLayer) {
      const info: object = { button, action: 'clic' };
      dataLayer.push({
        action: 'ctaCreateAccount', ctaCreateAccountInfo: info
      });
    }
  }
};