import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const ArrowTopRightIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Arrows', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M3.646 10.646 10.293 4H6a.5.5 0 0 1 0-1h5.5a.5.5 0 0 1 .5.5V9a.5.5 0 1 1-1 0V4.707l-6.646 6.647a.5.5 0 0 1-.708-.708Z"/></svg>;
    }
);
ArrowTopRightIconIcon.displayName = 'ArrowTopRightIconIcon';
ArrowTopRightIconIcon.propTypes = {iconType: PropTypes.string};
ArrowTopRightIconIcon.defaultProps = {iconType: 'Arrows'};

export default ArrowTopRightIconIcon;