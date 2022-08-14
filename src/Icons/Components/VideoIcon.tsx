import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const VideoIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Components', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="m5.6 5.154 4.828 2.117c.2.088.2.37 0 .458L5.6 9.846a.25.25 0 0 1-.35-.229V5.383a.25.25 0 0 1 .35-.23ZM.73 3.317a3.29 3.29 0 0 1 .124-.135c.78-.799 1.796-.885 3.826-1.056C5.57 2.05 6.527 2 7.5 2c.973 0 1.93.05 2.82.126 2.03.171 3.046.257 3.826 1.056.039.04.088.093.124.135.73.845.73 1.966.73 4.208 0 2.215 0 3.323-.731 4.168a3.317 3.317 0 0 1-.125.135c-.781.799-1.778.882-3.773 1.048A34.73 34.73 0 0 1 7.5 13c-1.008 0-1.98-.05-2.87-.124-1.996-.166-2.993-.25-3.774-1.048a3.318 3.318 0 0 1-.125-.135C0 10.848 0 9.74 0 7.525c0-2.242 0-3.363.73-4.208ZM7.5 3c.94 0 1.868.049 2.736.122 1.044.088 1.72.148 2.236.27.47.111.733.258.959.489.024.025.06.063.082.09.2.23.33.518.405 1.062.08.583.082 1.343.082 2.492 0 1.135-.002 1.885-.082 2.46-.074.536-.204.821-.405 1.054a2.335 2.335 0 0 1-.083.09c-.23.234-.49.379-.948.487-.507.12-1.168.178-2.194.264-.869.072-1.812.12-2.788.12-.976 0-1.92-.048-2.788-.12-1.026-.086-1.687-.143-2.194-.264-.459-.108-.719-.253-.948-.487a2.335 2.335 0 0 1-.083-.09c-.2-.233-.33-.518-.405-1.054C1.002 9.41 1 8.66 1 7.525c0-1.149.002-1.91.082-2.492.075-.544.205-.832.405-1.062.023-.027.058-.065.082-.09.226-.231.489-.378.959-.489.517-.122 1.192-.182 2.236-.27A32.657 32.657 0 0 1 7.5 3Z" fillRule="evenodd"/></svg>;
    }
);
VideoIconIcon.displayName = 'VideoIconIcon';
VideoIconIcon.propTypes = {iconType: PropTypes.string};
VideoIconIcon.defaultProps = {iconType: 'Components'};

export default VideoIconIcon;