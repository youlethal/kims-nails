import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { defaultConfig, applyBranding } from './config';
import TemplateLayout from './components/layout/TemplateLayout';

function App() {
  useEffect(() => {
    applyBranding(defaultConfig.branding);
    
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <TemplateLayout 
          branding={defaultConfig.branding}
          modules={defaultConfig.modules}
        />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;