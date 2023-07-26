import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const DropdownMenuIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Components', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M7.1 3.5c0 .22.18.4.4.4h7a.4.4 0 1 0 0-.8h-7a.4.4 0 0 0-.4.4Zm0 2c0 .22.18.4.4.4h7a.4.4 0 1 0 0-.8h-7a.4.4 0 0 0-.4.4Zm.4 1.6h7a.4.4 0 0 1 0 .8h-7a.4.4 0 0 1 0-.8Zm-.4 2.4c0 .22.18.4.4.4h7a.4.4 0 1 0 0-.8h-7a.4.4 0 0 0-.4.4Zm.4 1.6h7a.4.4 0 1 1 0 .8h-7a.4.4 0 1 1 0-.8ZM5 6H0l2.5 3.25L5 6Z" fillRule="evenodd"/></svg>;
    }
);
DropdownMenuIcon.displayName = 'DropdownMenuIcon';
DropdownMenuIcon.propTypes = {iconType: PropTypes.string};
DropdownMenuIcon.defaultProps = {iconType: 'Components'};