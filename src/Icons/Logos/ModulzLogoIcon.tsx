import * as React from 'react';
import { IconProps } from '../types';

export const ModulzLogoIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M4.37 5.333V1l2.89 2.167-2.89 2.166Zm-.481.723L1 3.889v4.333l2.889-2.166Zm0 5.777L1 9.667V14l2.889-2.167Zm6.74-5.777L7.742 3.889v4.333l2.889-2.166Zm.482-.723V1L14 3.167l-2.889 2.166ZM14 8.944l-2.889-2.166v4.333L14 8.944Zm-13 0 2.889-2.166v4.333L1 8.944Zm6.26-.722V3.89L4.37 6.056l2.89 2.166ZM1 3.167 3.889 1v4.333L1 3.167Zm9.63 2.166V1L7.74 3.167l2.89 2.166Zm.481.723L14 3.889v4.333l-2.889-2.166ZM14 14V9.667l-2.889 2.166L14 14Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
ModulzLogoIconIcon.displayName = 'ModulzLogoIconIcon';

export default ModulzLogoIconIcon;
