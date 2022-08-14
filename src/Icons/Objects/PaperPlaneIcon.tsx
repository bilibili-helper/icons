import * as React from 'react';
import { IconProps } from '../types';

export const PaperPlaneIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M.628 1.166a.5.5 0 0 0-.06.586L3.921 7.5.568 13.248a.5.5 0 0 0 .635.709l13.5-6a.5.5 0 0 0 0-.914l-13.5-6a.5.5 0 0 0-.575.123Zm1.584 1.42L13.27 7.5 2.212 12.414 4.846 7.9H9a.4.4 0 1 0 0-.8H4.846L2.212 2.586Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
PaperPlaneIconIcon.displayName = 'PaperPlaneIconIcon';

export default PaperPlaneIconIcon;
