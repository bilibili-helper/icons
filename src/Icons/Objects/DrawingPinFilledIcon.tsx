import * as React from 'react';
import { IconProps } from '../types';

export const DrawingPinFilledIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="11.341" height="11.341" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M6.952.146a.5.5 0 0 0 0 .708l.653.653-4.848 3.636-1.108-1.107a.5.5 0 1 0-.707.707l2.475 2.475-3.27 3.27a.5.5 0 1 0 .707.707l3.27-3.27 2.475 2.474a.5.5 0 1 0 .707-.707L6.198 8.585l3.637-4.849.653.653a.5.5 0 1 0 .707-.707L7.659.146a.5.5 0 0 0-.707 0Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
DrawingPinFilledIconIcon.displayName = 'DrawingPinFilledIconIcon';

export default DrawingPinFilledIconIcon;
