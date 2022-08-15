import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const MinusIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Abstract', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M2.75 7h9.5a.5.5 0 0 1 0 1h-9.5a.5.5 0 1 1 0-1Z"/></svg>;
    }
);
MinusIcon.displayName = 'MinusIcon';
MinusIcon.propTypes = {iconType: PropTypes.string};
MinusIcon.defaultProps = {iconType: 'Abstract'};

export default MinusIcon;