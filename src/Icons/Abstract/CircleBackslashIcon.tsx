import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const CircleBackslashIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Abstract', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M.877 7.5a6.623 6.623 0 1 0 13.246 0 6.623 6.623 0 0 0-13.246 0ZM7.5 1.827a5.673 5.673 0 0 1 4.35 9.315L3.857 3.151A5.65 5.65 0 0 1 7.5 1.827ZM1.827 7.5a5.673 5.673 0 0 0 9.315 4.35L3.151 3.857A5.65 5.65 0 0 0 1.827 7.5Z" fillRule="evenodd"/></svg>;
    }
);
CircleBackslashIcon.displayName = 'CircleBackslashIcon';
CircleBackslashIcon.propTypes = {iconType: PropTypes.string};
CircleBackslashIcon.defaultProps = {iconType: 'Abstract'};