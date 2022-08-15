import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const ChevronUpIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Arrows', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M3.842 8.865 7.5 5.435l3.658 3.43a.5.5 0 0 0 .684-.73l-4-3.75a.5.5 0 0 0-.684 0l-4 3.75a.5.5 0 1 0 .684.73Z"/></svg>;
    }
);
ChevronUpIcon.displayName = 'ChevronUpIcon';
ChevronUpIcon.propTypes = {iconType: PropTypes.string};
ChevronUpIcon.defaultProps = {iconType: 'Arrows'};

export default ChevronUpIcon;