import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const ExternalLinkIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Abstract', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M2 3v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V8.5a.5.5 0 0 0-1 0V12H3V3h3.5a.5.5 0 1 0 0-1H3a1 1 0 0 0-1 1Zm10.962-.691a.499.499 0 0 1 .038.188V5.5a.5.5 0 0 1-1 0V3.707L6.854 8.854a.5.5 0 1 1-.708-.708L11.293 3H9.5a.5.5 0 1 1 0-1h3a.499.499 0 0 1 .462.309Z" fillRule="evenodd"/></svg>;
    }
);
ExternalLinkIcon.displayName = 'ExternalLinkIcon';
ExternalLinkIcon.propTypes = {iconType: PropTypes.string};
ExternalLinkIcon.defaultProps = {iconType: 'Abstract'};