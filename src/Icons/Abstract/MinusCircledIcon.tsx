import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const MinusCircledIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Abstract', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M4 7.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5Zm-3.123 0a6.623 6.623 0 1 0 13.246 0 6.623 6.623 0 0 0-13.246 0ZM7.5 1.827a5.673 5.673 0 1 1 0 11.346 5.673 5.673 0 0 1 0-11.346Z" fillRule="evenodd"/></svg>;
    }
);
MinusCircledIcon.displayName = 'MinusCircledIcon';
MinusCircledIcon.propTypes = {iconType: PropTypes.string};
MinusCircledIcon.defaultProps = {iconType: 'Abstract'};