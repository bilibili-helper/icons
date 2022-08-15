import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const HeartFilledIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><g fill="none" fillRule="evenodd"><path d="M0 0h15v15H0V0Z"/><path d="M4.893 1.352c1.365 0 1.968.571 2.607 1.583.64-1.012 1.242-1.583 2.607-1.583a3.547 3.547 0 0 1 3.54 3.553c0 1.835-1.046 3.6-2.246 5.064-1.137 1.387-2.48 2.582-3.395 3.397l-.173.155a.5.5 0 0 1-.666 0l-.173-.155c-.916-.815-2.258-2.01-3.395-3.397C2.4 8.505 1.352 6.74 1.352 4.905a3.547 3.547 0 0 1 3.541-3.553Z" fill="#000" fillRule="nonzero"/></g></svg>;
    }
);
HeartFilledIcon.displayName = 'HeartFilledIcon';
HeartFilledIcon.propTypes = {iconType: PropTypes.string};
HeartFilledIcon.defaultProps = {iconType: 'Objects'};

export default HeartFilledIcon;