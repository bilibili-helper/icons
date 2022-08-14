import * as React from 'react';
import { IconProps } from '../types';

export const SlashIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path d="M9.466 1h1.352L5.46 14H4.109L9.466 1Z" />
      </svg>
    );
  }
);
SlashIconIcon.displayName = 'SlashIconIcon';

export default SlashIconIcon;
