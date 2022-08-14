import * as React from 'react';
import { IconProps } from '../types';

export const CalendarIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M7.5 7a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm1.5.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2.5-.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM11 9.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM9.5 9a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM7 9.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM5.5 9a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM3 9.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm.5 1.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm1.5.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2.5-.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm1.5.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm-4-10V2h5v-.5a.5.5 0 0 1 1 0V2h1.5A1.5 1.5 0 0 1 14 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 12.5v-9A1.5 1.5 0 0 1 2.5 2H4v-.5a.5.5 0 1 1 1 0Zm5 2a.5.5 0 0 0 1 0V3h1.5a.5.5 0 0 1 .5.5V5H2V3.5a.5.5 0 0 1 .5-.5H4v.5a.5.5 0 0 0 1 0V3h5v.5Zm-8 9a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V6H2v6.5Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
CalendarIconIcon.displayName = 'CalendarIconIcon';

export default CalendarIconIcon;
