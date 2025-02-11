const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);//(Cumulative Layout Shift) → Measures page layout stability.
      getFID(onPerfEntry);//First Input Delay) → Measures responsiveness 
      getFCP(onPerfEntry);//(First Contentful Paint) → Time taken for first visible content to appear.
      getLCP(onPerfEntry);//(Largest Contentful Paint) → Time taken for the main content to load.
      getTTFB(onPerfEntry);//Time to First Byte) → Measures server response time.
    });
  }
};

export default reportWebVitals;
