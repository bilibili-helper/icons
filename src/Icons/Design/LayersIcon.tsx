import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const LayersIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Design', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="m7.246.82-5.5 3.25a.5.5 0 0 0 0 .86l5.5 3.25a.5.5 0 0 0 .508 0l5.5-3.25a.5.5 0 0 0 0-.86L7.754.82a.5.5 0 0 0-.508 0ZM2.983 4.5 7.5 1.83l4.517 2.67L7.5 7.17 2.983 4.5Zm-.729 2.82 5.246 3.1 5.246-3.1a.5.5 0 0 1 .508.86l-5.5 3.25a.5.5 0 0 1-.508 0l-5.5-3.25a.5.5 0 0 1 .508-.86Zm0 3 5.246 3.1 5.246-3.1a.5.5 0 1 1 .508.86l-5.5 3.25a.5.5 0 0 1-.508 0l-5.5-3.25a.5.5 0 1 1 .508-.86Z" fillRule="evenodd"/></svg>;
    }
);
LayersIcon.displayName = 'LayersIcon';
LayersIcon.propTypes = {iconType: PropTypes.string};
LayersIcon.defaultProps = {iconType: 'Design'};