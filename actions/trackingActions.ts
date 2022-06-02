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
        event: 'ctaCreateAccount', ctaCreateAccountInfo: info
      });
    }
  }
};

export const ctaPublishNowTracking = (): void => {
  if (typeof window !== 'undefined' && window) {
    const { dataLayer } = window;
    if (dataLayer) {
      const info = {
        "event_name" : "click" ,
        "event_info" : "publicar"
      };
      dataLayer.push({"event": "ctaPublish", "ctaPublishInfo": info});
    }
  }
};
