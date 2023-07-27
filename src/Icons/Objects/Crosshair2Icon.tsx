import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const Crosshair2Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M8 .5v1.307A5.624 5.624 0 0 1 13.007 7H14.5a.5.5 0 0 1 0 1h-1.511A5.625 5.625 0 0 1 8 12.989V14.5a.5.5 0 0 1-1 0v-1.493A5.624 5.624 0 0 1 1.807 8H.5a.5.5 0 1 1 0-1h1.289A5.624 5.624 0 0 1 7 1.789V.5a.5.5 0 1 1 1 0Zm0 9a.5.5 0 0 0-1 0v2.554A4.675 4.675 0 0 1 2.763 8H5.5a.5.5 0 1 0 0-1H2.742A4.674 4.674 0 0 1 7 2.742V5.5a.5.5 0 1 0 1 0V2.763A4.675 4.675 0 0 1 12.054 7H9.5a.5.5 0 0 0 0 1h2.532A4.675 4.675 0 0 1 8 12.032V9.5Z" fillRule="evenodd"/></svg>;
    }
);
Crosshair2Icon.displayName = 'Crosshair2Icon';
Crosshair2Icon.propTypes = {iconType: PropTypes.string};
Crosshair2Icon.defaultProps = {iconType: 'Objects'};