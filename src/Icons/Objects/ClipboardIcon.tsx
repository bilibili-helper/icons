import * as React from 'react';
import { IconProps } from '../types';

export const ClipboardIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h15v15H0V0Z" />
          <path
            d="M4 .75V1h-.5A1.5 1.5 0 0 0 2 2.5v10A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 11.5 1H11V.75a.75.75 0 0 0-.75-.75h-5.5A.75.75 0 0 0 4 .75ZM5 1h5v1H5V1Zm6 1.25a.75.75 0 0 1-.75.75h-5.5A.75.75 0 0 1 4 2.25V2h-.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H11v.25Z"
            fill="#000"
          />
        </g>
      </svg>
    );
  }
);
ClipboardIconIcon.displayName = 'ClipboardIconIcon';

export default ClipboardIconIcon;
