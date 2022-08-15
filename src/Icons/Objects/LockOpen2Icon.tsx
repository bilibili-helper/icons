import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const LockOpen2Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M9.642 1.686c.395-.421 1.001-.686 1.86-.686.946 0 1.582.306 1.97.806.331.427.528 1.037.528 1.827h1c0-.95-.237-1.794-.738-2.44C13.64.39 12.674 0 11.502 0c-1.073 0-1.967.338-2.59 1.002C8.294 1.662 8 2.582 8 3.636V6H1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9V3.636c0-.876.242-1.524.642-1.95ZM10 7v6H1V7h9Z" fillRule="evenodd"/></svg>;
    }
);
LockOpen2Icon.displayName = 'LockOpen2Icon';
LockOpen2Icon.propTypes = {iconType: PropTypes.string};
LockOpen2Icon.defaultProps = {iconType: 'Objects'};

export default LockOpen2Icon;