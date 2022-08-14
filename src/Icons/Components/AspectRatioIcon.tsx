import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const AspectRatioIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Components', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M8 3.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM7.5 6a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM8 7.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm1.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm2.5-.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM2.5 1h10A1.5 1.5 0 0 1 14 2.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 12.5v-10A1.5 1.5 0 0 1 2.5 1Zm10 1a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h10Z" fillRule="evenodd"/></svg>;
    }
);
AspectRatioIconIcon.displayName = 'AspectRatioIconIcon';
AspectRatioIconIcon.propTypes = {iconType: PropTypes.string};
AspectRatioIconIcon.defaultProps = {iconType: 'Components'};

export default AspectRatioIconIcon;