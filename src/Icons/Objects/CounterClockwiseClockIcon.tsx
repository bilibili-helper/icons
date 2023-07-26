import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const CounterClockwiseClockIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M7.5 1.85C4.722 1.85 3.348 3.906 2.763 5H4.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v1.813C2.705 3.071 4.334.85 7.5.85c4.063 0 6.65 3.335 6.65 6.65 0 3.315-2.587 6.65-6.65 6.65-1.944 0-3.562-.77-4.715-1.942a6.772 6.772 0 0 1-1.427-2.167.5.5 0 1 1 .925-.38c.28.682.692 1.314 1.216 1.846.972.99 2.336 1.643 4.001 1.643 3.44 0 5.65-2.815 5.65-5.65 0-2.835-2.21-5.65-5.65-5.65ZM8 4.5v2.793l1.854 1.853a.5.5 0 0 1-.708.708l-2-2A.5.5 0 0 1 7 7.5v-3a.5.5 0 1 1 1 0Z" fillRule="evenodd"/></svg>;
    }
);
CounterClockwiseClockIcon.displayName = 'CounterClockwiseClockIcon';
CounterClockwiseClockIcon.propTypes = {iconType: PropTypes.string};
CounterClockwiseClockIcon.defaultProps = {iconType: 'Objects'};