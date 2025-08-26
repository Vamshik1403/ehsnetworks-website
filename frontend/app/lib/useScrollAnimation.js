import { useEffect, useState } from 'react';

export const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const sections = document.querySelectorAll('[data-animate]');

    // Make sections that are already in the viewport visible immediately
    const initiallyVisible = {};
    sections.forEach((s) => {
      const rect = s.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        if (s.id) initiallyVisible[s.id] = true;
      }
    });
    if (Object.keys(initiallyVisible).length > 0) {
      setIsVisible(prev => ({ ...prev, ...initiallyVisible }));
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id) setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Safety: if IntersectionObserver doesn't fire for some reason, reveal after short timeout
    const revealTimeout = setTimeout(() => {
      sections.forEach((s) => {
        if (s.id) setIsVisible(prev => ({ ...prev, [s.id]: true }));
      });
    }, 2500);

    return () => {
      clearTimeout(revealTimeout);
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return isVisible;
};
