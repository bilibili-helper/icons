import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const PauseIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Player', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M5.5 2.2a.55.55 0 0 0-.55.55v9.5a.55.55 0 1 0 1.1 0v-9.5a.55.55 0 0 0-.55-.55Zm4 0a.55.55 0 0 0-.55.55v9.5a.55.55 0 0 0 1.1 0v-9.5a.55.55 0 0 0-.55-.55Z" fillRule="evenodd"/></svg>;
    }
);
PauseIconIcon.displayName = 'PauseIconIcon';
PauseIconIcon.propTypes = {iconType: PropTypes.string};
PauseIconIcon.defaultProps = {iconType: 'Player'};

export default PauseIconIcon;