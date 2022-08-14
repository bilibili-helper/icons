import * as React from 'react';
import { IconProps } from '../types';

export const Share1IconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M3.5 10a2.5 2.5 0 1 1 2.213-3.664l3.391-2.12a2.5 2.5 0 1 1 .411.804l-3.53 2.207a2.528 2.528 0 0 1 0 .546l3.53 2.206a2.5 2.5 0 1 1-.411.804l-3.39-2.12A2.5 2.5 0 0 1 3.5 10Zm0-1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM13 3.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM11.5 13a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
Share1IconIcon.displayName = 'Share1IconIcon';

export default Share1IconIcon;
