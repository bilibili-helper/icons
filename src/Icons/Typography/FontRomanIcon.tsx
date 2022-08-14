import * as React from 'react';
import { IconProps } from '../types';

export const FontRomanIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path d="M5.25 3.05h4.5a.45.45 0 1 1 0 .9H8.1v7.1h1.65a.45.45 0 1 1 0 .9h-4.5a.45.45 0 1 1 0-.9H6.9v-7.1H5.25a.45.45 0 1 1 0-.9Z" />
      </svg>
    );
  }
);
FontRomanIconIcon.displayName = 'FontRomanIconIcon';

export default FontRomanIconIcon;
