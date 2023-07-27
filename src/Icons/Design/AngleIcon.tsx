import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const AngleIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Design', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M9.006 2.891 2.474 12H13.5a.5.5 0 1 1 0 1h-12a.5.5 0 0 1-.406-.791l7.1-9.9a.5.5 0 0 1 .812.582ZM11.6 6a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM9.9 4.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM12.6 8a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm.3 2.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Z" fillRule="evenodd"/></svg>;
    }
);
AngleIcon.displayName = 'AngleIcon';
AngleIcon.propTypes = {iconType: PropTypes.string};
AngleIcon.defaultProps = {iconType: 'Design'};