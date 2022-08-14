import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const AvatarIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Components', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M7.5 4.155a2.35 2.35 0 1 1 0 4.7 2.35 2.35 0 0 1 0-4.7Zm-1.4 2.35a1.4 1.4 0 1 0 2.8 0 1.4 1.4 0 0 0-2.8 0ZM7.5.877a6.623 6.623 0 1 1 0 13.246A6.623 6.623 0 0 1 7.5.877ZM1.827 7.5c0 1.472.56 2.813 1.48 3.821A4.971 4.971 0 0 1 7.5 9.025a4.97 4.97 0 0 1 4.193 2.296A5.673 5.673 0 1 0 1.827 7.5ZM7.5 9.975a4.023 4.023 0 0 0-3.482 2.004A5.648 5.648 0 0 0 7.5 13.173c1.312 0 2.52-.446 3.482-1.194A4.023 4.023 0 0 0 7.5 9.975Z" fillRule="evenodd"/></svg>;
    }
);
AvatarIconIcon.displayName = 'AvatarIconIcon';
AvatarIconIcon.propTypes = {iconType: PropTypes.string};
AvatarIconIcon.defaultProps = {iconType: 'Components'};

export default AvatarIconIcon;