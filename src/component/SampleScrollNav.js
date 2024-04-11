import React, { useEffect } from 'react';
import _debounce from 'lodash/debounce';

const SmoothScroll = () => {
  const handleScroll = _debounce(() => {
    // Your scroll handling code here
    console.log('Scrolling...');
  }, 1000); // Adjust the delay time as needed (200ms in this example)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div>
      <div style={{ height: '100vh' }}>Section 1</div>
      <div style={{ height: '100vh' }}>Section 2</div>
      <div style={{ height: '100vh' }}>Section 3</div>
      <div style={{ height: '100vh' }}>Section 4</div>
      <div style={{ height: '100vh' }}>Section 5</div>
    </div>
  );
};
export default SmoothScroll;