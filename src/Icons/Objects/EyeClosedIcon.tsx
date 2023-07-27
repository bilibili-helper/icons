import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const EyeClosedIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M14.924 6.765a9.52 9.52 0 0 1-1.554 1.898l1.201 1.201a.5.5 0 1 1-.707.707l-1.263-1.263a8.474 8.474 0 0 1-2.667 1.343l.449 1.677a.5.5 0 0 1-.966.259l-.458-1.71a8.672 8.672 0 0 1-2.918 0l-.458 1.71a.5.5 0 0 1-.966-.26l.45-1.676a8.474 8.474 0 0 1-2.668-1.343l-1.263 1.263a.5.5 0 1 1-.707-.707l1.2-1.2a9.52 9.52 0 0 1-1.552-1.9.5.5 0 0 1 .848-.53 8.425 8.425 0 0 0 1.77 2.034A7.462 7.462 0 0 0 7.5 10c2.808 0 5.156-1.494 6.576-3.765a.5.5 0 0 1 .848.53Z"/></svg>;
    }
);
EyeClosedIcon.displayName = 'EyeClosedIcon';
EyeClosedIcon.propTypes = {iconType: PropTypes.string};
EyeClosedIcon.defaultProps = {iconType: 'Objects'};