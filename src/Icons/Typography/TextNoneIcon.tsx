import * as React from 'react';
import { IconProps } from '../types';

export const TextNoneIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M13.354 1.646a.5.5 0 0 0-.708 0l-.717.718a.448.448 0 0 0-.429-.314h-8a.45.45 0 0 0-.45.45v2a.45.45 0 1 0 .9 0V2.95h3v4.393l-5.304 5.303a.5.5 0 1 0 .708.708L6.95 8.757v3.293H5.754a.45.45 0 1 0 0 .9h3.5a.45.45 0 0 0 0-.9H8.05V7.657l5.304-5.303a.5.5 0 0 0 0-.708ZM11.05 3.243V2.95h-3v3.293l3-3Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
TextNoneIconIcon.displayName = 'TextNoneIconIcon';

export default TextNoneIconIcon;
