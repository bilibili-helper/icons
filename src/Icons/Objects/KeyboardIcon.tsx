import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const KeyboardIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><g fill="none" fillRule="evenodd"><path d="M0 0h15v15H0Z"/><path d="M3 5v1H2V5h1Zm1 0v1h1V5H4Zm3 0v1H6V5h1Zm1 0v1h1V5H8Zm3 0v1h-1V5h1Zm1 0v1h1V5h-1Zm0 2v1h-1V7h1Zm0 2v1h1V9h-1Zm-2-2v1H9V7h1ZM7 7v1h1V7H7ZM6 7v1H5V7h1ZM3 7v1h1V7H3Zm0 2v1H2V9h1Zm1 0v1h7V9H4ZM0 4.5v6A1.5 1.5 0 0 0 1.5 12h12a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 13.5 3h-12A1.5 1.5 0 0 0 0 4.5ZM1.5 4a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-12Z" fill="#000"/></g></svg>;
    }
);
KeyboardIcon.displayName = 'KeyboardIcon';
KeyboardIcon.propTypes = {iconType: PropTypes.string};
KeyboardIcon.defaultProps = {iconType: 'Objects'};