import * as React from 'react';
import { IconProps } from '../types';

export const TextIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path d="M3.95 4.5a.45.45 0 1 1-.9 0v-2a.45.45 0 0 1 .45-.45h8a.45.45 0 0 1 .45.45v2a.45.45 0 1 1-.9 0V2.95h-3v9.1h1.204a.45.45 0 1 1 0 .9h-3.5a.45.45 0 1 1 0-.9H6.95v-9.1h-3V4.5Z" />
      </svg>
    );
  }
);
TextIconIcon.displayName = 'TextIconIcon';

export default TextIconIcon;
