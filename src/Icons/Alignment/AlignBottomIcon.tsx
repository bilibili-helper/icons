import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const AlignBottomIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Alignment', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M8 2H7a1 1 0 0 0-1 1v11H1.5a.5.5 0 1 0 0 1h12a.5.5 0 0 0 0-1H9V3a1 1 0 0 0-1-1Z"/></svg>;
    }
);
AlignBottomIconIcon.displayName = 'AlignBottomIconIcon';
AlignBottomIconIcon.propTypes = {iconType: PropTypes.string};
AlignBottomIconIcon.defaultProps = {iconType: 'Alignment'};

export default AlignBottomIconIcon;