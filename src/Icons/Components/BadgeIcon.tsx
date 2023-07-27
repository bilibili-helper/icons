import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const BadgeIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Components', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M4 7.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5ZM3.5 5h8a2.5 2.5 0 0 1 0 5h-8a2.5 2.5 0 0 1 0-5Zm8 1a1.5 1.5 0 1 1 0 3h-8a1.5 1.5 0 0 1 0-3h8Z" fillRule="evenodd"/></svg>;
    }
);
BadgeIcon.displayName = 'BadgeIcon';
BadgeIcon.propTypes = {iconType: PropTypes.string};
BadgeIcon.defaultProps = {iconType: 'Components'};