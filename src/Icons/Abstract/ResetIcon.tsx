import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const ResetIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Abstract', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M4.854 2.854 3.707 4H9a4.5 4.5 0 0 1 0 9H5a.5.5 0 0 1 0-1h4a3.5 3.5 0 1 0 0-7H3.707l1.147 1.146a.5.5 0 1 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708Z"/></svg>;
    }
);
ResetIcon.displayName = 'ResetIcon';
ResetIcon.propTypes = {iconType: PropTypes.string};
ResetIcon.defaultProps = {iconType: 'Abstract'};