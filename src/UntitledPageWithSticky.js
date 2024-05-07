import React, { useRef, useEffect } from 'react';
import Sticky from 'sticky-js';
import UntitledPage from './components/UntitledPage/index1';

function initStickyElement(element) {
  if (element) {
    const stickyInstance = new Sticky(element);
    return () => stickyInstance.destroy();
  }
  return undefined;
}

function UntitledPageWithSticky() {
  const stickyElementRef = useRef(null);

  useEffect(() => {
    initStickyElement(stickyElementRef.current);
    return () => {
      initStickyElement(stickyElementRef.current)();
    };
  }, [stickyElementRef]);

  return (
    <div ref={stickyElementRef} className="sticky-element">
      <UntitledPage />
    </div>
  );
}

export default UntitledPageWithSticky;