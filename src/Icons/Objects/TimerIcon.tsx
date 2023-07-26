import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const TimerIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M7 1.35v2.172a.5.5 0 1 0 1 0v-1.65a5.65 5.65 0 1 1-4.81 1.974.5.5 0 1 0-.762-.647A6.65 6.65 0 1 0 7.5.85a.5.5 0 0 0-.5.5ZM4.224 4.572a.25.25 0 0 1 .348-.348L8.081 6.74a.96.96 0 1 1-1.34 1.34L4.223 4.572Z" fillRule="evenodd"/></svg>;
    }
);
TimerIcon.displayName = 'TimerIcon';
TimerIcon.propTypes = {iconType: PropTypes.string};
TimerIcon.defaultProps = {iconType: 'Objects'};