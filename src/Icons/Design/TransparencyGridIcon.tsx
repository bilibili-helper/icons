import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const TransparencyGridIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Design', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M3 0v3H0V0h3Zm0 3v3H0v3h3v3H0v3h3v-3h3v3h3v-3h3v3h3v-3h-3V9h3V6h-3V3h3V0h-3v3H9V0H6v3H3Zm3 0h3v3H6V3ZM3 9V6h3v3H3Zm6-3h3v3H9V6ZM6 9v3h3V9H6Z" fillRule="evenodd" opacity=".25"/></svg>;
    }
);
TransparencyGridIcon.displayName = 'TransparencyGridIcon';
TransparencyGridIcon.propTypes = {iconType: PropTypes.string};
TransparencyGridIcon.defaultProps = {iconType: 'Design'};