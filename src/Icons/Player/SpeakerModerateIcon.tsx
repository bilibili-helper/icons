import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const SpeakerModerateIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Player', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M7.724 1.053A.5.5 0 0 0 7.2 1.1L3.333 4H1.5A1.5 1.5 0 0 0 0 5.5v4A1.5 1.5 0 0 0 1.5 11h1.833L7.2 13.9a.5.5 0 0 0 .8-.4v-12a.5.5 0 0 0-.276-.447ZM7 2.5v10l-3.2-2.4a.5.5 0 0 0-.3-.1h-2a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 0 .3-.1L7 2.5Zm3.278 1.348a.4.4 0 0 0-.111.555 5.607 5.607 0 0 1 0 6.194.4.4 0 0 0 .666.443 6.407 6.407 0 0 0 0-7.08.4.4 0 0 0-.555-.112Z" fillRule="evenodd"/></svg>;
    }
);
SpeakerModerateIconIcon.displayName = 'SpeakerModerateIconIcon';
SpeakerModerateIconIcon.propTypes = {iconType: PropTypes.string};
SpeakerModerateIconIcon.defaultProps = {iconType: 'Player'};

export default SpeakerModerateIconIcon;