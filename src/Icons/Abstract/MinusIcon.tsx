import * as React from 'react';
import { IconProps } from '../types';

export const MinusIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path d="M2.75 7h9.5a.5.5 0 0 1 0 1h-9.5a.5.5 0 1 1 0-1Z" />
      </svg>
    );
  }
);
MinusIconIcon.displayName = 'MinusIconIcon';

export default MinusIconIcon;
