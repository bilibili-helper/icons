import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const SpaceEvenlyVerticallyIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Alignment', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M1.5 0h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1 0-1ZM6 3v3a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1Zm0 6v3a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1Zm-5 5.5a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 0-1h-12a.5.5 0 0 0-.5.5Z" fillRule="evenodd"/></svg>;
    }
);
SpaceEvenlyVerticallyIconIcon.displayName = 'SpaceEvenlyVerticallyIconIcon';
SpaceEvenlyVerticallyIconIcon.propTypes = {iconType: PropTypes.string};
SpaceEvenlyVerticallyIconIcon.defaultProps = {iconType: 'Alignment'};

export default SpaceEvenlyVerticallyIconIcon;