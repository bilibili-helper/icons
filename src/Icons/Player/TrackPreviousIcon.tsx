import * as React from 'react';
import { IconProps } from '../types';

export const TrackPreviousIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M2.5 2.2a.55.55 0 0 1 .55.55v4.533a.5.5 0 0 1 .217-.225l9-4.75A.5.5 0 0 1 13 2.75v9.5a.5.5 0 0 1-.733.442l-9-4.75a.5.5 0 0 1-.217-.225v4.533a.55.55 0 0 1-1.1 0v-9.5a.55.55 0 0 1 .55-.55Zm9.5 9.22V3.58L4.571 7.5l7.43 3.92Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
TrackPreviousIconIcon.displayName = 'TrackPreviousIconIcon';

export default TrackPreviousIconIcon;
