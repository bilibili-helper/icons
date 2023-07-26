import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const CornerBottomLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Corners', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M11.5 12a.5.5 0 0 0 0-1H9.9c-1.128 0-1.945 0-2.586-.053-.637-.052-1.057-.152-1.403-.328a3.5 3.5 0 0 1-1.53-1.53c-.176-.346-.276-.766-.328-1.403C4 7.045 4 6.228 4 5.1V3.5a.5.5 0 0 0-1 0v1.623c0 1.1 0 1.958.056 2.645.057.698.175 1.265.434 1.775a4.5 4.5 0 0 0 1.967 1.967c.51.26 1.077.377 1.775.434C7.92 12 8.776 12 9.877 12H11.5Z"/></svg>;
    }
);
CornerBottomLeftIcon.displayName = 'CornerBottomLeftIcon';
CornerBottomLeftIcon.propTypes = {iconType: PropTypes.string};
CornerBottomLeftIcon.defaultProps = {iconType: 'Corners'};