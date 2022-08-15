import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const AlignLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Alignment', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M0 1.5v12a.5.5 0 1 0 1 0V9h11a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H1V1.5a.5.5 0 0 0-1 0Z"/></svg>;
    }
);
AlignLeftIcon.displayName = 'AlignLeftIcon';
AlignLeftIcon.propTypes = {iconType: PropTypes.string};
AlignLeftIcon.defaultProps = {iconType: 'Alignment'};

export default AlignLeftIcon;