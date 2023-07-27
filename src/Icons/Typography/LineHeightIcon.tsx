import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const LineHeightIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Typography', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M3.5 2.1a.4.4 0 0 0-.283.117l-2 2a.4.4 0 1 0 .565.566L3.1 3.466v8.068l-1.317-1.317a.4.4 0 1 0-.565.566l2 2a.4.4 0 0 0 .565 0l2-2a.4.4 0 0 0-.565-.566L3.9 11.534V3.466l1.318 1.317a.4.4 0 1 0 .565-.566l-2-2A.4.4 0 0 0 3.5 2.1ZM8 4.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5ZM8.5 7h6a.5.5 0 0 1 0 1h-6a.5.5 0 1 1 0-1ZM8 10.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5Z" fillRule="evenodd"/></svg>;
    }
);
LineHeightIcon.displayName = 'LineHeightIcon';
LineHeightIcon.propTypes = {iconType: PropTypes.string};
LineHeightIcon.defaultProps = {iconType: 'Typography'};