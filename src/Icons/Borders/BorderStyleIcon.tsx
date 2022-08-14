import * as React from 'react';
import { IconProps } from '../types';

export const BorderStyleIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M1 3.5a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 0-1h-12a.5.5 0 0 0-.5.5ZM1.5 7h2a.5.5 0 1 1 0 1h-2a.5.5 0 0 1 0-1Zm0 4a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm1.5.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2.5-.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm1.5.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2.5-.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm1.5.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm-7-4a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5Zm5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
BorderStyleIconIcon.displayName = 'BorderStyleIconIcon';

export default BorderStyleIconIcon;
