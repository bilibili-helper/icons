import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const BorderNoneIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Borders', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M7.5 5.025a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm6 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm-6-2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm6 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm-6 4a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0 6a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0-12a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm6 6a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0 6a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0-12a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm-8 6a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0 6a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0-12a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm-2 6a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0 6a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0-12a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm6 6a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0 6a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0-12a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm2 6a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0 6a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0-12a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm-4 8a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm6 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm-6 2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm6 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm-12-6a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0-2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0 4a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0 6a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0-12a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0 8a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0 2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Z" fillRule="evenodd"/></svg>;
    }
);
BorderNoneIcon.displayName = 'BorderNoneIcon';
BorderNoneIcon.propTypes = {iconType: PropTypes.string};
BorderNoneIcon.defaultProps = {iconType: 'Borders'};