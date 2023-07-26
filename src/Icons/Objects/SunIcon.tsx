import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const SunIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M8 .5v2a.5.5 0 1 1-1 0v-2a.5.5 0 1 1 1 0ZM2.904 2.197 4.318 3.61a.5.5 0 0 1-.707.707L2.197 2.904a.5.5 0 1 1 .707-.707ZM0 7.5a.5.5 0 0 0 .5.5h2a.5.5 0 1 0 0-1h-2a.5.5 0 0 0-.5.5Zm2.197 4.596 1.414-1.414a.5.5 0 0 1 .707.707l-1.414 1.414a.5.5 0 1 1-.707-.707ZM12 7.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5Zm-1.318-3.89 1.414-1.413a.5.5 0 1 1 .707.707L11.39 4.318a.5.5 0 0 1-.707-.707ZM7.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm3.89-1.318 1.413 1.414a.5.5 0 0 1-.707.707l-1.414-1.414a.5.5 0 0 1 .707-.707ZM4.5 7.5a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm3-2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" fillRule="evenodd"/></svg>;
    }
);
SunIcon.displayName = 'SunIcon';
SunIcon.propTypes = {iconType: PropTypes.string};
SunIcon.defaultProps = {iconType: 'Objects'};