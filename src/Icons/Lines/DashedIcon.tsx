import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const DashedIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Lines', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M.5 7H3a.5.5 0 1 1 0 1H.5a.5.5 0 0 1 0-1Zm5.75 0h2.5a.5.5 0 0 1 0 1h-2.5a.5.5 0 1 1 0-1Zm5.25.5a.5.5 0 0 0 .5.5h2.5a.5.5 0 0 0 0-1H12a.5.5 0 0 0-.5.5Z" fillRule="evenodd"/></svg>;
    }
);
DashedIcon.displayName = 'DashedIcon';
DashedIcon.propTypes = {iconType: PropTypes.string};
DashedIcon.defaultProps = {iconType: 'Lines'};