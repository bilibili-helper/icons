import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const ThickArrowLeftIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Arrows', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="m1.21 7.907 7 5A.5.5 0 0 0 9 12.5V10h2.5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5H9V2.5a.5.5 0 0 0-.79-.407l-7 5a.5.5 0 0 0 0 .814ZM8 5.5a.5.5 0 0 0 .5.5H11v3H8.5a.5.5 0 0 0-.5.5v2.028L2.36 7.5 8 3.472V5.5Z" fillRule="evenodd"/></svg>;
    }
);
ThickArrowLeftIconIcon.displayName = 'ThickArrowLeftIconIcon';
ThickArrowLeftIconIcon.propTypes = {iconType: PropTypes.string};
ThickArrowLeftIconIcon.defaultProps = {iconType: 'Arrows'};

export default ThickArrowLeftIconIcon;