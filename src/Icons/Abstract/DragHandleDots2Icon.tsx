import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const DragHandleDots2IconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Abstract', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M6.625 3.5a1.125 1.125 0 1 0-2.25 0 1.125 1.125 0 0 0 2.25 0Zm4 0a1.125 1.125 0 1 0-2.25 0 1.125 1.125 0 0 0 2.25 0ZM9.5 8.625a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM6.625 7.5a1.125 1.125 0 1 0-2.25 0 1.125 1.125 0 0 0 2.25 0ZM9.5 12.625a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM6.625 11.5a1.125 1.125 0 1 0-2.25 0 1.125 1.125 0 0 0 2.25 0Z" fillRule="evenodd"/></svg>;
    }
);
DragHandleDots2IconIcon.displayName = 'DragHandleDots2IconIcon';
DragHandleDots2IconIcon.propTypes = {iconType: PropTypes.string};
DragHandleDots2IconIcon.defaultProps = {iconType: 'Abstract'};

export default DragHandleDots2IconIcon;