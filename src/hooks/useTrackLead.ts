export const useTrackLead = () => {
  const trackLead = (eventData?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'Lead', eventData);
    }
  };

  return trackLead;
};
