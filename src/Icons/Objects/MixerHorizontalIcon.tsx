import * as React from 'react';
import { IconProps } from '../types';

export const MixerHorizontalIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M3.05 4.998a2.5 2.5 0 0 0 4.9 0A.506.506 0 0 0 8 5h5.5a.5.5 0 0 0 0-1H8c-.017 0-.033 0-.05.002a2.5 2.5 0 0 0-4.9 0A.506.506 0 0 0 3 4H1.5a.5.5 0 1 0 0 1H3c.017 0 .033 0 .05-.002ZM4 4.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM9.5 13a2.5 2.5 0 0 1-2.45-2.002A.506.506 0 0 1 7 11H1.5a.5.5 0 0 1 0-1H7c.017 0 .033 0 .05.002a2.5 2.5 0 0 1 4.9 0A.506.506 0 0 1 12 10h1.5a.5.5 0 0 1 0 1H12c-.017 0-.033 0-.05-.002A2.5 2.5 0 0 1 9.5 13Zm0-4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
MixerHorizontalIconIcon.displayName = 'MixerHorizontalIconIcon';

export default MixerHorizontalIconIcon;
