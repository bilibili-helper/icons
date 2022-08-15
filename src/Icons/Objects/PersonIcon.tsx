import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const PersonIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M3.875 4.5a3.627 3.627 0 0 0 2.619 3.484c-1.194.145-2.218.567-2.99 1.328-.982.967-1.479 2.408-1.479 4.288a.475.475 0 1 0 .95 0c0-1.72.453-2.88 1.196-3.612.744-.733 1.856-1.113 3.329-1.113s2.585.38 3.33 1.113c.742.733 1.195 1.892 1.195 3.612a.475.475 0 1 0 .95 0c0-1.88-.497-3.32-1.48-4.288-.77-.76-1.795-1.183-2.989-1.328A3.627 3.627 0 0 0 7.5.875 3.625 3.625 0 0 0 3.875 4.5ZM7.5 1.825a2.675 2.675 0 1 1 0 5.35 2.675 2.675 0 0 1 0-5.35Z" fillRule="evenodd"/></svg>;
    }
);
PersonIcon.displayName = 'PersonIcon';
PersonIcon.propTypes = {iconType: PropTypes.string};
PersonIcon.defaultProps = {iconType: 'Objects'};

export default PersonIcon;