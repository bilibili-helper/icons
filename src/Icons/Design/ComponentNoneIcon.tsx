import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const ComponentNoneIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Design', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M7.147 1.49 1.49 7.146a.5.5 0 0 0 0 .708l2.474 2.474-2.318 2.318a.5.5 0 1 0 .708.708l2.318-2.318 2.475 2.474a.5.5 0 0 0 .707 0l5.656-5.656a.5.5 0 0 0 0-.708l-2.474-2.474 2.318-2.318a.5.5 0 0 0-.708-.708l-2.318 2.318L7.854 1.49a.5.5 0 0 0-.707 0ZM7.5 2.55 2.55 7.5l2.122 2.121 4.95-4.95L7.5 2.552Zm0 9.9 4.95-4.95-2.122-2.121-4.95 4.95 2.122 2.12Z" fillRule="evenodd"/></svg>;
    }
);
ComponentNoneIcon.displayName = 'ComponentNoneIcon';
ComponentNoneIcon.propTypes = {iconType: PropTypes.string};
ComponentNoneIcon.defaultProps = {iconType: 'Design'};