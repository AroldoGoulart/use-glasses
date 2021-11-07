import React, { useState } from 'react';
import { createPortal } from 'react-dom';

type IFrameType = {
  children: React.ReactNode;
};
function IFrame(props: IFrameType) {
  const { children } = props;

  const [contentRef, setContentRef] = useState<any>();

  const mountNode = contentRef?.contentWindow?.document?.body;

  return (
    <iframe title="SnowDev" ref={setContentRef}>
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
}

export default IFrame;
