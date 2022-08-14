import * as React from 'react';
import { IconProps } from '../types';

export const SectionIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M1.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM1 5v5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1Zm1 5h11V5H2v5Zm0 3.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM3.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM4 13.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM5.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM6 13.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM7.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM8 13.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM9.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm.5 11.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM11.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm.5 11.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM13.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm.5 11.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
SectionIconIcon.displayName = 'SectionIconIcon';

export default SectionIconIcon;
