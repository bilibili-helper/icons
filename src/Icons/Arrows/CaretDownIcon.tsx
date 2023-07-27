import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const CaretDownIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Arrows', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M4.818 6.182 7.5 8.864l2.682-2.682a.45.45 0 0 1 .636.636l-3 3a.45.45 0 0 1-.636 0l-3-3a.45.45 0 1 1 .636-.636Z"/></svg>;
    }
);
CaretDownIcon.displayName = 'CaretDownIcon';
CaretDownIcon.propTypes = {iconType: PropTypes.string};
CaretDownIcon.defaultProps = {iconType: 'Arrows'};