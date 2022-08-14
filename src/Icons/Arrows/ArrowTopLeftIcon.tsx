import * as React from 'react';
import { IconProps } from '../types';

export const ArrowTopLeftIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path d="M11.354 10.646 4.707 4H9a.5.5 0 1 0 0-1H3.5a.5.5 0 0 0-.5.5V9a.5.5 0 1 0 1 0V4.707l6.646 6.647a.5.5 0 0 0 .708-.708Z" />
      </svg>
    );
  }
);
ArrowTopLeftIconIcon.displayName = 'ArrowTopLeftIconIcon';

export default ArrowTopLeftIconIcon;
