import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const ShadowOuterIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Design', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><g fill="none" fillRule="evenodd"><path d="M0 0h15v15H0V0Z"/><g fill="#000"><path d="M15 9a6 6 0 0 1-11.104 3.155l.425-.263a5.5 5.5 0 1 0 7.557-7.58l.262-.426A5.996 5.996 0 0 1 15 9Z" opacity=".05"/><path d="M14.5 9a5.5 5.5 0 0 1-9.427 3.851l.357-.35a5 5 0 1 0 7.07-7.07l.351-.358A5.484 5.484 0 0 1 14.5 9Z" opacity=".2"/><path d="M14 9a5 5 0 0 1-7.599 4.272l.26-.427a4.5 4.5 0 0 0 6.21-6.14l.431-.254C13.746 7.197 14 8.069 14 9Z" opacity=".35"/><path d="M13.5 9a4.5 4.5 0 0 1-5.627 4.358l.125-.485a4 4 0 0 0 4.89-4.816l.486-.117c.083.34.126.695.126 1.06Z" opacity=".5"/><path d="m9.792 12.922-.098-.49a3.505 3.505 0 0 0 2.732-2.713l.49.102a4.005 4.005 0 0 1-3.124 3.1Z" opacity=".65"/><path d="M7.502 1.278a6.225 6.225 0 1 1 0 12.45 6.225 6.225 0 0 1 0-12.45ZM2.227 7.503a5.275 5.275 0 1 0 10.55 0 5.275 5.275 0 0 0-10.55 0Z"/></g></g></svg>;
    }
);
ShadowOuterIconIcon.displayName = 'ShadowOuterIconIcon';
ShadowOuterIconIcon.propTypes = {iconType: PropTypes.string};
ShadowOuterIconIcon.defaultProps = {iconType: 'Design'};

export default ShadowOuterIconIcon;