import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const TriangleUpIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Arrows', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M11 9 7.5 4.5 4 9h7Z"/></svg>;
    }
);
TriangleUpIcon.displayName = 'TriangleUpIcon';
TriangleUpIcon.propTypes = {iconType: PropTypes.string};
TriangleUpIcon.defaultProps = {iconType: 'Arrows'};