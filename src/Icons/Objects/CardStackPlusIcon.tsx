import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const CardStackPlusIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M5.5 6H7V4.5a.5.5 0 1 1 1 0V6h1.5a.5.5 0 0 1 0 1H8v1.5a.5.5 0 1 1-1 0V7H5.5a.5.5 0 1 1 0-1ZM1 9.5v-6A1.5 1.5 0 0 1 2.5 2h10A1.5 1.5 0 0 1 14 3.5v6a1.5 1.5 0 0 1-1 1.415v.585a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 11.5v-.585A1.5 1.5 0 0 1 1 9.5ZM2.5 3h10a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5Zm9.5 8.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5V11h9v.5Z" fillRule="evenodd"/></svg>;
    }
);
CardStackPlusIcon.displayName = 'CardStackPlusIcon';
CardStackPlusIcon.propTypes = {iconType: PropTypes.string};
CardStackPlusIcon.defaultProps = {iconType: 'Objects'};

export default CardStackPlusIcon;