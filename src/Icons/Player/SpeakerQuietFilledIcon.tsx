import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const SpeakerQuietFilledIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Player', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M7.724 1.053A.5.5 0 0 0 7.2 1.1L3.333 4H1.5A1.5 1.5 0 0 0 0 5.5v4A1.5 1.5 0 0 0 1.5 11h1.833L7.2 13.9a.5.5 0 0 0 .8-.4v-12a.5.5 0 0 0-.276-.447Zm1.804 3.891a.4.4 0 0 0-.111.555 3.623 3.623 0 0 1 0 4.002.4.4 0 1 0 .666.443 4.423 4.423 0 0 0 0-4.888.4.4 0 0 0-.555-.112Z" fillRule="evenodd"/></svg>;
    }
);
SpeakerQuietFilledIcon.displayName = 'SpeakerQuietFilledIcon';
SpeakerQuietFilledIcon.propTypes = {iconType: PropTypes.string};
SpeakerQuietFilledIcon.defaultProps = {iconType: 'Player'};