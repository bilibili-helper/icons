import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const EyeNoneIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M13.354 1.646a.5.5 0 0 0-.708 0L10.683 3.61A8.475 8.475 0 0 0 7.5 3C4.308 3 1.656 4.706.076 7.235a.5.5 0 0 0 0 .53c.827 1.323 1.947 2.421 3.285 3.167l-1.715 1.714a.5.5 0 1 0 .708.708l1.963-1.964c.976.393 2.045.61 3.183.61 3.192 0 5.844-1.706 7.424-4.235a.5.5 0 0 0 0-.53c-.827-1.323-1.947-2.421-3.285-3.167l1.715-1.714a.5.5 0 0 0 0-.708ZM7.5 4C4.803 4 2.53 5.378 1.096 7.5c.777 1.15 1.8 2.081 3.004 2.693L9.904 4.39A7.517 7.517 0 0 0 7.5 4Zm3.4.807c1.204.612 2.227 1.543 3.004 2.693C12.47 9.622 10.197 11 7.5 11a7.517 7.517 0 0 1-2.404-.389L10.9 4.807Z" fillRule="evenodd"/></svg>;
    }
);
EyeNoneIcon.displayName = 'EyeNoneIcon';
EyeNoneIcon.propTypes = {iconType: PropTypes.string};
EyeNoneIcon.defaultProps = {iconType: 'Objects'};