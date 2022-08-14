import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const StrikethroughIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Typography', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M4.5 2.75a.5.5 0 0 0-.5.5V7.1H2.5a.4.4 0 0 0 0 .8H4v.65a3.5 3.5 0 1 0 7 0V7.9h1.5a.4.4 0 0 0 0-.8H11V3.25a.5.5 0 0 0-1 0V7.1H5V3.25a.5.5 0 0 0-.5-.5Zm.5 5.8a2.5 2.5 0 1 0 5 0V7.9H5v.65Z" fillRule="evenodd"/></svg>;
    }
);
StrikethroughIconIcon.displayName = 'StrikethroughIconIcon';
StrikethroughIconIcon.propTypes = {iconType: PropTypes.string};
StrikethroughIconIcon.defaultProps = {iconType: 'Typography'};

export default StrikethroughIconIcon;