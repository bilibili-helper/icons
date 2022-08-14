import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const ArrowDownIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Arrows', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M8 2.5v8.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 1 1 .708-.708L7 11.293V2.5a.5.5 0 0 1 1 0Z"/></svg>;
    }
);
ArrowDownIconIcon.displayName = 'ArrowDownIconIcon';
ArrowDownIconIcon.propTypes = {iconType: PropTypes.string};
ArrowDownIconIcon.defaultProps = {iconType: 'Arrows'};

export default ArrowDownIconIcon;