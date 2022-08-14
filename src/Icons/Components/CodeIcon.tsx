import * as React from 'react';
import { IconProps } from '../types';

export const CodeIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M9.686 2.036a.5.5 0 0 0-.65.278l-4 10a.5.5 0 1 0 .928.372l4-10a.5.5 0 0 0-.278-.65ZM3.854 5.854 2.207 7.5l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708.708Zm8-.708 2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L12.793 7.5l-1.647-1.646a.5.5 0 1 1 .708-.708Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
CodeIconIcon.displayName = 'CodeIconIcon';

export default CodeIconIcon;
