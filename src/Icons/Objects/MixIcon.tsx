import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const MixIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M1.25 4a2.75 2.75 0 1 0 5.5 0 2.75 2.75 0 0 0-5.5 0ZM4 2.15a1.85 1.85 0 1 1 0 3.7 1.85 1.85 0 0 1 0-3.7ZM1.6 8.823v4.352a.7.7 0 0 0 1.039.613l3.933-2.176a.7.7 0 0 0 0-1.225L2.64 8.212a.7.7 0 0 0-1.039.612Zm.9 4.013V9.163L5.82 11 2.5 12.837ZM9 8.3h4a.7.7 0 0 1 .7.7v4a.7.7 0 0 1-.7.7H9a.7.7 0 0 1-.7-.7V9a.7.7 0 0 1 .7-.7Zm.2 4.5h3.6V9.2H9.2v3.6Zm4.243-11.243a.45.45 0 0 0-.636 0L11 3.364 9.193 1.557a.45.45 0 0 0-.636.636L10.364 4 8.557 5.807a.45.45 0 0 0 .636.636L11 4.636l1.807 1.807a.45.45 0 0 0 .636-.636L11.636 4l1.807-1.807a.45.45 0 0 0 0-.636Z" fillRule="evenodd"/></svg>;
    }
);
MixIcon.displayName = 'MixIcon';
MixIcon.propTypes = {iconType: PropTypes.string};
MixIcon.defaultProps = {iconType: 'Objects'};