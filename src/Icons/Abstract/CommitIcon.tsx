import * as React from 'react';
import { IconProps } from '../types';

export const CommitIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M7.5 10.9A3.4 3.4 0 0 1 4.137 8H.5a.5.5 0 0 1 0-1h3.637a3.4 3.4 0 0 1 6.726 0H14.5a.5.5 0 0 1 0 1h-3.637A3.4 3.4 0 0 1 7.5 10.9Zm0-.95a2.45 2.45 0 1 1 0-4.9 2.45 2.45 0 0 1 0 4.9Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
CommitIconIcon.displayName = 'CommitIconIcon';

export default CommitIconIcon;
