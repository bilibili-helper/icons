import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const DividerHorizontalIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Components', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M2.5 7h10a.5.5 0 0 1 0 1h-10a.5.5 0 1 1 0-1Z"/></svg>;
    }
);
DividerHorizontalIcon.displayName = 'DividerHorizontalIcon';
DividerHorizontalIcon.propTypes = {iconType: PropTypes.string};
DividerHorizontalIcon.defaultProps = {iconType: 'Components'};