import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const LineWidthIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Lines', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><g fill="none" fillRule="evenodd"><path d="M0 0h15v15H0Z"/><path d="M14 3v1H1V3h13Zm0 3v2H1V6h13ZM1 10.25v2.5h13v-2.5H1Z" fill="#000"/></g></svg>;
    }
);
LineWidthIcon.displayName = 'LineWidthIcon';
LineWidthIcon.propTypes = {iconType: PropTypes.string};
LineWidthIcon.defaultProps = {iconType: 'Lines'};