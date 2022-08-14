import * as React from 'react';
import { IconProps } from '../types';

export const BoxIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M1 2.5v10A1.5 1.5 0 0 0 2.5 14h10a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 12.5 1h-10A1.5 1.5 0 0 0 1 2.5ZM2.5 2a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5h-10Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
BoxIconIcon.displayName = 'BoxIconIcon';

export default BoxIconIcon;
