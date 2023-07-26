import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const HeadingIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Typography', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M8.304 2.5c0 .249.202.45.45.45H9.95v4.1h-4.9v-4.1h1.204a.45.45 0 0 0 0-.9h-3.5a.45.45 0 1 0 0 .9H3.95v9.1H2.754a.45.45 0 1 0 0 .9h3.5a.45.45 0 1 0 0-.9H5.05v-4.1h4.9v4.1H8.754a.45.45 0 1 0 0 .9h3.5a.45.45 0 1 0 0-.9H11.05v-9.1h1.204a.45.45 0 1 0 0-.9h-3.5a.45.45 0 0 0-.45.45Z"/></svg>;
    }
);
HeadingIcon.displayName = 'HeadingIcon';
HeadingIcon.propTypes = {iconType: PropTypes.string};
HeadingIcon.defaultProps = {iconType: 'Typography'};