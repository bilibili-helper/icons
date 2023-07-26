import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const ColumnsIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Design', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M2.15 1H.85v13h1.3V1Zm4 0h-1.3v13h1.3V1Zm4 13h-1.3V1h1.3v13Zm4-13h-1.3v13h1.3V1Z" fillRule="evenodd"/></svg>;
    }
);
ColumnsIcon.displayName = 'ColumnsIcon';
ColumnsIcon.propTypes = {iconType: PropTypes.string};
ColumnsIcon.defaultProps = {iconType: 'Design'};