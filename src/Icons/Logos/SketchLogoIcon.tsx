import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const SketchLogoIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Logos', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="m7.463.827-3.5.35a.375.375 0 0 0-.266.152L.7 5.425a.374.374 0 0 0-.075.218v.009c0 .09.033.174.087.238l6.498 7.898a.375.375 0 0 0 .58 0l6.498-7.898a.373.373 0 0 0 .087-.238v-.024a.373.373 0 0 0-.075-.203L11.303 1.33a.375.375 0 0 0-.266-.152l-3.5-.35a.375.375 0 0 0-.074 0Zm3.462 4.425-.003.023h.003v-.023Zm2.263-.077L11.25 2.526l-.316 2.649h2.254ZM8.044 1.631l2.13 3.58.397-3.327-2.527-.253Zm-3.615.253.396 3.326 2.13-3.579-2.526.253ZM1.812 5.175h2.254L3.75 2.526 1.812 5.175Zm4.947 6.884L4.224 6.067a.302.302 0 0 1-.015-.042H1.794l4.965 6.034Zm.741.05 2.35-6.084h-4.7l2.35 6.083Zm3.276-6.042-2.535 5.992 4.965-6.034H10.79a.302.302 0 0 1-.015.042ZM9.34 5.275H5.66L7.5 2.183l1.84 3.092Z" fillRule="evenodd"/></svg>;
    }
);
SketchLogoIcon.displayName = 'SketchLogoIcon';
SketchLogoIcon.propTypes = {iconType: PropTypes.string};
SketchLogoIcon.defaultProps = {iconType: 'Logos'};