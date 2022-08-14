import * as React from 'react';
import { IconProps } from '../types';

export const LetterCaseUppercaseIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="m4.094 3.077 3.076 8.32a.5.5 0 1 1-.938.346L5.224 9.016H2.027L1.02 11.743a.5.5 0 1 1-.938-.347l3.076-8.32a.5.5 0 0 1 .937 0Zm.816 5.089H2.34l1.284-3.474L4.91 8.166Zm6.93-5.09 3.076 8.32a.5.5 0 0 1-.938.347L12.97 9.016H9.773l-1.008 2.727a.5.5 0 1 1-.938-.347l3.076-8.32a.5.5 0 0 1 .938 0Zm.816 5.09h-2.568l1.284-3.474 1.284 3.474Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
LetterCaseUppercaseIconIcon.displayName = 'LetterCaseUppercaseIconIcon';

export default LetterCaseUppercaseIconIcon;
