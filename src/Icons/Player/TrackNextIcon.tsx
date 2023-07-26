import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const TrackNextIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Player', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M12.5 2.2a.55.55 0 0 0-.55.55v4.533a.5.5 0 0 0-.217-.225l-9-4.75A.5.5 0 0 0 2 2.75v9.5a.5.5 0 0 0 .733.442l9-4.75a.5.5 0 0 0 .217-.225v4.533a.55.55 0 0 0 1.1 0v-9.5a.55.55 0 0 0-.55-.55ZM3 3.58l7.429 3.92L3 11.42V3.58Z" fillRule="evenodd"/></svg>;
    }
);
TrackNextIcon.displayName = 'TrackNextIcon';
TrackNextIcon.propTypes = {iconType: PropTypes.string};
TrackNextIcon.defaultProps = {iconType: 'Player'};