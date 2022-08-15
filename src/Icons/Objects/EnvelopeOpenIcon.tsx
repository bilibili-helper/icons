import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const EnvelopeOpenIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="m7.053.165-6.5 3.25A1 1 0 0 0 0 4.309V12a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V4.309a1 1 0 0 0-.553-.894l-6.5-3.25a1 1 0 0 0-.894 0Zm.447.894L1.431 4.093 7.5 7.291l6.069-3.198L7.5 1.06ZM1 12h13V4.884L7.71 8.198a.45.45 0 0 1-.42 0L1 4.884V12Z" fillRule="evenodd"/></svg>;
    }
);
EnvelopeOpenIcon.displayName = 'EnvelopeOpenIcon';
EnvelopeOpenIcon.propTypes = {iconType: PropTypes.string};
EnvelopeOpenIcon.defaultProps = {iconType: 'Objects'};

export default EnvelopeOpenIcon;