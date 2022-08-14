import * as React from 'react';
import { IconProps } from '../types';

export const CheckCircledIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M10.038 4.841a.5.5 0 0 0-.697.121L6.52 8.972 5.357 7.787a.5.5 0 0 0-.714.7L6.227 10.1a.5.5 0 0 0 .765-.062l3.167-4.5a.5.5 0 0 0-.121-.697ZM.878 7.5a6.623 6.623 0 1 0 13.245 0 6.623 6.623 0 0 0-13.246 0ZM7.5 1.827a5.673 5.673 0 1 1 0 11.346 5.673 5.673 0 0 1 0-11.346Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
CheckCircledIconIcon.displayName = 'CheckCircledIconIcon';

export default CheckCircledIconIcon;
