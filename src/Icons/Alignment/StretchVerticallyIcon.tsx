import * as React from 'react';
import { IconProps } from '../types';

export const StretchVerticallyIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M1.5 0h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1 0-1ZM9 1H6v13H1.5a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H9V1Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
StretchVerticallyIconIcon.displayName = 'StretchVerticallyIconIcon';

export default StretchVerticallyIconIcon;
