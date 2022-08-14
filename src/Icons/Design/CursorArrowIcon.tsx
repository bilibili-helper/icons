import * as React from 'react';
import { IconProps } from '../types';

export const CursorArrowIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M3.827.126 12.86 7.95a.5.5 0 0 1-.306.878l-3.334.147 1.931 4.244a.5.5 0 0 1-.247.662l-2.153.98a.5.5 0 0 1-.662-.247L6.153 10.37l-2.29 2.416A.5.5 0 0 1 3 12.44V.504a.5.5 0 0 1 .827-.378ZM4 11.188l1.938-2.044a.5.5 0 0 1 .818.137l2.035 4.463 1.242-.566-2.031-4.463a.5.5 0 0 1 .433-.707l2.82-.124L4 1.599v9.589Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
CursorArrowIconIcon.displayName = 'CursorArrowIconIcon';

export default CursorArrowIconIcon;
