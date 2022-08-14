import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const ChevronLeftIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Arrows', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M8.865 3.842 5.435 7.5l3.43 3.658a.5.5 0 0 1-.73.684l-3.75-4a.5.5 0 0 1 0-.684l3.75-4a.5.5 0 1 1 .73.684Z"/></svg>;
    }
);
ChevronLeftIconIcon.displayName = 'ChevronLeftIconIcon';
ChevronLeftIconIcon.propTypes = {iconType: PropTypes.string};
ChevronLeftIconIcon.defaultProps = {iconType: 'Arrows'};

export default ChevronLeftIconIcon;