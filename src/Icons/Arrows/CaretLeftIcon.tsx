import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const CaretLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Arrows', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M8.818 4.818 6.136 7.5l2.682 2.682a.45.45 0 0 1-.636.636l-3-3a.45.45 0 0 1 0-.636l3-3a.45.45 0 1 1 .636.636Z"/></svg>;
    }
);
CaretLeftIcon.displayName = 'CaretLeftIcon';
CaretLeftIcon.propTypes = {iconType: PropTypes.string};
CaretLeftIcon.defaultProps = {iconType: 'Arrows'};