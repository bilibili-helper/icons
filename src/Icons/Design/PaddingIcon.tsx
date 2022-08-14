import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const PaddingIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Design', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M8 4.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm-3 6a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM4.5 8a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM5 4.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm5.5 6.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm.5-3.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM10.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM8 10.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM2.857 1h9.286C13.169 1 14 1.831 14 2.857v9.286A1.857 1.857 0 0 1 12.143 14H2.857A1.857 1.857 0 0 1 1 12.143V2.857C1 1.831 1.831 1 2.857 1Zm9.286 1c.473 0 .857.384.857.857v9.286a.857.857 0 0 1-.857.857H2.857A.857.857 0 0 1 2 12.143V2.857C2 2.384 2.384 2 2.857 2h9.286Z" fillRule="evenodd"/></svg>;
    }
);
PaddingIconIcon.displayName = 'PaddingIconIcon';
PaddingIconIcon.propTypes = {iconType: PropTypes.string};
PaddingIconIcon.defaultProps = {iconType: 'Design'};

export default PaddingIconIcon;