import * as React from 'react';
import { IconProps } from '../types';

export const EraserIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h15v15H0V0Z" />
          <path
            d="m9.068.73 5.203 5.202a.5.5 0 0 1 0 .707l-6.924 6.925a1.5 1.5 0 0 1-2.122 0l-3.789-3.79a1.5 1.5 0 0 1 0-2.12L8.361.728a.5.5 0 0 1 .707 0ZM4.106 6.397l4.496 4.496 4.608-4.608L8.714 1.79 4.106 6.398Zm-.708.708L2.143 8.36a.5.5 0 0 0 0 .708l3.79 3.789a.5.5 0 0 0 .706 0l1.255-1.255-4.496-4.496Z"
            fill="#000"
          />
        </g>
      </svg>
    );
  }
);
EraserIconIcon.displayName = 'EraserIconIcon';

export default EraserIconIcon;
