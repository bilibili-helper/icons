import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const FileIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M3.5 1h5a.5.5 0 0 1 .354.146l4 4A.5.5 0 0 1 13 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 12.5v-10A1.5 1.5 0 0 1 3.5 1ZM3 2.5v10a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V6H8.5a.5.5 0 0 1-.5-.5V2H3.5a.5.5 0 0 0-.5.5ZM11.293 5H9V2.707L11.293 5Z" fillRule="evenodd"/></svg>;
    }
);
FileIconIcon.displayName = 'FileIconIcon';
FileIconIcon.propTypes = {iconType: PropTypes.string};
FileIconIcon.defaultProps = {iconType: 'Objects'};

export default FileIconIcon;