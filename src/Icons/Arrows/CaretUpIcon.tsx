import * as React from 'react';
import { IconProps } from '../types';

export const CaretUpIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path d="m4.182 8.182 3-3a.45.45 0 0 1 .636 0l3 3a.45.45 0 1 1-.636.636L7.5 6.136 4.818 8.818a.45.45 0 0 1-.636-.636Z" />
      </svg>
    );
  }
);
CaretUpIconIcon.displayName = 'CaretUpIconIcon';

export default CaretUpIconIcon;
