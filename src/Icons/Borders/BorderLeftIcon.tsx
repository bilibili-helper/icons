import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const BorderLeftIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Borders', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M1.75 14H.25V1h1.5v13ZM10 7.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2-6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-4-6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm6 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-6 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm6 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-6-8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm6 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-6-2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm6 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-6 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm6 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-6 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm6 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-8-4a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-2-6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm6-12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-4 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm6 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-8 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" fillRule="evenodd"/></svg>;
    }
);
BorderLeftIconIcon.displayName = 'BorderLeftIconIcon';
BorderLeftIconIcon.propTypes = {iconType: PropTypes.string};
BorderLeftIconIcon.defaultProps = {iconType: 'Borders'};

export default BorderLeftIconIcon;