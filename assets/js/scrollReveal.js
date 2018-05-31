$(document).ready(function(){
    // GENERAL SETTING
    window.sr = ScrollReveal({ reset: true });
    mobile:true,
    
    // Custom Settings
    sr.reveal('.foo-1', {
      origin: 'bottom',
      duration: 200,
      opacity: 0
    });
    
    sr.reveal('.foo-2', { 
      origin: 'bottom', 
      duration: 2000,
      opacity: 0,
      scale: 0.9
    });
    
    sr.reveal('.foo-3', { 
      // rotate: { x: 100, y: 200, z: 0 },
      origin:'bottom',
      duration: 1000,
      easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
      delay: 0
    });
    
    sr.reveal('.foo-4', { 
      viewFactor: 0.5,
      easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
      
    });
    
    sr.reveal('.foo-5', { 
      duration: 200,
      easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
       
    });
});