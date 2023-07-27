import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const StackIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Design', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="m7.246 1.82-5.5 3.25a.5.5 0 0 0 0 .86l5.5 3.25a.5.5 0 0 0 .508 0l5.5-3.25a.5.5 0 0 0 0-.86l-5.5-3.25a.5.5 0 0 0-.508 0ZM2.983 5.5 7.5 2.83l4.517 2.67L7.5 8.17 2.983 5.5ZM1.569 8.496a.5.5 0 0 0 .177.684l5.5 3.25a.5.5 0 0 0 .508 0l5.5-3.25a.5.5 0 0 0-.508-.86L7.5 11.42l-5.246-3.1a.5.5 0 0 0-.685.176Z" fillRule="evenodd"/></svg>;
    }
);
StackIcon.displayName = 'StackIcon';
StackIcon.propTypes = {iconType: PropTypes.string};
StackIcon.defaultProps = {iconType: 'Design'};