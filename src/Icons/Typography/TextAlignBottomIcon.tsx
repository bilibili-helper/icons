import * as React from 'react';
import { IconProps } from '../types';

export const TextAlignBottomIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M3.5 5.1a.4.4 0 0 0-.4.4v7.034l-1.318-1.317a.4.4 0 1 0-.565.566l2 2a.4.4 0 0 0 .565 0l2-2a.4.4 0 1 0-.565-.566l-1.318 1.317V5.5a.4.4 0 0 0-.4-.4ZM8 12.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5Zm0-3a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5ZM8.5 7h6a.5.5 0 1 0 0-1h-6a.5.5 0 1 0 0 1Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
TextAlignBottomIconIcon.displayName = 'TextAlignBottomIconIcon';

export default TextAlignBottomIconIcon;
