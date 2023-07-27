import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const ChevronDownIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Arrows', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M3.842 6.135 7.5 9.565l3.658-3.43a.5.5 0 0 1 .684.73l-4 3.75a.5.5 0 0 1-.684 0l-4-3.75a.5.5 0 1 1 .684-.73Z"/></svg>;
    }
);
ChevronDownIcon.displayName = 'ChevronDownIcon';
ChevronDownIcon.propTypes = {iconType: PropTypes.string};
ChevronDownIcon.defaultProps = {iconType: 'Arrows'};