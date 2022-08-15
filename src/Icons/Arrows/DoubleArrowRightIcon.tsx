import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const DoubleArrowRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Arrows', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M2.146 11.854a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L5.793 7.5l-3.647 3.646a.5.5 0 0 0 0 .708Zm6 0a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L11.793 7.5l-3.647 3.646a.5.5 0 0 0 0 .708Z" fillRule="evenodd"/></svg>;
    }
);
DoubleArrowRightIcon.displayName = 'DoubleArrowRightIcon';
DoubleArrowRightIcon.propTypes = {iconType: PropTypes.string};
DoubleArrowRightIcon.defaultProps = {iconType: 'Arrows'};

export default DoubleArrowRightIcon;