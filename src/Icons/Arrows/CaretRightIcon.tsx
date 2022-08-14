import * as React from 'react';
import { IconProps } from '../types';

export const CaretRightIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path d="m6.818 4.182 3 3a.45.45 0 0 1 0 .636l-3 3a.45.45 0 1 1-.636-.636L8.864 7.5 6.182 4.818a.45.45 0 0 1 .636-.636Z" />
      </svg>
    );
  }
);
CaretRightIconIcon.displayName = 'CaretRightIconIcon';

export default CaretRightIconIcon;
