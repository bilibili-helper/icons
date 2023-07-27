import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const StretchVerticallyIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Alignment', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M1.5 0h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1 0-1ZM9 1H6v13H1.5a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H9V1Z" fillRule="evenodd"/></svg>;
    }
);
StretchVerticallyIcon.displayName = 'StretchVerticallyIcon';
StretchVerticallyIcon.propTypes = {iconType: PropTypes.string};
StretchVerticallyIcon.defaultProps = {iconType: 'Alignment'};