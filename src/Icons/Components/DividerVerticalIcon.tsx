import * as React from 'react';
import { IconProps } from '../types';

export const DividerVerticalIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path d="M8 2.5v10a.5.5 0 1 1-1 0v-10a.5.5 0 1 1 1 0Z" />
      </svg>
    );
  }
);
DividerVerticalIconIcon.displayName = 'DividerVerticalIconIcon';

export default DividerVerticalIconIcon;
