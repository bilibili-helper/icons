import * as React from 'react';
import { IconProps } from '../types';

export const TextAlignCenterIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M2.5 4h10a.5.5 0 0 1 0 1h-10a.5.5 0 1 1 0-1Zm2 3h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1Zm-1 3h8a.5.5 0 0 1 0 1h-8a.5.5 0 1 1 0-1Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
TextAlignCenterIconIcon.displayName = 'TextAlignCenterIconIcon';

export default TextAlignCenterIconIcon;
