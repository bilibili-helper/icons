import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const ComponentPlaceholderIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Design', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M7.147 1.49a.5.5 0 1 0 .707.707.5.5 0 0 0-.707-.707Zm2.12 1.414a.5.5 0 1 1-.706.707.5.5 0 0 1 .707-.707ZM5.026 4.318a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707ZM3.611 5.732a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707ZM2.26 7.225a.506.506 0 0 0-.771-.079.5.5 0 1 0 .77.079Zm.643 1.336a.5.5 0 1 1 .707.707.5.5 0 0 1-.707-.707Zm1.414 2.121a.5.5 0 1 0 .707-.707.5.5 0 0 0-.707.707Zm1.414.707a.5.5 0 1 1 .707.707.5.5 0 0 1-.707-.707Zm1.415 1.414a.5.5 0 1 1 .707.707.5.5 0 0 1-.707-.707Zm2.12-1.414a.5.5 0 1 0-.706.707.5.5 0 0 0 .707-.707Zm1.415-.707a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707Zm1.414-2.121a.5.5 0 1 0-.707.707.5.5 0 0 0 .707-.707Zm1.414-1.415a.5.5 0 1 1-.707.708.5.5 0 0 1 .707-.708Zm-1.414-1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707Zm-2.12-1.414a.5.5 0 1 0 .707.707.5.5 0 0 0-.707-.707ZM6.439 2.904a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707Z" fillRule="evenodd"/></svg>;
    }
);
ComponentPlaceholderIcon.displayName = 'ComponentPlaceholderIcon';
ComponentPlaceholderIcon.propTypes = {iconType: PropTypes.string};
ComponentPlaceholderIcon.defaultProps = {iconType: 'Design'};