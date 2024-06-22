import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const OneWayArrowLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Arrows', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M12.55 7.063a.45.45 0 0 1 0 .9H3.531L5 9.432a.45.45 0 0 1-.636.636l-2.19-2.19-.035-.04a.449.449 0 0 1 .23-.768l.081-.007h10.1Z"/></svg>;
    }
);
OneWayArrowLeftIcon.displayName = 'OneWayArrowLeftIcon';
OneWayArrowLeftIcon.propTypes = {iconType: PropTypes.string};
OneWayArrowLeftIcon.defaultProps = {iconType: 'Arrows'};