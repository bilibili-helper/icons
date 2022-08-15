import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const DiscIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M7.5 9.323a1.823 1.823 0 1 1 0-3.646 1.823 1.823 0 0 1 0 3.646Zm0-.95a.873.873 0 1 1 0-1.746.873.873 0 0 1 0 1.746ZM.877 7.5a6.623 6.623 0 1 0 13.246 0 6.623 6.623 0 0 0-13.246 0ZM7.5 1.827a5.673 5.673 0 1 1 0 11.346 5.673 5.673 0 0 1 0-11.346Z" fillRule="evenodd"/></svg>;
    }
);
DiscIcon.displayName = 'DiscIcon';
DiscIcon.propTypes = {iconType: PropTypes.string};
DiscIcon.defaultProps = {iconType: 'Objects'};

export default DiscIcon;