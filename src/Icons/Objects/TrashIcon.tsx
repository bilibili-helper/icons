import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const TrashIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M5 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 1 0 0-1h-4a.5.5 0 0 0-.5.5ZM3.5 3h8a.5.5 0 0 1 0 1H11v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4h-.5a.5.5 0 1 1 0-1ZM10 4v8H5V4h5Z" fillRule="evenodd"/></svg>;
    }
);
TrashIcon.displayName = 'TrashIcon';
TrashIcon.propTypes = {iconType: PropTypes.string};
TrashIcon.defaultProps = {iconType: 'Objects'};

export default TrashIcon;