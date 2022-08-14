import * as React from 'react';
import { IconProps } from '../types';

export const PinBottomIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M13.95 13.5a.45.45 0 0 0-.45-.45h-12a.45.45 0 1 0 0 .9h12a.45.45 0 0 0 .45-.45Zm-2.882-6.568a.45.45 0 0 0-.636 0L7.95 9.414V1.5a.45.45 0 0 0-.9 0v7.914L4.568 6.932a.45.45 0 0 0-.636.636l3.25 3.25a.45.45 0 0 0 .636 0l3.25-3.25a.45.45 0 0 0 0-.636Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
PinBottomIconIcon.displayName = 'PinBottomIconIcon';

export default PinBottomIconIcon;
