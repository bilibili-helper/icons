import * as React from 'react';
import { IconProps } from '../types';

export const LetterCaseLowercaseIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M.81 8.61c0 2.024 1.348 3.402 2.889 3.402a3.06 3.06 0 0 0 2.255-.99v.508a.45.45 0 0 0 .9 0V5.72a.45.45 0 1 0-.9 0v.503a3.01 3.01 0 0 0-2.255-1.016c-1.64 0-2.89 1.479-2.89 3.403ZM5.953 7.3c-.39-.72-1.213-1.243-2.067-1.243-.978 0-2.052.908-2.052 2.552 0 1.543.974 2.552 2.052 2.552.883 0 1.684-.666 2.067-1.363V7.301Zm1.956 1.31c0 2.024 1.35 3.402 2.89 3.402a3.06 3.06 0 0 0 2.255-.99v.508a.45.45 0 1 0 .9 0V5.72a.45.45 0 0 0-.9 0v.503A3.01 3.01 0 0 0 10.8 5.207c-1.64 0-2.89 1.479-2.89 3.403Zm5.145-1.308c-.39-.721-1.213-1.244-2.067-1.244-.978 0-2.052.908-2.052 2.552 0 1.543.974 2.552 2.052 2.552.883 0 1.685-.667 2.067-1.364V7.302Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
LetterCaseLowercaseIconIcon.displayName = 'LetterCaseLowercaseIconIcon';

export default LetterCaseLowercaseIconIcon;
