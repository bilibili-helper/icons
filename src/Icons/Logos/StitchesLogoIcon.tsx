import * as React from 'react';
import { IconProps } from '../types';

export const StitchesLogoIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M.85 7.5a6.65 6.65 0 1 0 13.3 0 6.65 6.65 0 0 0-13.3 0Zm1.063-.844 7.65-4.417c.3.117.587.26.859.424L3.77 6.503a.447.447 0 0 0-.234.374.447.447 0 0 0 .196.394l3.592 2.567-3.453 1.994a5.638 5.638 0 0 1-1.96-5.176Zm6.48 3.605 1.448-.836a.448.448 0 0 0 .018-.01l1.451-.838a.45.45 0 0 0 .052-.756L7.828 5.2l3.388-1.957a5.637 5.637 0 0 1 1.849 5.24L5.569 12.81a5.623 5.623 0 0 1-.882-.41l3.681-2.126a.448.448 0 0 0 .025-.014ZM4.817 6.939l.692-.4 3.297 2.444-.625.36L4.817 6.94ZM6.978 5.69l3.297 2.444-.62.358L6.36 6.048l.62-.357Zm-4.735-.265A5.652 5.652 0 0 1 8.332 1.91l-6.09 3.515ZM7.5 13.15a5.651 5.651 0 0 0 5.189-3.41l-5.842 3.373c.214.024.432.037.653.037Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
StitchesLogoIconIcon.displayName = 'StitchesLogoIconIcon';

export default StitchesLogoIconIcon;
