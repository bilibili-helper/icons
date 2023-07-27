import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const OpenInNewWindowIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Abstract', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M13 12V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3.5a.5.5 0 0 0 1 0V3h9v9H8.5a.5.5 0 0 0 0 1H12a1 1 0 0 0 1-1ZM9 6.5v3a.5.5 0 0 1-1 0V7.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 7H5.5a.5.5 0 1 1 0-1h3a.499.499 0 0 1 .5.497" fillRule="evenodd"/></svg>;
    }
);
OpenInNewWindowIcon.displayName = 'OpenInNewWindowIcon';
OpenInNewWindowIcon.propTypes = {iconType: PropTypes.string};
OpenInNewWindowIcon.defaultProps = {iconType: 'Abstract'};