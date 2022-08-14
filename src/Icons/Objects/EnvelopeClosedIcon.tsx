import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const EnvelopeClosedIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M0 3v9a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1Zm14 0v.925a.448.448 0 0 0-.241.07L7.5 7.967 1.241 3.995A.448.448 0 0 0 1 3.925V3h13ZM1 12h13V4.908L7.741 8.88a.45.45 0 0 1-.482 0L1 4.908V12Z" fillRule="evenodd"/></svg>;
    }
);
EnvelopeClosedIconIcon.displayName = 'EnvelopeClosedIconIcon';
EnvelopeClosedIconIcon.propTypes = {iconType: PropTypes.string};
EnvelopeClosedIconIcon.defaultProps = {iconType: 'Objects'};

export default EnvelopeClosedIconIcon;