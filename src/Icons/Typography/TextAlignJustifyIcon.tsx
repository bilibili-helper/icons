import * as React from 'react';
import { IconProps } from '../types';

export const TextAlignJustifyIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M2 4.5a.5.5 0 0 0 .5.5h10a.5.5 0 1 0 0-1h-10a.5.5 0 0 0-.5.5ZM2.5 7h10a.5.5 0 1 1 0 1h-10a.5.5 0 1 1 0-1Zm0 3h10a.5.5 0 1 1 0 1h-10a.5.5 0 1 1 0-1Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
TextAlignJustifyIconIcon.displayName = 'TextAlignJustifyIconIcon';

export default TextAlignJustifyIconIcon;
