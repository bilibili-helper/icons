import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const LetterSpacingIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Typography', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M5.013 1.303 8.01 8.3a.5.5 0 1 1-.92.394l-.975-2.277H2.99l-.976 2.277a.5.5 0 0 1-.92-.394l3-6.997a.5.5 0 0 1 .919 0Zm.739 4.264H3.354l1.199-2.798 1.199 2.798Zm5.77 3.118 2.751-7.002a.5.5 0 1 0-.93-.366l-2.287 5.818L8.77 1.317a.5.5 0 0 0-.931.366l2.752 7.002a.5.5 0 0 0 .93 0Zm3.315 4.098-2 2a.4.4 0 1 1-.566-.566l1.317-1.317H1.519l1.318 1.317a.4.4 0 1 1-.566.566l-2-2a.4.4 0 0 1 0-.566l2-2a.4.4 0 0 1 .566.566L1.519 12.1h12.069l-1.317-1.317a.4.4 0 0 1 .566-.566l2 2a.4.4 0 0 1 0 .566Z" fillRule="evenodd"/></svg>;
    }
);
LetterSpacingIconIcon.displayName = 'LetterSpacingIconIcon';
LetterSpacingIconIcon.propTypes = {iconType: PropTypes.string};
LetterSpacingIconIcon.defaultProps = {iconType: 'Typography'};

export default LetterSpacingIconIcon;