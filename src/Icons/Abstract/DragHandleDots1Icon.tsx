import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const DragHandleDots1Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Abstract', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M4.5 3.1a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Zm0 2a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Zm0 1.999a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Zm0 2a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Zm0 2a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Zm0 1.999a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Zm2-9.998a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Zm0 2a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Zm0 1.999a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Zm0 2a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Zm0 2a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Zm0 1.999a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2ZM8.499 3.1a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Zm0 2a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Zm0 1.999a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Zm0 2a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Zm0 2a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Zm0 1.999a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Zm2-9.998a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Zm0 2a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Zm0 1.999a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Zm0 2a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Zm0 2a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Zm0 1.999a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Z" fillRule="evenodd"/></svg>;
    }
);
DragHandleDots1Icon.displayName = 'DragHandleDots1Icon';
DragHandleDots1Icon.propTypes = {iconType: PropTypes.string};
DragHandleDots1Icon.defaultProps = {iconType: 'Abstract'};

export default DragHandleDots1Icon;