import * as React from 'react';
import { IconProps } from '../types';

export const ArrowRightIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path d="m8.854 3.146 4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L11.293 8H2.5a.5.5 0 1 1 0-1h8.793L8.146 3.854a.5.5 0 1 1 .708-.708Z" />
      </svg>
    );
  }
);
ArrowRightIconIcon.displayName = 'ArrowRightIconIcon';

export default ArrowRightIconIcon;
