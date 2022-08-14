import * as React from 'react';
import { IconProps } from '../types';

export const InfoCircledIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M7.5 5.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm0 .75a.5.5 0 0 1 .5.5V10h1v1H6v-1h1V7H6V6h1.5ZM.877 7.5a6.623 6.623 0 1 0 13.246 0 6.623 6.623 0 0 0-13.246 0ZM7.5 1.827a5.673 5.673 0 1 1 0 11.346 5.673 5.673 0 0 1 0-11.346Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
InfoCircledIconIcon.displayName = 'InfoCircledIconIcon';

export default InfoCircledIconIcon;
