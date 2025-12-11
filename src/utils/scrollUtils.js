export const scrollToTopOnReload = () => {
  window.scrollTo(0, 0);
};

//Initialize scroll to top on page load (browser reload, navigation, etc.)
export const initScrollToTop = () => {
  // Scroll immediately
  window.scrollTo(0, 0);
  
  // Also scroll when DOM is ready
//   if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', () => {
//       window.scrollTo(0, 0);
//     });
//   }
  
  // Scroll when window fully loads
//   window.addEventListener('load', () => {
//     window.scrollTo(0, 0);
//   });
  
  // Handle page visibility (when tab comes back into focus)
 // document.addEventListener('visibilitychange', () => {
//     if (document.visibilityState === 'visible') {
//       window.scrollTo(0, 0);
//     }
//   }
// );
};