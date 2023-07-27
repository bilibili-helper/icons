import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const MaskOffIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Design', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M3.875 7.5a3.625 3.625 0 1 0 7.25 0 3.625 3.625 0 0 0-7.25 0ZM7.5 4.875a2.625 2.625 0 1 1 0 5.25 2.625 2.625 0 0 1 0-5.25ZM1 1h13a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm13 1v11H1V2h13Z" fillRule="evenodd"/></svg>;
    }
);
MaskOffIcon.displayName = 'MaskOffIcon';
MaskOffIcon.propTypes = {iconType: PropTypes.string};
MaskOffIcon.defaultProps = {iconType: 'Design'};