import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const LockClosedIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M4 4.636c0-1.055.293-1.978.91-2.643.623-.67 1.517-1.015 2.591-1.015 1.075 0 1.969.344 2.59 1.014.617.664.909 1.587.909 2.641V6h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1V4.636Zm1.643-1.962c.396-.427 1.003-.696 1.858-.696.856 0 1.462.269 1.857.694.4.431.642 1.085.642 1.961V6H5V4.636c0-.876.242-1.53.643-1.962ZM12 7v6H3V7h9Z" fillRule="evenodd"/></svg>;
    }
);
LockClosedIcon.displayName = 'LockClosedIcon';
LockClosedIcon.propTypes = {iconType: PropTypes.string};
LockClosedIcon.defaultProps = {iconType: 'Objects'};