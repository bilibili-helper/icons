import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const DoubleArrowDownIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Arrows', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M3.146 2.146a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0-.708-.708L7.5 5.793 3.854 2.146a.5.5 0 0 0-.708 0Zm0 6a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0-.708-.708L7.5 11.793 3.854 8.146a.5.5 0 0 0-.708 0Z" fillRule="evenodd"/></svg>;
    }
);
DoubleArrowDownIconIcon.displayName = 'DoubleArrowDownIconIcon';
DoubleArrowDownIconIcon.propTypes = {iconType: PropTypes.string};
DoubleArrowDownIconIcon.defaultProps = {iconType: 'Arrows'};

export default DoubleArrowDownIconIcon;