import * as React from 'react';
import { IconProps } from '../types';

export const UpdateIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M6.589 12.844a.521.521 0 0 1-.178 1.027C3.5 13.367.861 10.913.861 7.297c0-1.537.699-2.745 1.515-3.663.585-.658 1.254-1.193 1.792-1.602H2.532a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V2.686l-.001.002c-.572.43-1.27.957-1.875 1.638-.715.804-1.253 1.776-1.253 2.97 0 3.045 2.207 5.119 4.686 5.548ZM8.404 2.17a.521.521 0 1 1 .192-1.024c2.874.54 5.457 2.98 5.457 6.557 0 1.537-.699 2.745-1.515 3.663-.585.658-1.254 1.193-1.792 1.602h1.636a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v1.846l.002-.002c.571-.43 1.27-.957 1.875-1.638.714-.804 1.252-1.776 1.252-2.97 0-3.013-2.16-5.074-4.607-5.534Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
UpdateIconIcon.displayName = 'UpdateIconIcon';

export default UpdateIconIcon;
