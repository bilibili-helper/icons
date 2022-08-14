import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const CameraIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M2.25 4h2.5a.25.25 0 0 1 .25.25v1.505a.25.25 0 0 1-.25.25h-2.5a.25.25 0 0 1-.25-.25V4.25A.25.25 0 0 1 2.25 4Zm7.25 7.185a3.601 3.601 0 1 1 0-7.202 3.601 3.601 0 0 1 0 7.202Zm0-1a2.601 2.601 0 1 1 0-5.202 2.601 2.601 0 0 1 0 5.202ZM2 2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2ZM1 4v7a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1Z" fillRule="evenodd"/></svg>;
    }
);
CameraIconIcon.displayName = 'CameraIconIcon';
CameraIconIcon.propTypes = {iconType: PropTypes.string};
CameraIconIcon.defaultProps = {iconType: 'Objects'};

export default CameraIconIcon;