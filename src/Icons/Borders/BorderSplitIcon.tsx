import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const BorderSplitIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Borders', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M7.5 5.025a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0-2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0 4a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0 6a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0-12a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm6 6a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm-8 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm-2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm6 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm-4 2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0 2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm-6-4a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM1.5 1H6v1H2v4H1V1.5a.5.5 0 0 1 .5-.5ZM9 2V1h4.5a.5.5 0 0 1 .5.5V6h-1V2H9ZM1 9h1v4h4v1H1.5a.5.5 0 0 1-.5-.5V9Zm12 0h1v4.5a.5.5 0 0 1-.5.5h-4v-1H13V9Z" fillRule="evenodd"/></svg>;
    }
);
BorderSplitIcon.displayName = 'BorderSplitIcon';
BorderSplitIcon.propTypes = {iconType: PropTypes.string};
BorderSplitIcon.defaultProps = {iconType: 'Borders'};

export default BorderSplitIcon;