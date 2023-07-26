import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const AlignCenterVerticallyIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Alignment', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M6 2v5H1.5a.5.5 0 1 0 0 1H6v5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8h4.5a.5.5 0 1 0 0-1H9V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1Z"/></svg>;
    }
);
AlignCenterVerticallyIcon.displayName = 'AlignCenterVerticallyIcon';
AlignCenterVerticallyIcon.propTypes = {iconType: PropTypes.string};
AlignCenterVerticallyIcon.defaultProps = {iconType: 'Alignment'};