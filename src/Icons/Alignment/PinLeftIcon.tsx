import * as React from 'react';
import { IconProps } from '../types';

export const PinLeftIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M2.5 13.95a.45.45 0 0 0 .45-.45v-12a.45.45 0 0 0-.9 0v12c0 .248.202.45.45.45Zm6.568-2.882a.45.45 0 0 0 0-.636L6.586 7.95H14.5a.45.45 0 0 0 0-.9H6.586l2.482-2.482a.45.45 0 0 0-.636-.636l-3.25 3.25a.45.45 0 0 0 0 .636l3.25 3.25a.45.45 0 0 0 .636 0Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
PinLeftIconIcon.displayName = 'PinLeftIconIcon';

export default PinLeftIconIcon;
