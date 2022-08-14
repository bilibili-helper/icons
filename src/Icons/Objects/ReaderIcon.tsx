import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const ReaderIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M4.5 10.5a.5.5 0 0 0 .5.5h3a.5.5 0 1 0 0-1H5a.5.5 0 0 0-.5.5ZM5 7h5a.5.5 0 1 1 0 1H5a.5.5 0 1 1 0-1Zm-.5-2.5A.5.5 0 0 0 5 5h5a.5.5 0 1 0 0-1H5a.5.5 0 0 0-.5.5ZM3.386 1.02c-.23.023-.458.071-.67.201a1.5 1.5 0 0 0-.495.495 1.52 1.52 0 0 0-.2.67C2 2.604 2 2.87 2 3.177v8.646c0 .308 0 .573.02.79.023.231.071.459.201.67a1.5 1.5 0 0 0 .495.496c.212.13.44.178.67.2.218.021.483.021.791.021h6.646c.308 0 .573 0 .79-.02.231-.023.459-.071.67-.201a1.5 1.5 0 0 0 .496-.495c.13-.212.178-.44.2-.67.021-.218.021-.483.021-.791V3.177c0-.308 0-.573-.02-.79a1.519 1.519 0 0 0-.201-.67 1.5 1.5 0 0 0-.495-.496 1.519 1.519 0 0 0-.67-.2C11.396 1 11.13 1 10.823 1H4.177c-.308 0-.573 0-.79.02Zm.095.996C3.645 2.001 3.863 2 4.2 2h6.6c.337 0 .555 0 .72.016.156.015.213.04.241.058a.5.5 0 0 1 .165.165c.018.028.043.085.058.242.015.164.016.382.016.719v8.6c0 .337 0 .555-.016.72-.015.156-.04.213-.058.241a.5.5 0 0 1-.165.165c-.028.018-.085.043-.242.058A8.558 8.558 0 0 1 10.8 13H4.2c-.337 0-.555 0-.72-.016-.156-.015-.213-.04-.241-.058a.5.5 0 0 1-.165-.165c-.018-.028-.043-.085-.058-.242A8.558 8.558 0 0 1 3 11.8V3.2c0-.337 0-.555.016-.72.015-.156.04-.213.058-.241a.5.5 0 0 1 .165-.165c.028-.018.085-.043.242-.058Z" fillRule="evenodd"/></svg>;
    }
);
ReaderIconIcon.displayName = 'ReaderIconIcon';
ReaderIconIcon.propTypes = {iconType: PropTypes.string};
ReaderIconIcon.defaultProps = {iconType: 'Objects'};

export default ReaderIconIcon;