import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const BlendingModeIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Design', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M7.5 1.5c3 2.75 4.5 5 4.5 7.5a4.5 4.5 0 1 1-9 0c0-2.5 1.5-4.75 4.5-7.5Zm-.51 7.563c-1.057.488-2.056.95-2.893.759A3.51 3.51 0 0 1 4 9c0-1.888 1.027-3.728 3.5-6.126 2.168 2.102 3.225 3.776 3.452 5.43-1.279-.483-2.664.158-3.962.759Z" fillRule="evenodd"/></svg>;
    }
);
BlendingModeIcon.displayName = 'BlendingModeIcon';
BlendingModeIcon.propTypes = {iconType: PropTypes.string};
BlendingModeIcon.defaultProps = {iconType: 'Design'};