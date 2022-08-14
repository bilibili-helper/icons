import * as React from 'react';
import { IconProps } from '../types';

export const FontFamilyIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path d="M5 2h7.499a.5.5 0 0 1 .001 1H8.692l-.287.855A1894.574 1894.574 0 0 1 7.343 7H8.5a.5.5 0 1 1 0 1H7.004a286.12 286.12 0 0 1-1.046 3.039c-.322.9-.75 1.447-1.29 1.739-.505.273-1.026.272-1.384.272H3.25a.55.55 0 0 1 0-1.1c.392 0 .654-.01.894-.14.22-.119.511-.395.778-1.142.185-.517.532-1.527.92-2.668H4.5a.5.5 0 1 1 0-1h1.682a1317.981 1317.981 0 0 0 1.18-3.496L7.533 3H5c-.849 0-1.5.651-1.5 1.5a.5.5 0 0 1-1 0C2.5 3.099 3.599 2 5 2Z" />
      </svg>
    );
  }
);
FontFamilyIconIcon.displayName = 'FontFamilyIconIcon';

export default FontFamilyIconIcon;
