import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const ArrowUpIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Arrows', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="m7.854 2.146 4 4a.5.5 0 0 1-.708.708L8 3.707V12.5a.5.5 0 1 1-1 0V3.707L3.854 6.854a.5.5 0 1 1-.708-.708l4-4a.5.5 0 0 1 .708 0Z"/></svg>;
    }
);
ArrowUpIcon.displayName = 'ArrowUpIcon';
ArrowUpIcon.propTypes = {iconType: PropTypes.string};
ArrowUpIcon.defaultProps = {iconType: 'Arrows'};