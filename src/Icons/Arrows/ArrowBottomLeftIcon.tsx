import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const ArrowBottomLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Arrows', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M11.354 4.354 4.707 11H9a.5.5 0 1 1 0 1H3.5a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 1 0v4.293l6.646-6.647a.5.5 0 0 1 .708.708Z"/></svg>;
    }
);
ArrowBottomLeftIcon.displayName = 'ArrowBottomLeftIcon';
ArrowBottomLeftIcon.propTypes = {iconType: PropTypes.string};
ArrowBottomLeftIcon.defaultProps = {iconType: 'Arrows'};