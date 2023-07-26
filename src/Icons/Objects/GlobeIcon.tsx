import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const GlobeIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M5.811 2.186a5.717 5.717 0 0 0-3.228 2.707c.629-.25 1.335-.442 2.083-.579A8.082 8.082 0 0 1 5.81 2.186ZM1.914 7.2c.032-.468.121-.92.26-1.35.628-.334 1.4-.593 2.253-.775a9.773 9.773 0 0 0-.32 2.125H1.915Zm2.894 0c.033-.774.163-1.54.387-2.265.644-.098 1.32-.156 2.005-.172V7.2H4.808ZM8 7.2V4.763c.708.016 1.406.078 2.07.182.23.722.362 1.484.396 2.255H8Zm0-3.138c.603.014 1.205.059 1.79.136a6.95 6.95 0 0 0-1.544-2.262A5.743 5.743 0 0 0 8 1.914v2.148ZM11.167 7.2a9.505 9.505 0 0 0-.325-2.11c.826.18 1.573.435 2.184.76.139.43.228.882.26 1.35h-2.12Zm-.571-2.875c.724.136 1.41.325 2.021.568A5.717 5.717 0 0 0 9.42 2.196c.5.642.891 1.363 1.177 2.13Zm-5.13-.135A16.834 16.834 0 0 1 7.2 4.062V1.914a5.728 5.728 0 0 0-.243.022A6.963 6.963 0 0 0 5.465 4.19ZM4.107 8H1.914c.027.386.092.76.191 1.122.627.344 1.406.612 2.27.8A9.81 9.81 0 0 1 4.108 8Zm.486 2.68c-.77-.145-1.495-.35-2.135-.615a5.717 5.717 0 0 0 3.352 2.949 8.149 8.149 0 0 1-1.217-2.333Zm.79.127a16.7 16.7 0 0 0 1.816.138v2.341a5.564 5.564 0 0 1-.243-.022c-.688-.684-1.213-1.528-1.573-2.457Zm1.816-.562a15.829 15.829 0 0 1-2.064-.181A9.03 9.03 0 0 1 4.808 8H7.2v2.245Zm.8.7v2.341c.083-.006.165-.013.246-.022a7.009 7.009 0 0 0 1.629-2.465c-.612.083-1.243.132-1.875.146Zm2.131-.892c-.682.11-1.401.175-2.131.192V8h2.466a8.72 8.72 0 0 1-.335 2.053Zm.539.615a8.076 8.076 0 0 1-1.25 2.336 5.717 5.717 0 0 0 3.32-2.939c-.621.258-1.324.46-2.07.603Zm2.425-1.546c-.61.335-1.364.597-2.2.784A9.543 9.543 0 0 0 11.167 8h2.12c-.028.386-.093.76-.192 1.122ZM1 7.6a6.6 6.6 0 1 1 13.2 0A6.6 6.6 0 0 1 1 7.6Z" fillRule="evenodd"/></svg>;
    }
);
GlobeIcon.displayName = 'GlobeIcon';
GlobeIcon.propTypes = {iconType: PropTypes.string};
GlobeIcon.defaultProps = {iconType: 'Objects'};