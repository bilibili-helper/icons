import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const MoveIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Arrows', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="m7.182.932-1.75 1.75a.45.45 0 1 0 .636.636L7 2.386V5.5a.5.5 0 1 0 1 0V2.386l.932.932a.45.45 0 0 0 .636-.636L7.818.932a.45.45 0 0 0-.636 0ZM7.5 9a.5.5 0 0 0-.5.5v3.114l-.932-.932a.45.45 0 0 0-.636.636l1.75 1.75a.45.45 0 0 0 .636 0l1.75-1.75a.45.45 0 0 0-.636-.636L8 12.614V9.5a.5.5 0 0 0-.5-.5Zm2-2h3.114l-.932-.932a.45.45 0 0 1 .636-.636l1.75 1.75a.45.45 0 0 1 0 .636l-1.75 1.75a.45.45 0 0 1-.636-.636L12.614 8H9.5a.5.5 0 0 1 0-1ZM2.386 7H5.5a.5.5 0 1 1 0 1H2.386l.932.932a.45.45 0 0 1-.636.636l-1.75-1.75a.45.45 0 0 1 0-.636l1.75-1.75a.45.45 0 1 1 .636.636L2.386 7Z" fillRule="evenodd"/></svg>;
    }
);
MoveIcon.displayName = 'MoveIcon';
MoveIcon.propTypes = {iconType: PropTypes.string};
MoveIcon.defaultProps = {iconType: 'Arrows'};