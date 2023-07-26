import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const AlignTopIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Alignment', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M1 .5a.5.5 0 0 0 .5.5H6v11a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V1h4.5a.5.5 0 0 0 0-1h-12a.5.5 0 0 0-.5.5Z"/></svg>;
    }
);
AlignTopIcon.displayName = 'AlignTopIcon';
AlignTopIcon.propTypes = {iconType: PropTypes.string};
AlignTopIcon.defaultProps = {iconType: 'Alignment'};