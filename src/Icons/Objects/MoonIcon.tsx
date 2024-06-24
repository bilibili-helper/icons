import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const MoonIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><g fillRule="evenodd"><path d="M12.102 1a.4.4 0 0 1 .4.4V2h.6a.4.4 0 0 1 0 .8h-.6v.6a.4.4 0 0 1-.8 0v-.6h-.6a.4.4 0 1 1 0-.8h.6v-.6a.4.4 0 0 1 .4-.4ZM8.6 3.2c.22 0 .4.18.4.4v.6h.6a.4.4 0 0 1 0 .8H9v.6a.4.4 0 0 1-.8 0V5h-.6a.4.4 0 0 1 0-.8h.6v-.6c0-.22.18-.4.4-.4Zm4 3c.22 0 .4.18.4.4v.6h.6a.4.4 0 0 1 0 .8H13v.6a.4.4 0 0 1-.8 0V8h-.6a.4.4 0 0 1 0-.8h.6v-.6c0-.22.18-.4.4-.4Z"/><path d="M5.258 1.234c.2-.078.386.129.313.331a6.57 6.57 0 0 0-.161 3.934 6.602 6.602 0 0 0 7.736 4.75c.21-.044.39.168.284.355a5.4 5.4 0 0 1-.149.253l-.052.083-.193.285-.143.192-.094.118-.147.175-.14.157a6.59 6.59 0 0 1-.302.305l-.22.199-.22.183-.26.196-.214.146a6.547 6.547 0 0 1-.998.538l-.296.12-.253.088a6.6 6.6 0 0 1-8.603-5.281l-.036-.277a6.562 6.562 0 0 1 .005-1.467l.04-.287.032-.18.033-.163a6.54 6.54 0 0 1 .298-.994l.096-.233.13-.283.112-.217.083-.15.114-.194.163-.251.243-.334.19-.234.233-.26.262-.263.274-.244.096-.08.204-.159.241-.172.222-.145.291-.17.24-.127.269-.127.277-.116ZM4.105 3.06a5.601 5.601 0 1 0 7.213 8.57C8.788 11.147 7.18 10.374 6 9 4.82 7.627 4.105 6.3 4.105 3.06Z"/></g></svg>;
    }
);
MoonIcon.displayName = 'MoonIcon';
MoonIcon.propTypes = {iconType: PropTypes.string};
MoonIcon.defaultProps = {iconType: 'Objects'};