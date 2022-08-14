import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const FontBoldIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Typography', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M4.252 11.736c-.168-.18-.252-.465-.252-.853V4.117c0-.397.086-.681.258-.853.176-.176.458-.264.847-.264h3.924c1.108 0 2.025.982 2.025 2.185 0 .9-.45 1.634-1.35 2.051 1.162.213 1.814 1.392 1.814 2.245 0 1.031-.528 2.519-2.24 2.519H5.104c-.397 0-.681-.088-.853-.264ZM5.8 8.003v2.628h2.579c.521 0 1.25-.51 1.25-1.332 0-.823-.729-1.296-1.25-1.296H5.8Zm0-1.307h2.38c.36 0 1.097-.337 1.097-1.196 0-.86-.797-1.131-1.097-1.131H5.8v2.327Z" fillRule="evenodd"/></svg>;
    }
);
FontBoldIconIcon.displayName = 'FontBoldIconIcon';
FontBoldIconIcon.propTypes = {iconType: PropTypes.string};
FontBoldIconIcon.defaultProps = {iconType: 'Typography'};

export default FontBoldIconIcon;