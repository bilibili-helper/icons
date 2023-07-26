import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const LightningBoltIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M8.993.582 8.09 6h4.41a.5.5 0 0 1 .4.8l-6 8a.5.5 0 0 1-.893-.382L6.91 9H2.5a.5.5 0 0 1-.4-.8l6-8a.5.5 0 0 1 .893.382ZM7.5 8a.5.5 0 0 1 .493.582L7.33 12.56 11.5 7h-4a.5.5 0 0 1-.493-.582L7.67 2.44 3.5 8h4Z" fillRule="evenodd"/></svg>;
    }
);
LightningBoltIcon.displayName = 'LightningBoltIcon';
LightningBoltIcon.propTypes = {iconType: PropTypes.string};
LightningBoltIcon.defaultProps = {iconType: 'Objects'};