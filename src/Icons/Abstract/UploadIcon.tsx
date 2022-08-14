import * as React from 'react';
import { IconProps } from '../types';

export const UploadIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="m7.182 1.182-3 3a.45.45 0 0 0 .636.636L7.05 2.586V9.5a.45.45 0 1 0 .9 0V2.586l2.232 2.232a.45.45 0 0 0 .636-.636l-3-3a.45.45 0 0 0-.636 0ZM3 10.5V12c0 .554.446 1 .996 1h7.005A.999.999 0 0 0 12 12v-1.5a.5.5 0 0 1 1 0V12a2 2 0 0 1-1.999 2H3.996A1.997 1.997 0 0 1 2 12v-1.5a.5.5 0 0 1 1 0Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
UploadIconIcon.displayName = 'UploadIconIcon';

export default UploadIconIcon;
