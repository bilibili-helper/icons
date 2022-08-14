import * as React from 'react';
import { IconProps } from '../types';

export const FilePlusIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M5.25 7H7V5.25a.5.5 0 1 1 1 0V7h1.75a.5.5 0 0 1 0 1H8v1.75a.5.5 0 0 1-1 0V8H5.25a.5.5 0 1 1 0-1ZM3.5 1h6a.5.5 0 0 1 .354.146l2.926 2.927c.141.14.22.332.22.53V12.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 12.5v-10A1.5 1.5 0 0 1 3.5 1ZM3 2.5v10a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V4.707L9.293 2H3.5a.5.5 0 0 0-.5.5Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
FilePlusIconIcon.displayName = 'FilePlusIconIcon';

export default FilePlusIconIcon;
