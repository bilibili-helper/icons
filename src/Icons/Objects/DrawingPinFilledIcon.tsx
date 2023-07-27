import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const DrawingPinFilledIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M8.952 2.146a.5.5 0 0 0 0 .708l.653.653-4.848 3.636-1.108-1.107a.5.5 0 1 0-.707.707l2.475 2.475-3.27 3.27a.5.5 0 1 0 .707.707l3.27-3.27 2.475 2.474a.5.5 0 1 0 .707-.707l-1.108-1.107 3.637-4.849.653.653a.5.5 0 1 0 .707-.707L9.659 2.146a.5.5 0 0 0-.707 0Z" fillRule="evenodd"/></svg>;
    }
);
DrawingPinFilledIcon.displayName = 'DrawingPinFilledIcon';
DrawingPinFilledIcon.propTypes = {iconType: PropTypes.string};
DrawingPinFilledIcon.defaultProps = {iconType: 'Objects'};