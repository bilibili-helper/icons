import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const TwoWayArrowIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Arrows', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M12.55 8.5a.45.45 0 0 1 0 .9H3.531L5 10.869a.45.45 0 0 1-.636.636l-2.19-2.19-.035-.04a.449.449 0 0 1 .23-.768L2.45 8.5h10.1Zm-10.1-2a.45.45 0 0 1 0-.9h9.019L10 4.131a.45.45 0 0 1 .636-.636l2.19 2.19.035.04a.449.449 0 0 1-.23.768l-.081.007H2.45Z"/></svg>;
    }
);
TwoWayArrowIcon.displayName = 'TwoWayArrowIcon';
TwoWayArrowIcon.propTypes = {iconType: PropTypes.string};
TwoWayArrowIcon.defaultProps = {iconType: 'Arrows'};