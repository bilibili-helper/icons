import * as React from 'react';
import { IconProps } from '../types';

export const DividerHorizontalIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path d="M2.5 7h10a.5.5 0 0 1 0 1h-10a.5.5 0 1 1 0-1Z" />
      </svg>
    );
  }
);
DividerHorizontalIconIcon.displayName = 'DividerHorizontalIconIcon';

export default DividerHorizontalIconIcon;
