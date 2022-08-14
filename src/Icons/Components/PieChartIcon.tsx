import * as React from 'react';
import { IconProps } from '../types';

export const PieChartIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M7 3.128A4.4 4.4 0 0 1 11.872 8H7V3.128ZM.85 7.5a6.65 6.65 0 1 0 13.3 0 6.65 6.65 0 0 0-13.3 0ZM7.5 1.85a5.65 5.65 0 1 1 0 11.3 5.65 5.65 0 0 1 0-11.3Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
PieChartIconIcon.displayName = 'PieChartIconIcon';

export default PieChartIconIcon;
