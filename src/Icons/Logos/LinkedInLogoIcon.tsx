import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const LinkedInLogoIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Logos', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M1 2v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1Zm3.95 4v6h-1.9V6h1.9ZM4 5.08a1.075 1.075 0 1 1 0-2.15 1.075 1.075 0 0 1 0 2.15Zm5.674.77a2.206 2.206 0 0 0-1.095.231c-.257.13-.526.424-.734.938h-.053V6H6v6.005h1.906V8.81c-.027-.327.077-.75.291-1.001.215-.252.52-.312.753-.342h.073c.606 0 1.056.375 1.056 1.32v3.217h1.906L12 8.357c0-1.805-1.167-2.507-2.326-2.507Z" fillRule="evenodd"/></svg>;
    }
);
LinkedInLogoIconIcon.displayName = 'LinkedInLogoIconIcon';
LinkedInLogoIconIcon.propTypes = {iconType: PropTypes.string};
LinkedInLogoIconIcon.defaultProps = {iconType: 'Logos'};

export default LinkedInLogoIconIcon;