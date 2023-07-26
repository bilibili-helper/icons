import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const ComponentBooleanIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Design', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M7.147 1.49 1.49 7.146a.5.5 0 0 0 0 .708l5.657 5.656a.5.5 0 0 0 .707 0l5.657-5.656a.5.5 0 0 0 0-.708L7.854 1.49a.5.5 0 0 0-.707 0ZM2.55 7.5l4.95 4.95v-9.9L2.55 7.5Z" fillRule="evenodd"/></svg>;
    }
);
ComponentBooleanIcon.displayName = 'ComponentBooleanIcon';
ComponentBooleanIcon.propTypes = {iconType: PropTypes.string};
ComponentBooleanIcon.defaultProps = {iconType: 'Design'};