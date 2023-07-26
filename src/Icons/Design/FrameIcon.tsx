import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const FrameIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Design', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M10.5 1a.5.5 0 0 0-.5.5V4H5V1.5a.5.5 0 1 0-1 0V4H1.5a.5.5 0 0 0 0 1H4v5H1.5a.5.5 0 0 0 0 1H4v2.5a.5.5 0 1 0 1 0V11h5v2.5a.5.5 0 0 0 1 0V11h2.5a.5.5 0 1 0 0-1H11V5h2.5a.5.5 0 1 0 0-1H11V1.5a.5.5 0 0 0-.5-.5ZM10 5H5v5h5V5Z" fillRule="evenodd"/></svg>;
    }
);
FrameIcon.displayName = 'FrameIcon';
FrameIcon.propTypes = {iconType: PropTypes.string};
FrameIcon.defaultProps = {iconType: 'Design'};