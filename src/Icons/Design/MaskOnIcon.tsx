import * as React from 'react';
import { IconProps } from '../types';

export const MaskOnIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M0 2v11a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1Zm10.625 5.5a3.125 3.125 0 1 0-6.25 0 3.125 3.125 0 0 0 6.25 0Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
MaskOnIconIcon.displayName = 'MaskOnIconIcon';

export default MaskOnIconIcon;
