import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const SpeakerOffFilledIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Player', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M8 1.5v12a.5.5 0 0 1-.8.4L3.333 11H1.5A1.5 1.5 0 0 1 0 9.5v-4A1.5 1.5 0 0 1 1.5 4h1.833L7.2 1.1a.5.5 0 0 1 .8.4Zm6.854 4.354L13.207 7.5l1.647 1.646a.5.5 0 1 1-.708.708L12.5 8.207l-1.646 1.647a.5.5 0 0 1-.708-.708L11.793 7.5l-1.647-1.646a.5.5 0 1 1 .708-.708L12.5 6.793l1.646-1.647a.5.5 0 0 1 .708.708Z" fillRule="evenodd"/></svg>;
    }
);
SpeakerOffFilledIconIcon.displayName = 'SpeakerOffFilledIconIcon';
SpeakerOffFilledIconIcon.propTypes = {iconType: PropTypes.string};
SpeakerOffFilledIconIcon.defaultProps = {iconType: 'Player'};

export default SpeakerOffFilledIconIcon;