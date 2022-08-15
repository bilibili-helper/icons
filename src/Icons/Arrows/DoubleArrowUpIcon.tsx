import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const DoubleArrowUpIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Arrows', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M11.854 6.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 .708.708L7.5 3.207l3.646 3.647a.5.5 0 0 0 .708 0Zm0 6a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 .708.708L7.5 9.207l3.646 3.647a.5.5 0 0 0 .708 0Z" fillRule="evenodd"/></svg>;
    }
);
DoubleArrowUpIcon.displayName = 'DoubleArrowUpIcon';
DoubleArrowUpIcon.propTypes = {iconType: PropTypes.string};
DoubleArrowUpIcon.defaultProps = {iconType: 'Arrows'};

export default DoubleArrowUpIcon;