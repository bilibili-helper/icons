import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const DrawingPinIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M9.621 1.136a.5.5 0 0 0 0 .707l.653.653-4.848 3.637-1.108-1.108a.5.5 0 1 0-.707.707l2.475 2.475-3.27 3.27a.5.5 0 1 0 .707.708l3.27-3.27 2.475 2.474a.5.5 0 1 0 .707-.707L8.867 9.574l3.637-4.848.653.653a.5.5 0 1 0 .707-.707l-3.536-3.536a.5.5 0 0 0-.707 0ZM10.99 3.21l.8.801-3.636 4.85L6.14 6.846l4.849-3.637Z" fillRule="evenodd"/></svg>;
    }
);
DrawingPinIcon.displayName = 'DrawingPinIcon';
DrawingPinIcon.propTypes = {iconType: PropTypes.string};
DrawingPinIcon.defaultProps = {iconType: 'Objects'};