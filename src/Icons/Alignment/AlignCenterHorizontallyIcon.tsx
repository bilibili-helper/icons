import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const AlignCenterHorizontallyIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Alignment', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M1 7v1a1 1 0 0 0 1 1h5v4.5a.5.5 0 0 0 1 0V9h5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H8V1.5a.5.5 0 1 0-1 0V6H2a1 1 0 0 0-1 1Z"/></svg>;
    }
);
AlignCenterHorizontallyIconIcon.displayName = 'AlignCenterHorizontallyIconIcon';
AlignCenterHorizontallyIconIcon.propTypes = {iconType: PropTypes.string};
AlignCenterHorizontallyIconIcon.defaultProps = {iconType: 'Alignment'};

export default AlignCenterHorizontallyIconIcon;