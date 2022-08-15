import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const ColumnSpacingIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Design', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M7.5 1a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 1 0v-12a.5.5 0 0 0-.5-.5ZM3.318 5.182a.45.45 0 0 0-.636 0l-2 2a.45.45 0 0 0 0 .636l2 2a.45.45 0 0 0 .636-.636L2.086 7.95H5.5a.45.45 0 1 0 0-.9H2.086l1.232-1.232a.45.45 0 0 0 0-.636Zm8.364 0a.45.45 0 0 0 0 .636l1.232 1.232H9.5a.45.45 0 1 0 0 .9h3.414l-1.232 1.232a.45.45 0 0 0 .636.636l2-2a.45.45 0 0 0 0-.636l-2-2a.45.45 0 0 0-.636 0Z" fillRule="evenodd"/></svg>;
    }
);
ColumnSpacingIcon.displayName = 'ColumnSpacingIcon';
ColumnSpacingIcon.propTypes = {iconType: PropTypes.string};
ColumnSpacingIcon.defaultProps = {iconType: 'Design'};

export default ColumnSpacingIcon;