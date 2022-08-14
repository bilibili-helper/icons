import * as React from 'react';
import { IconProps } from '../types';

export const SpaceBetweenVerticallyIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M1.5 0h12a.5.5 0 0 1 0 1H9v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1H1.5a.5.5 0 0 1 0-1ZM6 10v4H1.5a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H9v-4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
SpaceBetweenVerticallyIconIcon.displayName = 'SpaceBetweenVerticallyIconIcon';

export default SpaceBetweenVerticallyIconIcon;
