import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const SizeIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Arrows', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M11.95 3.5v4a.45.45 0 1 1-.9 0V4.586L4.586 11.05H7.5a.45.45 0 0 1 0 .9h-4a.45.45 0 0 1-.45-.45v-4a.45.45 0 0 1 .9 0v2.914l6.464-6.464H7.5a.45.45 0 0 1 0-.9h4a.45.45 0 0 1 .45.45Z"/></svg>;
    }
);
SizeIcon.displayName = 'SizeIcon';
SizeIcon.propTypes = {iconType: PropTypes.string};
SizeIcon.defaultProps = {iconType: 'Arrows'};