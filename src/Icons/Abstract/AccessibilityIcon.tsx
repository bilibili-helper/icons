import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const AccessibilityIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Abstract', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M6.332 11.96a.5.5 0 0 1-.966-.26c.587-1.885.88-3.028.88-3.43V6.801l-1.958-.525a.5.5 0 1 1 .258-.966c1.103.375 1.87.563 2.3.563h1.31l2.297-.563a.5.5 0 0 1 .26.966l-1.966.527V8.27l.88 3.427a.5.5 0 0 1-.966.259C8.167 10.07 7.903 9.085 7.869 9c-.033-.085-.106-.127-.219-.127h-.307c-.115 0-.188.042-.218.127-.037.085-.301 1.071-.793 2.96Zm2.293-7.965a1.125 1.125 0 1 0-2.25 0 1.125 1.125 0 0 0 2.25 0ZM7.5.877a6.623 6.623 0 1 1 0 13.246A6.623 6.623 0 0 1 7.5.877ZM1.827 7.5a5.673 5.673 0 1 0 11.346 0 5.673 5.673 0 0 0-11.346 0Z" fillRule="evenodd"/></svg>;
    }
);
AccessibilityIcon.displayName = 'AccessibilityIcon';
AccessibilityIcon.propTypes = {iconType: PropTypes.string};
AccessibilityIcon.defaultProps = {iconType: 'Abstract'};

export default AccessibilityIcon;