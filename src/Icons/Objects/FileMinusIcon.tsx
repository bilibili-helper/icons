import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const FileMinusIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M4.75 7.5a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 0-1h-4.5a.5.5 0 0 0-.5.5ZM2 2.5v10A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V4.604a.75.75 0 0 0-.22-.53L9.854 1.145A.5.5 0 0 0 9.5 1h-6A1.5 1.5 0 0 0 2 2.5ZM3.5 2h5.793L12 4.707V12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5Z" fillRule="evenodd"/></svg>;
    }
);
FileMinusIcon.displayName = 'FileMinusIcon';
FileMinusIcon.propTypes = {iconType: PropTypes.string};
FileMinusIcon.defaultProps = {iconType: 'Objects'};