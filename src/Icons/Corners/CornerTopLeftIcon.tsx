import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const CornerTopLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Corners', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M11.5 3a.5.5 0 0 1 0 1H9.9c-1.128 0-1.945 0-2.586.053-.637.052-1.057.152-1.403.328a3.5 3.5 0 0 0-1.53 1.53c-.176.346-.276.766-.328 1.403C4 7.955 4 8.772 4 9.9v1.6a.5.5 0 0 1-1 0V9.877c0-1.1 0-1.958.056-2.645.057-.698.175-1.265.434-1.775A4.5 4.5 0 0 1 5.457 3.49c.51-.26 1.077-.377 1.775-.434C7.92 3 8.776 3 9.877 3H11.5Z"/></svg>;
    }
);
CornerTopLeftIcon.displayName = 'CornerTopLeftIcon';
CornerTopLeftIcon.propTypes = {iconType: PropTypes.string};
CornerTopLeftIcon.defaultProps = {iconType: 'Corners'};