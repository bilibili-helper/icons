import * as React from 'react';
import { IconProps } from '../types';

export const HeightIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path d="m7.818 1.682 2.5 2.5a.45.45 0 1 1-.637.636L7.95 3.086v8.828l1.732-1.732a.45.45 0 0 1 .637.636l-2.5 2.5a.45.45 0 0 1-.637 0l-2.5-2.5a.45.45 0 0 1 .637-.636l1.731 1.732V3.086L5.318 4.818a.45.45 0 1 1-.637-.636l2.5-2.5a.45.45 0 0 1 .637 0Z" />
      </svg>
    );
  }
);
HeightIconIcon.displayName = 'HeightIconIcon';

export default HeightIconIcon;
