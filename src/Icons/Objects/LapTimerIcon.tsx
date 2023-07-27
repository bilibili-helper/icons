import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const LapTimerIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M7.5 4.1a4.4 4.4 0 1 0 3.111 7.511L7.5 8.5V4.1ZM6 0h3a.5.5 0 0 1 0 1H8v1.12a6.363 6.363 0 0 1 2.992 1.016.63.63 0 0 1 .066-.078l1-1a.625.625 0 0 1 .884.884l-.975.975A6.4 6.4 0 1 1 7 2.119V1H6a.5.5 0 1 1 0-1Zm1.5 3.1a5.4 5.4 0 1 1 0 10.8 5.4 5.4 0 0 1 0-10.8Z" fillRule="evenodd"/></svg>;
    }
);
LapTimerIcon.displayName = 'LapTimerIcon';
LapTimerIcon.propTypes = {iconType: PropTypes.string};
LapTimerIcon.defaultProps = {iconType: 'Objects'};