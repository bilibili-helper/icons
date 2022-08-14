import * as React from 'react';
import { IconProps } from '../types';

export const EnterIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M4 1.5a.5.5 0 0 0 .5.5H12v11H4.5a.5.5 0 0 0 0 1H12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4.5a.5.5 0 0 0-.5.5Zm1.896 3.396a.5.5 0 0 0 0 .708L7.293 7H.5a.5.5 0 0 0 0 1h6.793L5.896 9.396a.5.5 0 0 0 .708.708l2.25-2.25a.5.5 0 0 0 0-.708l-2.25-2.25a.5.5 0 0 0-.708 0Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
EnterIconIcon.displayName = 'EnterIconIcon';

export default EnterIconIcon;
