import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const StarFilledIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M7.777.666 9.413 4.6a.3.3 0 0 0 .253.184l4.248.34a.3.3 0 0 1 .171.528L10.85 8.424a.3.3 0 0 0-.097.297l.99 4.145a.3.3 0 0 1-.45.326L7.657 10.97a.3.3 0 0 0-.312 0l-3.637 2.22a.3.3 0 0 1-.448-.325l.989-4.145a.3.3 0 0 0-.097-.297L.915 5.652a.3.3 0 0 1 .171-.527l4.248-.34a.3.3 0 0 0 .253-.185L7.223.666a.3.3 0 0 1 .554 0Z"/></svg>;
    }
);
StarFilledIcon.displayName = 'StarFilledIcon';
StarFilledIcon.propTypes = {iconType: PropTypes.string};
StarFilledIcon.defaultProps = {iconType: 'Objects'};

export default StarFilledIcon;