import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const OpacityIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Design', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M3 9a4.5 4.5 0 1 0 9 0c0-2.5-1.5-4.75-4.5-7.5C4.5 4.25 3 6.5 3 9Zm4.5-6.126C5.027 5.272 4 7.112 4 9a3.5 3.5 0 1 0 7 0c0-1.888-1.027-3.728-3.5-6.126Z" fillRule="evenodd"/></svg>;
    }
);
OpacityIcon.displayName = 'OpacityIcon';
OpacityIcon.propTypes = {iconType: PropTypes.string};
OpacityIcon.defaultProps = {iconType: 'Design'};