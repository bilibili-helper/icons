import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const LetterCaseToggleIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Typography', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="m11.757 3.07 3.21 8.32a.5.5 0 1 1-.934.36l-1.05-2.725H9.61L8.567 11.75a.5.5 0 1 1-.934-.358l3.19-8.32a.5.5 0 0 1 .934-.001Zm.897 5.105H9.937l1.354-3.532 1.363 3.532ZM.01 8.61c0 2.024 1.35 3.402 2.89 3.402a3.06 3.06 0 0 0 2.255-.99v.508a.45.45 0 0 0 .9 0V5.72a.45.45 0 1 0-.9 0v.503A3.01 3.01 0 0 0 2.9 5.207C1.26 5.207.01 6.686.01 8.61Zm5.145-1.308c-.39-.721-1.213-1.244-2.067-1.244-.978 0-2.052.908-2.052 2.552 0 1.543.974 2.552 2.052 2.552.883 0 1.685-.667 2.067-1.364V7.302Z" fillRule="evenodd"/></svg>;
    }
);
LetterCaseToggleIcon.displayName = 'LetterCaseToggleIcon';
LetterCaseToggleIcon.propTypes = {iconType: PropTypes.string};
LetterCaseToggleIcon.defaultProps = {iconType: 'Typography'};