import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const DoubleArrowLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Arrows', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M6.854 3.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L3.207 7.5l3.647-3.646a.5.5 0 0 0 0-.708Zm6 0a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L9.207 7.5l3.647-3.646a.5.5 0 0 0 0-.708Z" fillRule="evenodd"/></svg>;
    }
);
DoubleArrowLeftIcon.displayName = 'DoubleArrowLeftIcon';
DoubleArrowLeftIcon.propTypes = {iconType: PropTypes.string};
DoubleArrowLeftIcon.defaultProps = {iconType: 'Arrows'};