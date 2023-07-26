import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const AlignBaselineIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Typography', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="m10.97 2.08 3 8.32a.5.5 0 1 1-.94.34l-.982-2.724H8.952L7.97 10.74a.5.5 0 1 1-.94-.339l3-8.32a.5.5 0 0 1 .94 0Zm.771 5.086H9.26l1.24-3.442 1.241 3.442ZM2.9 2.5v7.034l1.318-1.317a.4.4 0 1 1 .565.566l-2 2a.4.4 0 0 1-.565 0l-2-2a.4.4 0 1 1 .565-.566L2.1 9.534V2.5a.4.4 0 0 1 .8 0ZM.5 13.1h14a.4.4 0 1 1 0 .8H.5a.4.4 0 1 1 0-.8Z" fillRule="evenodd"/></svg>;
    }
);
AlignBaselineIcon.displayName = 'AlignBaselineIcon';
AlignBaselineIcon.propTypes = {iconType: PropTypes.string};
AlignBaselineIcon.defaultProps = {iconType: 'Typography'};