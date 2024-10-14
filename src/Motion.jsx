import React, { forwardRef } from 'react';

const MotionSection = forwardRef(({ children }, ref) => (
  <section ref={ref} style={{ minHeight: '100vh' }}>
    {children}
  </section>
));

export default MotionSection;
