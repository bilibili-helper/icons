import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const MagnifyingGlassIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M6.5 11a4.5 4.5 0 1 1 3.516-1.691l2.838 2.837a.5.5 0 0 1-.708.708L9.31 10.016A4.481 4.481 0 0 1 6.5 11Zm0-1a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" fillRule="evenodd"/></svg>;
    }
);
MagnifyingGlassIcon.displayName = 'MagnifyingGlassIcon';
MagnifyingGlassIcon.propTypes = {iconType: PropTypes.string};
MagnifyingGlassIcon.defaultProps = {iconType: 'Objects'};