import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const SpeakerLoudFilledIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Player', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M7.75 1.5v12a.5.5 0 0 1-.807.395L3.221 11H1.5A1.5 1.5 0 0 1 0 9.5v-4A1.5 1.5 0 0 1 1.5 4h1.721l3.722-2.895a.5.5 0 0 1 .807.395Zm3.083 2.46a6.407 6.407 0 0 1 0 7.08.4.4 0 1 1-.666-.443 5.607 5.607 0 0 0 0-6.194.4.4 0 1 1 .666-.444Zm1.282-2.576a.4.4 0 0 0-.047.564 8.602 8.602 0 0 1 0 11.104.4.4 0 0 0 .61.518 9.402 9.402 0 0 0 0-12.14.4.4 0 0 0-.563-.046Z" fillRule="evenodd"/></svg>;
    }
);
SpeakerLoudFilledIcon.displayName = 'SpeakerLoudFilledIcon';
SpeakerLoudFilledIcon.propTypes = {iconType: PropTypes.string};
SpeakerLoudFilledIcon.defaultProps = {iconType: 'Player'};

export default SpeakerLoudFilledIcon;