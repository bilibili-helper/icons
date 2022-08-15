import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const Crosshair1Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M7.502.877a6.625 6.625 0 1 1 0 13.25 6.625 6.625 0 0 1 0-13.25ZM7 1.85V4.5a.5.5 0 1 0 1 0V1.849A5.677 5.677 0 0 1 13.155 7H10.5a.5.5 0 0 0 0 1h2.656A5.677 5.677 0 0 1 8 13.156V10.5a.5.5 0 0 0-1 0v2.655A5.677 5.677 0 0 1 1.849 8H4.5a.5.5 0 1 0 0-1H1.849A5.676 5.676 0 0 1 7 1.849Z" fillRule="evenodd"/></svg>;
    }
);
Crosshair1Icon.displayName = 'Crosshair1Icon';
Crosshair1Icon.propTypes = {iconType: PropTypes.string};
Crosshair1Icon.defaultProps = {iconType: 'Objects'};

export default Crosshair1Icon;