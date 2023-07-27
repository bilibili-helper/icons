import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const SpaceBetweenHorizontallyIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Alignment', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M14 1.5V6h-4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4v4.5a.5.5 0 1 0 1 0v-12a.5.5 0 0 0-1 0ZM1 6V1.5a.5.5 0 0 0-1 0v12a.5.5 0 1 0 1 0V9h4a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H1Z" fillRule="evenodd"/></svg>;
    }
);
SpaceBetweenHorizontallyIcon.displayName = 'SpaceBetweenHorizontallyIcon';
SpaceBetweenHorizontallyIcon.propTypes = {iconType: PropTypes.string};
SpaceBetweenHorizontallyIcon.defaultProps = {iconType: 'Alignment'};