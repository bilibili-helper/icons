import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const GroupIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Design', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M1.096 1.096a.5.5 0 0 0-.146.354v2a.5.5 0 0 0 1 0v-1.5h1.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.354.146Zm4.354.354a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5Zm.5 11.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Zm-4.5-7.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5Zm12.5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 1 0Zm-3-4.5a.5.5 0 0 0 .5.5h1.5v1.5a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.501-.5H11.45a.5.5 0 0 0-.5.5Zm-9 10v1.5h1.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 1 0Zm11.5-.5a.5.5 0 0 0-.5.5v1.5h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5Z" fillRule="evenodd"/></svg>;
    }
);
GroupIconIcon.displayName = 'GroupIconIcon';
GroupIconIcon.propTypes = {iconType: PropTypes.string};
GroupIconIcon.defaultProps = {iconType: 'Design'};

export default GroupIconIcon;