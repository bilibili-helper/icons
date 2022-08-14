import * as React from 'react';
import { IconProps } from '../../types';

export const AllSidesIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M9.75 3h-4.5L7.5.75 9.75 3Zm0 9h-4.5l2.25 2.25L9.75 12Zm-9-4.5L3 9.75v-4.5L.75 7.5ZM12 5.25v4.5l2.25-2.25L12 5.25Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
AllSidesIconIcon.displayName = 'AllSidesIconIcon';

export default AllSidesIconIcon;
