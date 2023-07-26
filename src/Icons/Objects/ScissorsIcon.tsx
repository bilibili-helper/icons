import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const ScissorsIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><g fill="none" fillRule="evenodd"><path d="M0 0h15v15H0Z"/><path d="M.05 4.485a2.45 2.45 0 1 1 4.723.915l.964.644a2.001 2.001 0 0 0-.02.068l-.154.55-.353.236-.994-.664A2.45 2.45 0 0 1 .05 4.484Zm2.45 1.55a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1ZM.05 10.5a2.45 2.45 0 1 0 4.727-.905L15 2.757l-.951.1a10 10 0 0 0-3.818 1.208l-3.075 1.71a1 1 0 0 0-.476.606l-.253.906L4.224 8.76A2.45 2.45 0 0 0 .05 10.5ZM2.5 8.95a1.55 1.55 0 1 1 0 3.1 1.55 1.55 0 0 1 0-3.1Zm4.656.272 3.075 1.71a10 10 0 0 0 3.818 1.208l.951.1L8.81 8.1 7.145 9.215l.012.007Z" fill="#000"/></g></svg>;
    }
);
ScissorsIcon.displayName = 'ScissorsIcon';
ScissorsIcon.propTypes = {iconType: PropTypes.string};
ScissorsIcon.defaultProps = {iconType: 'Objects'};