import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const ThickArrowRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Arrows', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="m13.79 7.907-7 5A.5.5 0 0 1 6 12.5V10H3.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5H6V2.5a.5.5 0 0 1 .79-.407l7 5a.5.5 0 0 1 0 .814ZM7 5.5a.5.5 0 0 1-.5.5H4v3h2.5a.5.5 0 0 1 .5.5v2.028L12.64 7.5 7 3.472V5.5Z" fillRule="evenodd"/></svg>;
    }
);
ThickArrowRightIcon.displayName = 'ThickArrowRightIcon';
ThickArrowRightIcon.propTypes = {iconType: PropTypes.string};
ThickArrowRightIcon.defaultProps = {iconType: 'Arrows'};