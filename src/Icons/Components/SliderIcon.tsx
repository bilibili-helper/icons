import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const SliderIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Components', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M8.5 10.25c-1.348 0-2.47-.97-2.705-2.25H.5a.5.5 0 0 1 0-1h5.295a2.751 2.751 0 0 1 5.41 0H14.5a.5.5 0 1 1 0 1h-3.295A2.751 2.751 0 0 1 8.5 10.25Zm0-.95a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6Z" fillRule="evenodd"/></svg>;
    }
);
SliderIcon.displayName = 'SliderIcon';
SliderIcon.propTypes = {iconType: PropTypes.string};
SliderIcon.defaultProps = {iconType: 'Components'};