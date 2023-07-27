import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const SewingPinIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M10 3.5a2.5 2.5 0 1 0-3 2.45v7.55a.5.5 0 1 0 1 0V5.95a2.5 2.5 0 0 0 2-2.45ZM7.5 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" fillRule="evenodd"/></svg>;
    }
);
SewingPinIcon.displayName = 'SewingPinIcon';
SewingPinIcon.propTypes = {iconType: PropTypes.string};
SewingPinIcon.defaultProps = {iconType: 'Objects'};