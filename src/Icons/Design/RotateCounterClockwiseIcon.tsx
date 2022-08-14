import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const RotateCounterClockwiseIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Design', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M8 2.739V2c1.981 0 3.185.364 3.91 1.09C12.637 3.814 13 5.018 13 7a.5.5 0 0 0 1 0c0-2.056-.368-3.603-1.382-4.618C11.603 1.368 10.056 1 8 1V.261a.25.25 0 0 0-.403-.197L6.004 1.303a.25.25 0 0 0 0 .394l1.593 1.24A.25.25 0 0 0 8 2.738ZM1 5.5v7A1.5 1.5 0 0 0 2.5 14h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 9.5 4h-7A1.5 1.5 0 0 0 1 5.5ZM2.5 5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7Z" fillRule="evenodd"/></svg>;
    }
);
RotateCounterClockwiseIconIcon.displayName = 'RotateCounterClockwiseIconIcon';
RotateCounterClockwiseIconIcon.propTypes = {iconType: PropTypes.string};
RotateCounterClockwiseIconIcon.defaultProps = {iconType: 'Design'};

export default RotateCounterClockwiseIconIcon;