import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const CatPawIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><g fill="none" fillRule="evenodd"><path d="M0 0h15v15H0Z"/><path d="M1.22 11.02c.5.714 1.546 1.155 2.328.607.787-.55.726-1.68.225-2.396-.5-.715-1.541-1.158-2.328-.607-.782.547-.726 1.68-.225 2.396ZM14.2 4.897c-.207-.947-1.1-1.802-2.122-1.529-.993.267-1.443 1.192-1.178 2.165.251.923 1.202 1.745 2.196 1.384.803-.288 1.325-1.189 1.105-2.02ZM2.752 6.604c.523.746 1.633 1.356 2.487.757.854-.598.661-1.85.139-2.596-.523-.746-1.638-1.353-2.487-.758-.85.595-.662 1.85-.139 2.597Zm6.637-3.756c-.442-.823-1.477-1.546-2.404-1.031-.914.513-.892 1.75-.453 2.568.431.798 1.484 1.555 2.4 1.054.898-.488.885-1.799.457-2.591Zm2.367 5.237c1.988 3.279-4.451 7.03-6.251 3.58-1.855-3.56 4.164-7.03 6.251-3.58Z" fill="#000" fillRule="nonzero"/></g></svg>;
    }
);
CatPawIcon.displayName = 'CatPawIcon';
CatPawIcon.propTypes = {iconType: PropTypes.string};
CatPawIcon.defaultProps = {iconType: 'Objects'};