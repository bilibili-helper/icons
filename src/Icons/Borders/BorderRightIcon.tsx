import * as React from 'react';
import { IconProps } from '../types';

export const BorderRightIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M13.25 14h1.5V1h-1.5v13ZM5 7.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm0 6a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm-2-6a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm0 6a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm4-6a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm-6 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm6 6a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm-6 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm6-8a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm-6 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm6-2a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm-6 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm6 6a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm-6 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm6 2a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm-6 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm8-4a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm0 6a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2-6a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm0 6a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm-6-12a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm-2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm4 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm-6 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm8 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
BorderRightIconIcon.displayName = 'BorderRightIconIcon';

export default BorderRightIconIcon;
