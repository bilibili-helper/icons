import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const TextAlignTopIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Typography', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M3.5 9.9a.4.4 0 0 1-.4-.4V2.466L1.781 3.783a.4.4 0 1 1-.565-.566l2-2a.4.4 0 0 1 .565 0l2 2a.4.4 0 1 1-.565.566L3.899 2.466V9.5a.4.4 0 0 1-.4.4ZM8 2.5a.5.5 0 0 0 .5.5h6a.5.5 0 1 0 0-1h-6a.5.5 0 0 0-.5.5Zm0 3a.5.5 0 0 0 .5.5h6a.5.5 0 1 0 0-1h-6a.5.5 0 0 0-.5.5ZM8.5 8h6a.5.5 0 1 1 0 1h-6a.5.5 0 1 1 0-1Z" fillRule="evenodd"/></svg>;
    }
);
TextAlignTopIcon.displayName = 'TextAlignTopIcon';
TextAlignTopIcon.propTypes = {iconType: PropTypes.string};
TextAlignTopIcon.defaultProps = {iconType: 'Typography'};