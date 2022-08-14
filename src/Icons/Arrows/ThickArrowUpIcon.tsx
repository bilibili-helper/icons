import * as React from 'react';
import { IconProps } from '../types';

export const ThickArrowUpIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="m7.907 1.21 5 7A.5.5 0 0 1 12.5 9H10v2.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V9H2.5a.5.5 0 0 1-.407-.79l5-7a.5.5 0 0 1 .814 0ZM5.5 8a.5.5 0 0 1 .5.5V11h3V8.5a.5.5 0 0 1 .5-.5h2.028L7.5 2.36 3.472 8H5.5Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
ThickArrowUpIconIcon.displayName = 'ThickArrowUpIconIcon';

export default ThickArrowUpIconIcon;
