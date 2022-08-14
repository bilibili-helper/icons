import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const ChevronRightIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Arrows', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="m6.865 3.158 3.75 4a.5.5 0 0 1 0 .684l-3.75 4a.5.5 0 0 1-.73-.684L9.566 7.5l-3.43-3.658a.5.5 0 0 1 .73-.684Z"/></svg>;
    }
);
ChevronRightIconIcon.displayName = 'ChevronRightIconIcon';
ChevronRightIconIcon.propTypes = {iconType: PropTypes.string};
ChevronRightIconIcon.defaultProps = {iconType: 'Arrows'};

export default ChevronRightIconIcon;