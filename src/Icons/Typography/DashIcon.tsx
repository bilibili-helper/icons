import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const DashIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Typography', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M5.5 7h4a.5.5 0 1 1 0 1h-4a.5.5 0 1 1 0-1Z"/></svg>;
    }
);
DashIconIcon.displayName = 'DashIconIcon';
DashIconIcon.propTypes = {iconType: PropTypes.string};
DashIconIcon.defaultProps = {iconType: 'Typography'};

export default DashIconIcon;