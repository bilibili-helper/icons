import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const ClipboardCopyIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><g fill="none" fillRule="evenodd"><path d="M0 0h15v15H0Z"/><path d="M4 .75V1h-.5A1.5 1.5 0 0 0 2 2.5v10A1.5 1.5 0 0 0 3.5 14H7v-1H3.5a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5H4v.25c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75V2h.5a.5.5 0 0 1 .5.5V7h1V2.5A1.5 1.5 0 0 0 11.5 1H11V.75a.75.75 0 0 0-.75-.75h-5.5A.75.75 0 0 0 4 .75ZM5 1h5v1H5V1Zm3.5 8a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm2.5-.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm1.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm2.5-.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm-.5 2.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm.5 1.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm0 2a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm-6-4a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM8.5 13a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm.5 1.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm1.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm2.5-.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Z" fill="#000"/></g></svg>;
    }
);
ClipboardCopyIcon.displayName = 'ClipboardCopyIcon';
ClipboardCopyIcon.propTypes = {iconType: PropTypes.string};
ClipboardCopyIcon.defaultProps = {iconType: 'Objects'};