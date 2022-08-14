import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const GitHubLogoIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Logos', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M.25 7.5a7.252 7.252 0 0 0 4.958 6.88c.363.066.495-.158.495-.35 0-.172-.006-.628-.01-1.233-1.344.292-2.158-.032-2.442-.972-.22-.558-.488-.912-.805-1.06-.439-.3-.422-.447.05-.441.485.034.855.283 1.11.747.647 1.108 1.697.788 2.11.602.066-.468.254-.788.46-.969-1.61-.183-3.302-.805-3.302-3.583a2.8 2.8 0 0 1 .747-1.945c-.075-.184-.324-.92.07-1.92.406-.13 1.07.119 1.994.744A6.963 6.963 0 0 1 7.5 3.756 6.97 6.97 0 0 1 9.315 4c.923-.625 1.587-.873 1.992-.743.396.998.147 1.735.072 1.919.465.507.746 1.153.746 1.945 0 2.785-1.696 3.398-3.31 3.578.26.223.491.666.491 1.342 0 .97-.009 1.751-.009 1.989 0 .194.131.42.499.349A7.25 7.25 0 1 0 .25 7.5Z"/></svg>;
    }
);
GitHubLogoIconIcon.displayName = 'GitHubLogoIconIcon';
GitHubLogoIconIcon.propTypes = {iconType: PropTypes.string};
GitHubLogoIconIcon.defaultProps = {iconType: 'Logos'};

export default GitHubLogoIconIcon;