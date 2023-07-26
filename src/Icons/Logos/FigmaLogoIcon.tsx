import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const FigmaLogoIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Logos', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M11.95 3.525c0 .807-.386 1.523-.983 1.975A2.475 2.475 0 0 1 8 9.463v1.962A2.475 2.475 0 1 1 4.033 9.45a2.471 2.471 0 0 1-.983-1.975c0-.807.386-1.523.983-1.975a2.475 2.475 0 0 1 1.492-4.45h3.95a2.475 2.475 0 0 1 2.475 2.475ZM5.525 2.05a1.475 1.475 0 0 0 0 2.95H7V2.05H5.525ZM8 5h1.475a1.475 1.475 0 1 0 0-2.95H8V5ZM7 8.95V6H5.525a1.475 1.475 0 0 0-.006 2.95H7Zm-1.48 1H7v1.475A1.475 1.475 0 1 1 5.52 9.95ZM9.474 6A1.475 1.475 0 1 1 8 7.478v-.006A1.475 1.475 0 0 1 9.475 6Z" fillRule="evenodd"/></svg>;
    }
);
FigmaLogoIcon.displayName = 'FigmaLogoIcon';
FigmaLogoIcon.propTypes = {iconType: PropTypes.string};
FigmaLogoIcon.defaultProps = {iconType: 'Logos'};