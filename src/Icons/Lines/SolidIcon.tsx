import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const SolidIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Lines', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M1.75 7h11.5a.5.5 0 0 1 0 1H1.75a.5.5 0 1 1 0-1Z"/></svg>;
    }
);
SolidIcon.displayName = 'SolidIcon';
SolidIcon.propTypes = {iconType: PropTypes.string};
SolidIcon.defaultProps = {iconType: 'Lines'};

export default SolidIcon;