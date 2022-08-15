import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const FaceIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M4.341 9.09a.5.5 0 0 0-.124.696A3.996 3.996 0 0 0 7.5 11.5c1.36 0 2.56-.679 3.283-1.714a.5.5 0 1 0-.82-.572A2.996 2.996 0 0 1 7.5 10.5a2.996 2.996 0 0 1-2.463-1.286.5.5 0 0 0-.696-.124ZM6.25 5.975a.875.875 0 1 0-1.75 0 .875.875 0 0 0 1.75 0Zm3.375.875a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75ZM.877 7.5a6.623 6.623 0 1 0 13.246 0 6.623 6.623 0 0 0-13.246 0ZM7.5 1.827a5.673 5.673 0 1 1 0 11.346 5.673 5.673 0 0 1 0-11.346Z" fillRule="evenodd"/></svg>;
    }
);
FaceIcon.displayName = 'FaceIcon';
FaceIcon.propTypes = {iconType: PropTypes.string};
FaceIcon.defaultProps = {iconType: 'Objects'};

export default FaceIcon;