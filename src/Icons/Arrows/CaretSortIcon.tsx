import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const CaretSortIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Arrows', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M4.932 6.068a.45.45 0 0 0 .636 0L7.5 4.136l1.932 1.932a.45.45 0 0 0 .636-.636l-2.25-2.25a.45.45 0 0 0-.636 0l-2.25 2.25a.45.45 0 0 0 0 .636Zm5.136 2.864a.45.45 0 0 0-.636 0L7.5 10.864 5.568 8.932a.45.45 0 0 0-.636.636l2.25 2.25a.45.45 0 0 0 .636 0l2.25-2.25a.45.45 0 0 0 0-.636Z" fillRule="evenodd"/></svg>;
    }
);
CaretSortIconIcon.displayName = 'CaretSortIconIcon';
CaretSortIconIcon.propTypes = {iconType: PropTypes.string};
CaretSortIconIcon.defaultProps = {iconType: 'Arrows'};

export default CaretSortIconIcon;