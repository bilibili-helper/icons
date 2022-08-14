import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const CodeSandboxLogoIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Logos', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="m7.289.797-6 2.8A.5.5 0 0 0 1 4.05v6.9a.5.5 0 0 0 .289.453l6 2.8a.5.5 0 0 0 .422 0l6-2.8A.5.5 0 0 0 14 10.95v-6.9a.5.5 0 0 0-.289-.453l-6-2.8a.5.5 0 0 0-.422 0ZM5.98 2.51 7.5 1.8l1.52.71-1.52.646-1.52-.646Zm4.258.569 2.034.949L7.5 6.057 2.728 4.029l2.034-.95L7.304 4.16a.5.5 0 0 0 .392 0l2.542-1.08ZM13 4.806V7.93l-1.918.882a1 1 0 0 0-.582.908v2.078L8 12.965V6.93l5-2.125Zm0 5.826V9.03l-1.5.69v1.612l1.5-.7Zm-6 2.333-2.498-1.166V9.72a1 1 0 0 0-.582-.908L2 7.929V4.806L7 6.93v6.034Zm-3.498-1.632V9.72L2 9.03v1.602l1.502.7Z" fillRule="evenodd"/></svg>;
    }
);
CodeSandboxLogoIconIcon.displayName = 'CodeSandboxLogoIconIcon';
CodeSandboxLogoIconIcon.propTypes = {iconType: PropTypes.string};
CodeSandboxLogoIconIcon.defaultProps = {iconType: 'Logos'};

export default CodeSandboxLogoIconIcon;