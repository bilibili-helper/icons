import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const StopIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Player', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M3 2h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm0 1v9h9V3H3Z" fillRule="evenodd"/></svg>;
    }
);
StopIcon.displayName = 'StopIcon';
StopIcon.propTypes = {iconType: PropTypes.string};
StopIcon.defaultProps = {iconType: 'Player'};