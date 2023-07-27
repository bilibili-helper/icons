import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const ColorWheelIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Design', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M7.5.877a6.623 6.623 0 1 1 0 13.246A6.623 6.623 0 0 1 7.5.877Zm-.4.964v4.693L3.781 3.216A5.649 5.649 0 0 1 7.1 1.84ZM1.841 7.1h4.693L3.216 3.781A5.649 5.649 0 0 0 1.84 7.1Zm0 .8a5.649 5.649 0 0 0 1.375 3.318L6.534 7.9H1.841ZM7.1 13.159V8.466l-3.319 3.318A5.649 5.649 0 0 0 7.1 13.16Zm.8 0a5.649 5.649 0 0 0 3.318-1.375L7.9 8.466v4.693ZM13.159 7.9H8.466l3.318 3.318A5.649 5.649 0 0 0 13.16 7.9Zm0-.8a5.649 5.649 0 0 0-1.375-3.319L8.466 7.1h4.693ZM7.9 1.84v4.694l3.319-3.318A5.649 5.649 0 0 0 7.9 1.84Z" fillRule="evenodd"/></svg>;
    }
);
ColorWheelIcon.displayName = 'ColorWheelIcon';
ColorWheelIcon.propTypes = {iconType: PropTypes.string};
ColorWheelIcon.defaultProps = {iconType: 'Design'};