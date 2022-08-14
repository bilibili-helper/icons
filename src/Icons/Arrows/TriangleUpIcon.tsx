import * as React from 'react';
import { IconProps } from '../types';

export const TriangleUpIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path d="M11 9 7.5 4.5 4 9h7Z" />
      </svg>
    );
  }
);
TriangleUpIconIcon.displayName = 'TriangleUpIconIcon';

export default TriangleUpIconIcon;
