import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const EyeOpenIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M9.5 7.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM.076 7.235a.5.5 0 0 0 0 .53C1.656 10.294 4.308 12 7.5 12s5.844-1.706 7.424-4.235a.5.5 0 0 0 0-.53C13.344 4.706 10.692 3 7.5 3S1.656 4.706.076 7.235Zm1.02.265C2.53 5.378 4.803 4 7.5 4s4.97 1.378 6.404 3.5C12.47 9.622 10.197 11 7.5 11S2.53 9.622 1.096 7.5Z" fillRule="evenodd"/></svg>;
    }
);
EyeOpenIcon.displayName = 'EyeOpenIcon';
EyeOpenIcon.propTypes = {iconType: PropTypes.string};
EyeOpenIcon.defaultProps = {iconType: 'Objects'};