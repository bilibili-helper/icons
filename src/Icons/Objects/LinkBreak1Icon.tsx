import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const LinkBreak1IconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M13.354 1.646a.5.5 0 0 0-.708 0l-11 11a.5.5 0 1 0 .708.708l11-11a.5.5 0 0 0 0-.708ZM3.339 9.893l-.76.76a2.91 2.91 0 0 1-1.52-1.983c-.06-.283-.06-.61-.06-1.107v-.126c0-.497 0-.824.06-1.107.24-1.16 1.179-2.05 2.36-2.275C3.706 4 4.04 4 4.563 4H5.5a.5.5 0 1 1 0 1h-.875c-.604 0-.836.002-1.02.037-.802.154-1.413.752-1.568 1.496-.035.17-.037.385-.037.967 0 .583.002.798.037.967.137.66.632 1.204 1.302 1.426Zm8.322-4.786.76-.76a2.91 2.91 0 0 1 1.52 1.983c.059.283.059.61.059 1.107v.126c0 .497 0 .824-.059 1.107-.24 1.16-1.18 2.05-2.36 2.275-.288.055-.623.055-1.146.055H9.5a.5.5 0 1 1 0-1h.875c.604 0 .835-.002 1.019-.037.803-.154 1.414-.752 1.568-1.496.035-.17.038-.384.038-.967 0-.582-.003-.798-.038-.967a1.935 1.935 0 0 0-1.301-1.426Z" fillRule="evenodd"/></svg>;
    }
);
LinkBreak1IconIcon.displayName = 'LinkBreak1IconIcon';
LinkBreak1IconIcon.propTypes = {iconType: PropTypes.string};
LinkBreak1IconIcon.defaultProps = {iconType: 'Objects'};

export default LinkBreak1IconIcon;