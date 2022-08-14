import * as React from 'react';
import { IconProps } from '../types';

export const CheckIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path d="m11.648 4.592-4.25 6.5a.625.625 0 0 1-.944.12l-2.75-2.5a.625.625 0 1 1 .841-.925l2.208 2.007 3.849-5.886a.625.625 0 0 1 1.046.684Z" />
      </svg>
    );
  }
);
CheckIconIcon.displayName = 'CheckIconIcon';

export default CheckIconIcon;
