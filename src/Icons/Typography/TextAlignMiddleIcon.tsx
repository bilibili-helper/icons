import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const TextAlignMiddleIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Typography', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M3.9 14.5v-4.034l1.317 1.317a.4.4 0 1 0 .565-.566l-2-2a.4.4 0 0 0-.565 0l-2 2a.4.4 0 1 0 .565.566L3.1 10.466V14.5a.4.4 0 0 0 .8 0ZM8.5 11h6a.5.5 0 1 0 0-1h-6a.5.5 0 1 0 0 1Zm0-3h6a.5.5 0 1 0 0-1h-6a.5.5 0 1 0 0 1ZM8 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5ZM3.5.1a.4.4 0 0 0-.4.4v4.034L1.781 3.217a.4.4 0 1 0-.565.566l2 2a.4.4 0 0 0 .565 0l2-2a.4.4 0 1 0-.565-.566L3.899 4.534V.5a.4.4 0 0 0-.4-.4Z" fillRule="evenodd"/></svg>;
    }
);
TextAlignMiddleIcon.displayName = 'TextAlignMiddleIcon';
TextAlignMiddleIcon.propTypes = {iconType: PropTypes.string};
TextAlignMiddleIcon.defaultProps = {iconType: 'Typography'};