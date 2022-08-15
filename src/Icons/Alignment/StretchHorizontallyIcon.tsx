import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const StretchHorizontallyIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Alignment', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M14 1.5V6H1V1.5a.5.5 0 0 0-1 0v12a.5.5 0 1 0 1 0V9h13v4.5a.5.5 0 1 0 1 0v-12a.5.5 0 0 0-1 0Z"/></svg>;
    }
);
StretchHorizontallyIcon.displayName = 'StretchHorizontallyIcon';
StretchHorizontallyIcon.propTypes = {iconType: PropTypes.string};
StretchHorizontallyIcon.defaultProps = {iconType: 'Alignment'};

export default StretchHorizontallyIcon;