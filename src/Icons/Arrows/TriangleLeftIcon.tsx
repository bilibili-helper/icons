import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const TriangleLeftIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Arrows', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M9 11 4.5 7.5 9 4v7Z"/></svg>;
    }
);
TriangleLeftIconIcon.displayName = 'TriangleLeftIconIcon';
TriangleLeftIconIcon.propTypes = {iconType: PropTypes.string};
TriangleLeftIconIcon.defaultProps = {iconType: 'Arrows'};

export default TriangleLeftIconIcon;