import * as React from 'react';
import { IconProps } from '../types';

export const TargetIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M5.25 7.5a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0ZM7.5 6.05a1.45 1.45 0 1 1 0 2.9 1.45 1.45 0 0 1 0-2.9Zm0-2.975a4.425 4.425 0 1 1 0 8.85 4.425 4.425 0 0 1 0-8.85ZM3.925 7.5a3.575 3.575 0 1 0 7.15 0 3.575 3.575 0 0 0-7.15 0ZM7.5.9a6.6 6.6 0 1 1 0 13.2A6.6 6.6 0 0 1 7.5.9ZM1.8 7.5a5.7 5.7 0 1 0 11.4 0 5.7 5.7 0 0 0-11.4 0Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
TargetIconIcon.displayName = 'TargetIconIcon';

export default TargetIconIcon;
