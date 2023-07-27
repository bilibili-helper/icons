import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const StopFilledIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Player', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M3 2h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z" fillRule="evenodd"/></svg>;
    }
);
StopFilledIcon.displayName = 'StopFilledIcon';
StopFilledIcon.propTypes = {iconType: PropTypes.string};
StopFilledIcon.defaultProps = {iconType: 'Player'};