import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const CrossCircledIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Abstract', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M9.854 5.854 8.207 7.5l1.647 1.646a.5.5 0 0 1-.708.708L7.5 8.207 5.854 9.854a.5.5 0 0 1-.708-.708L6.793 7.5 5.146 5.854a.5.5 0 1 1 .708-.708L7.5 6.793l1.646-1.647a.5.5 0 0 1 .708.708ZM7.5.877a6.623 6.623 0 1 1 0 13.246A6.623 6.623 0 0 1 7.5.877ZM1.827 7.5a5.673 5.673 0 1 0 11.346 0 5.673 5.673 0 0 0-11.346 0Z" fillRule="evenodd"/></svg>;
    }
);
CrossCircledIcon.displayName = 'CrossCircledIcon';
CrossCircledIcon.propTypes = {iconType: PropTypes.string};
CrossCircledIcon.defaultProps = {iconType: 'Abstract'};