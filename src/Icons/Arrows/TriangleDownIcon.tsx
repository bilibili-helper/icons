import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const TriangleDownIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Arrows', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="m11 6-3.5 4.5L4 6h7Z"/></svg>;
    }
);
TriangleDownIcon.displayName = 'TriangleDownIcon';
TriangleDownIcon.propTypes = {iconType: PropTypes.string};
TriangleDownIcon.defaultProps = {iconType: 'Arrows'};

export default TriangleDownIcon;