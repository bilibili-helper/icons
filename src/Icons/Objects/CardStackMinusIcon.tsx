import * as React from 'react';
import { IconProps } from '../types';

export const CardStackMinusIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M5 6.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Zm-3 4.415v.585A1.5 1.5 0 0 0 3.5 13h8a1.5 1.5 0 0 0 1.5-1.5v-.585A1.5 1.5 0 0 0 14 9.5v-6A1.5 1.5 0 0 0 12.5 2h-10A1.5 1.5 0 0 0 1 3.5v6a1.5 1.5 0 0 0 1 1.415ZM2 3.5v6a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5ZM12 11H3v.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V11Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
CardStackMinusIconIcon.displayName = 'CardStackMinusIconIcon';

export default CardStackMinusIconIcon;
