import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const ActivityLogIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Components', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M.5 1h2a.5.5 0 1 1 0 1h-2a.5.5 0 0 1 0-1Zm4 0h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1 0-1Zm0 3h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1Zm-4 3h2a.5.5 0 1 1 0 1h-2a.5.5 0 1 1 0-1Zm4 0h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1 0-1Zm0 3h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1Zm-4 3h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1Zm4 0h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1 0-1Z" fillRule="evenodd"/></svg>;
    }
);
ActivityLogIcon.displayName = 'ActivityLogIcon';
ActivityLogIcon.propTypes = {iconType: PropTypes.string};
ActivityLogIcon.defaultProps = {iconType: 'Components'};