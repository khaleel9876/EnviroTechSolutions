export const initAnalytics = () => {
  console.log('[Analytics] Initialized');
};

export const trackPageView = (path) => {
  console.log('[Analytics] Page view:', path);
};

export const trackEvent = (eventName, eventData = {}) => {
  console.log('[Analytics] Event:', eventName, eventData);
};