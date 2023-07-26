import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const DotsVerticalIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Abstract', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M7.5 3.625a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0 5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM8.625 12.5a1.125 1.125 0 1 0-2.25 0 1.125 1.125 0 0 0 2.25 0Z" fillRule="evenodd"/></svg>;
    }
);
DotsVerticalIcon.displayName = 'DotsVerticalIcon';
DotsVerticalIcon.propTypes = {iconType: PropTypes.string};
DotsVerticalIcon.defaultProps = {iconType: 'Abstract'};