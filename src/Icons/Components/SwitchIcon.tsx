import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const SwitchIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Components', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M4.5 3h6a4.5 4.5 0 0 1 0 9h-6a4.5 4.5 0 0 1 0-9ZM7 7.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0Zm-1 0c0-1.414.652-2.675 1.671-3.5H4.5a3.5 3.5 0 0 0 0 7h3.171A4.491 4.491 0 0 1 6 7.5Z" fillRule="evenodd"/></svg>;
    }
);
SwitchIcon.displayName = 'SwitchIcon';
SwitchIcon.propTypes = {iconType: PropTypes.string};
SwitchIcon.defaultProps = {iconType: 'Components'};

export default SwitchIcon;