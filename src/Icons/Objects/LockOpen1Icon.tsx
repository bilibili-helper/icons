import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const LockOpen1IconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M4.738 1.194C4.238 1.839 4 2.682 4 3.634h1c0-.79.197-1.4.528-1.828.388-.5 1.024-.806 1.97-.806.859 0 1.465.265 1.86.686.4.426.642 1.074.642 1.95V6H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1V3.636c0-1.055-.294-1.974-.912-2.634C9.465.338 8.57 0 7.498 0c-1.172 0-2.137.39-2.76 1.194ZM12 7v6H3V7h9Z" fillRule="evenodd"/></svg>;
    }
);
LockOpen1IconIcon.displayName = 'LockOpen1IconIcon';
LockOpen1IconIcon.propTypes = {iconType: PropTypes.string};
LockOpen1IconIcon.defaultProps = {iconType: 'Objects'};

export default LockOpen1IconIcon;