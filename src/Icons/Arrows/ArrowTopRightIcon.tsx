import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const ArrowTopRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Arrows', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M3.646 10.646 10.293 4H6a.5.5 0 0 1 0-1h5.5a.5.5 0 0 1 .5.5V9a.5.5 0 1 1-1 0V4.707l-6.646 6.647a.5.5 0 0 1-.708-.708Z"/></svg>;
    }
);
ArrowTopRightIcon.displayName = 'ArrowTopRightIcon';
ArrowTopRightIcon.propTypes = {iconType: PropTypes.string};
ArrowTopRightIcon.defaultProps = {iconType: 'Arrows'};