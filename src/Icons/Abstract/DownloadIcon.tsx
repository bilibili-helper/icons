import * as React from 'react';
import { IconProps } from '../types';

export const DownloadIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M7.95 1.5v6.914l2.232-2.232a.45.45 0 0 1 .636.636l-3 3a.45.45 0 0 1-.636 0l-3-3a.45.45 0 0 1 .636-.636L7.05 8.414V1.5a.45.45 0 1 1 .9 0ZM3 10.5V12c0 .554.446 1 .996 1h7.005A.999.999 0 0 0 12 12v-1.5a.5.5 0 0 1 1 0V12a2 2 0 0 1-1.999 2H3.996A1.997 1.997 0 0 1 2 12v-1.5a.5.5 0 0 1 1 0Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
DownloadIconIcon.displayName = 'DownloadIconIcon';

export default DownloadIconIcon;
