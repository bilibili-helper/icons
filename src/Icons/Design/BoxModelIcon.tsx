import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const BoxModelIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Design', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M4 4.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0-.5.5ZM5 5h5v5H5V5ZM1 2v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1Zm12 0v11H2V2h11Z" fillRule="evenodd"/></svg>;
    }
);
BoxModelIcon.displayName = 'BoxModelIcon';
BoxModelIcon.propTypes = {iconType: PropTypes.string};
BoxModelIcon.defaultProps = {iconType: 'Design'};

export default BoxModelIcon;