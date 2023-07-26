import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const PlayIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Player', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="m3.733 2.308 9 4.75a.5.5 0 0 1 0 .884l-9 4.75A.5.5 0 0 1 3 12.25v-9.5a.5.5 0 0 1 .733-.442ZM4 11.42l7.429-3.92L4 3.58v7.84Z" fillRule="evenodd"/></svg>;
    }
);
PlayIcon.displayName = 'PlayIcon';
PlayIcon.propTypes = {iconType: PropTypes.string};
PlayIcon.defaultProps = {iconType: 'Player'};