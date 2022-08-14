import * as React from 'react';
import { IconProps } from '../types';

export const ArrowLeftIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path d="M6.854 3.854 3.707 7H12.5a.5.5 0 0 1 0 1H3.707l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708Z" />
      </svg>
    );
  }
);
ArrowLeftIconIcon.displayName = 'ArrowLeftIconIcon';

export default ArrowLeftIconIcon;
