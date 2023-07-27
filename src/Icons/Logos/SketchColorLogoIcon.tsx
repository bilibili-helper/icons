import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const SketchColorLogoIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Logos', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><g fill="none"><path fill="#FDB300" d="M3.434 1.423 7.515 1l4.082.423 3.144 4.233L7.485 14 .259 5.64l3.175-4.232z"/><path d="M3.192 5.64 7.515 14 .26 5.64m11.55 0L7.514 14l7.226-8.36" fill="#EA6C00"/><path fill="#FDAD00" d="M3.192 5.64h8.616L7.515 14"/><path d="m7.515 1-4.081.423-.242 4.233M7.515 1l4.082.423.211 4.233" fill="#FDD231"/><path d="m14.74 5.64-3.174-4.232.242 4.233M.26 5.64l3.175-4.233-.242 4.233" fill="#FDAD00"/><path fill="#FEEEB7" d="M7.515 1 3.177 5.64h8.616"/></g></svg>;
    }
);
SketchColorLogoIcon.displayName = 'SketchColorLogoIcon';
SketchColorLogoIcon.propTypes = {iconType: PropTypes.string};
SketchColorLogoIcon.defaultProps = {iconType: 'Logos'};