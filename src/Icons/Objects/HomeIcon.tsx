import * as React from 'react';
import { IconProps } from '../types';

export const HomeIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="m7.92.222 6.75 6.64a.6.6 0 0 1-.84.856L13 6.902V12.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5V6.902l-.83.816a.6.6 0 0 1-.84-.856L7.08.222a.6.6 0 0 1 .84 0ZM12 5.918V12h-2V8.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V12H3V5.918l4.5-4.426L12 5.918ZM9 12V9H7v3h2Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
HomeIconIcon.displayName = 'HomeIconIcon';

export default HomeIconIcon;
