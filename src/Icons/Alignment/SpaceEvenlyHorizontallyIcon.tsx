import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const SpaceEvenlyHorizontallyIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Alignment', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M14 1.5v12a.5.5 0 1 0 1 0v-12a.5.5 0 0 0-1 0Zm-14 0v12a.5.5 0 1 0 1 0v-12a.5.5 0 0 0-1 0ZM3 6h3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm5 1v1a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1Z" fillRule="evenodd"/></svg>;
    }
);
SpaceEvenlyHorizontallyIcon.displayName = 'SpaceEvenlyHorizontallyIcon';
SpaceEvenlyHorizontallyIcon.propTypes = {iconType: PropTypes.string};
SpaceEvenlyHorizontallyIcon.defaultProps = {iconType: 'Alignment'};