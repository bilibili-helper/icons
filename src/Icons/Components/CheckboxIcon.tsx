import * as React from 'react';
import { IconProps } from '../types';

export const CheckboxIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M10.22 4.816a.5.5 0 0 0-.695.13L6.64 9.148l-1.443-1.74a.5.5 0 1 0-.77.638l1.866 2.25a.5.5 0 0 0 .797-.037l3.26-4.749a.5.5 0 0 0-.13-.695ZM3 2h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm9 1v9H3V3h9Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
CheckboxIconIcon.displayName = 'CheckboxIconIcon';

export default CheckboxIconIcon;
