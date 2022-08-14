import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const LinkNone1IconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M4.625 4H5.5a.5.5 0 0 1 0 1h-.875c-.604 0-.836.002-1.019.037-.803.153-1.414.752-1.568 1.496-.035.17-.038.384-.038.967 0 .582.003.798.038.967.154.744.765 1.342 1.568 1.496.183.035.415.037 1.019.037H5.5a.5.5 0 1 1 0 1h-.935c-.523 0-.858 0-1.147-.055-1.18-.225-2.12-1.116-2.36-2.275C1 8.387 1 8.06 1 7.563v-.126c0-.497 0-.824.058-1.107.24-1.16 1.18-2.05 2.36-2.275C3.708 4 4.042 4 4.564 4h.061Zm5.75 1H9.5a.5.5 0 0 1 0-1h.935c.523 0 .858 0 1.146.055 1.18.225 2.12 1.115 2.36 2.275.06.283.059.61.059 1.107v.126c0 .497 0 .824-.058 1.107-.24 1.16-1.18 2.05-2.36 2.275-.29.055-.624.055-1.146.055H9.5a.5.5 0 0 1 0-1h.875c.604 0 .836-.002 1.019-.037.803-.154 1.414-.752 1.568-1.496.035-.17.038-.385.038-.967 0-.583-.003-.798-.038-.967-.154-.744-.765-1.343-1.568-1.496C11.21 5.002 10.979 5 10.375 5Z" fillRule="evenodd"/></svg>;
    }
);
LinkNone1IconIcon.displayName = 'LinkNone1IconIcon';
LinkNone1IconIcon.propTypes = {iconType: PropTypes.string};
LinkNone1IconIcon.defaultProps = {iconType: 'Objects'};

export default LinkNone1IconIcon;