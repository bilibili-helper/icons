import * as React from 'react';
import { IconProps } from '../types';

export const BorderAllIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M1 .25h13a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H1A.75.75 0 0 1 .25 14V1A.75.75 0 0 1 1 .25Zm.75 13h11.5V1.75H1.75v11.5ZM7.5 5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0-2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0 4a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm-2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm-2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm6 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm-4 2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0 2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
BorderAllIconIcon.displayName = 'BorderAllIconIcon';

export default BorderAllIconIcon;
