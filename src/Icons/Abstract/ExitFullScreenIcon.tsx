import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const ExitFullScreenIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Abstract', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M6 2.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 1 1 0-1H5V2.5a.5.5 0 1 1 1 0Zm4 0V5h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 1 1 1 0ZM2.5 9h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V10H2.5a.5.5 0 1 1 0-1Zm7 0h3a.5.5 0 0 1 0 1H10v2.5a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5Z" fillRule="evenodd"/></svg>;
    }
);
ExitFullScreenIcon.displayName = 'ExitFullScreenIcon';
ExitFullScreenIcon.propTypes = {iconType: PropTypes.string};
ExitFullScreenIcon.defaultProps = {iconType: 'Abstract'};