import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const Link1Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M3.418 4.055c-1.18.225-2.12 1.116-2.36 2.275C1 6.613 1 6.94 1 7.437v.126c0 .497 0 .824.058 1.107.24 1.16 1.18 2.05 2.36 2.275.289.055.623.055 1.146.055H5.5a.5.5 0 0 0 0-1h-.875c-.604 0-.836-.002-1.02-.037-.802-.154-1.413-.752-1.568-1.496C2.002 8.297 2 8.083 2 7.5c0-.582.002-.798.037-.967.155-.744.766-1.342 1.569-1.496C3.789 5.002 4.02 5 4.625 5H5.5a.5.5 0 1 0 0-1h-.936c-.523 0-.857 0-1.146.055Zm7.976.982c.803.154 1.414.752 1.568 1.496.035.17.038.385.038.967 0 .583-.003.798-.038.967-.154.744-.765 1.342-1.568 1.496-.184.035-.415.037-1.02.037H9.5a.5.5 0 0 0 0 1h.935c.523 0 .858 0 1.146-.055 1.18-.225 2.12-1.116 2.36-2.275C14 8.387 14 8.06 14 7.563v-.126c0-.497 0-.824-.059-1.107-.24-1.16-1.18-2.05-2.36-2.275C11.293 4 10.958 4 10.435 4H9.5a.5.5 0 0 0 0 1h.875c.604 0 .835.002 1.019.037ZM4.5 7.5A.5.5 0 0 0 5 8h5a.5.5 0 0 0 0-1H5a.5.5 0 0 0-.5.5Z" fillRule="evenodd"/></svg>;
    }
);
Link1Icon.displayName = 'Link1Icon';
Link1Icon.propTypes = {iconType: PropTypes.string};
Link1Icon.defaultProps = {iconType: 'Objects'};