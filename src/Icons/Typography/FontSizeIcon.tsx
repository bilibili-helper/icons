import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const FontSizeIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Typography', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M2.5 2.1a.4.4 0 0 0-.283.117l-2 2a.4.4 0 1 0 .565.566L2.1 3.466v8.068L.782 10.217a.4.4 0 1 0-.565.566l2 2a.4.4 0 0 0 .565 0l2-2a.4.4 0 0 0-.565-.566l-1.318 1.317V3.466l1.318 1.317a.4.4 0 1 0 .565-.566l-2-2A.4.4 0 0 0 2.5 2.1Zm8.47.98 3 8.32a.5.5 0 1 1-.94.34l-.982-2.724H8.952l-.982 2.723a.5.5 0 1 1-.94-.34l3-8.319a.5.5 0 0 1 .94 0Zm.771 5.086H9.26l1.24-3.442 1.241 3.442Z" fillRule="evenodd"/></svg>;
    }
);
FontSizeIcon.displayName = 'FontSizeIcon';
FontSizeIcon.propTypes = {iconType: PropTypes.string};
FontSizeIcon.defaultProps = {iconType: 'Typography'};