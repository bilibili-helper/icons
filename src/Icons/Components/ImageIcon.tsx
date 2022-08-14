import * as React from 'react';
import { IconProps } from '../types';

export const ImageIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M5.75 5.5a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 0 0-3.5 0Zm1.75-.85a.85.85 0 1 1 0 1.7.85.85 0 0 1 0-1.7Zm5-3.65A1.5 1.5 0 0 1 14 2.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 12.5v-10A1.5 1.5 0 0 1 2.5 1h10ZM2 2.5v5.864l1.682-1.682a.45.45 0 0 1 .647.01l3.545 3.798 2.808-2.808a.45.45 0 0 1 .636 0L13 9.364V2.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5Zm0 7.136 1.989-1.988 3.542 3.794L8.941 13H2.5a.5.5 0 0 1-.5-.5V9.636ZM10.155 13l-1.672-1.847L11 8.636l2 2V12.5a.5.5 0 0 1-.5.5h-2.345Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
ImageIconIcon.displayName = 'ImageIconIcon';

export default ImageIconIcon;
