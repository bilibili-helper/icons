import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const ArrowBottomRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Arrows', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M3.646 4.354 10.293 11H6a.5.5 0 1 0 0 1h5.5a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-1 0v4.293L4.354 3.646a.5.5 0 0 0-.708.708Z"/></svg>;
    }
);
ArrowBottomRightIcon.displayName = 'ArrowBottomRightIcon';
ArrowBottomRightIcon.propTypes = {iconType: PropTypes.string};
ArrowBottomRightIcon.defaultProps = {iconType: 'Arrows'};