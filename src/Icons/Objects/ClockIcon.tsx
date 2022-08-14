import * as React from 'react';
import { IconProps } from '../types';

export const ClockIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M7.5 4a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .146.354l2 2a.5.5 0 0 0 .708-.708L8 7.293V4.5a.5.5 0 0 0-.5-.5ZM.877 7.5a6.623 6.623 0 1 0 13.246 0 6.623 6.623 0 0 0-13.246 0ZM7.5 1.827a5.673 5.673 0 1 1 0 11.346 5.673 5.673 0 0 1 0-11.346Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
ClockIconIcon.displayName = 'ClockIconIcon';

export default ClockIconIcon;
