import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const SewingPinFilledIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M8 5.95v7.55a.5.5 0 1 1-1 0V5.95a2.5 2.5 0 1 1 1 0Z"/></svg>;
    }
);
SewingPinFilledIconIcon.displayName = 'SewingPinFilledIconIcon';
SewingPinFilledIconIcon.propTypes = {iconType: PropTypes.string};
SewingPinFilledIconIcon.defaultProps = {iconType: 'Objects'};

export default SewingPinFilledIconIcon;