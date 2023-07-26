import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const ZoomInIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Design', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M4.75 6H6V4.75a.5.5 0 1 1 1 0V6h1.25a.5.5 0 0 1 0 1H7v1.25a.5.5 0 0 1-1 0V7H4.75a.5.5 0 1 1 0-1Zm1.75 5a4.5 4.5 0 1 1 3.516-1.691l2.838 2.837a.5.5 0 0 1-.708.708L9.31 10.016A4.481 4.481 0 0 1 6.5 11Zm0-1a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" fillRule="evenodd"/></svg>;
    }
);
ZoomInIcon.displayName = 'ZoomInIcon';
ZoomInIcon.propTypes = {iconType: PropTypes.string};
ZoomInIcon.defaultProps = {iconType: 'Design'};