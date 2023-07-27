import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const IconfontLogoIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Logos', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><defs><linearGradient x1="82.119%" y1="17.881%" x2="14.645%" y2="85.355%" id="a"><stop stopColor="#3967FF" offset="0%"/><stop stopColor="#B500FE" offset="100%"/></linearGradient><linearGradient x1="21.198%" y1="85.355%" x2="78.802%" y2="14.645%" id="b"><stop stopColor="#1C98FF" offset="0%"/><stop stopColor="#574AE4" offset="100%"/></linearGradient><linearGradient x1="-10.014%" y1="39.304%" x2="101.785%" y2="31.074%" id="c"><stop stopColor="#FF4695" offset="0%"/><stop stopColor="#CC34E7" offset="100%"/></linearGradient></defs><g fill="none"><path d="M2.904 12.096a6.5 6.5 0 1 1 9.192-9.192 6.5 6.5 0 0 1-9.192 9.192ZM4.55 10.45a4.172 4.172 0 1 0 5.9-5.9 4.172 4.172 0 0 0-5.9 5.9Z" fill="url(#a)"/><path d="M8.04 6.935a1.89 1.89 0 0 0-1.31-.561l1.765-5.296a6.47 6.47 0 0 1 3.609 1.829 6.47 6.47 0 0 1 1.828 3.609l-5.33 1.776a1.889 1.889 0 0 0-.562-1.357Z" fill="url(#b)"/><path d="M7.457 7.5a1.149 1.149 0 1 0-1.625 1.625A1.149 1.149 0 0 0 7.457 7.5Z" fill="url(#c)"/></g></svg>;
    }
);
IconfontLogoIcon.displayName = 'IconfontLogoIcon';
IconfontLogoIcon.propTypes = {iconType: PropTypes.string};
IconfontLogoIcon.defaultProps = {iconType: 'Logos'};