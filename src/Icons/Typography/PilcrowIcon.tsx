import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const PilcrowIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Typography', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><g fill="none" fillRule="evenodd"><path d="M0 0h15v15H0V0Z"/><path d="M7 9v3.5a.5.5 0 0 0 1 0V3.1h1v9.4a.5.5 0 0 0 1 0V3.1h1.5a.55.55 0 1 0 0-1.1H7C4.992 2 3 3.017 3 5.5S4.992 9 7 9Z" fill="#000" fillRule="nonzero"/></g></svg>;
    }
);
PilcrowIconIcon.displayName = 'PilcrowIconIcon';
PilcrowIconIcon.propTypes = {iconType: PropTypes.string};
PilcrowIconIcon.defaultProps = {iconType: 'Typography'};

export default PilcrowIconIcon;