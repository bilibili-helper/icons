import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const OneWayArrowRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Arrows', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M2.45 7.957a.45.45 0 0 1 0-.9h9.019L10 5.588a.45.45 0 0 1 .636-.636l2.19 2.19.035.04a.449.449 0 0 1-.23.768l-.081.007H2.45Z"/></svg>;
    }
);
OneWayArrowRightIcon.displayName = 'OneWayArrowRightIcon';
OneWayArrowRightIcon.propTypes = {iconType: PropTypes.string};
OneWayArrowRightIcon.defaultProps = {iconType: 'Arrows'};