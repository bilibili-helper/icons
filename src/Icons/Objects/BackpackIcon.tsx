import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const BackpackIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M6 0h3a1 1 0 0 1 1 1v1h4a1 1 0 0 1 1 1v3c0 .889-.387 1.687-1 2.236V11.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 11.5V8.236A2.993 2.993 0 0 1 0 6V3a1 1 0 0 1 1-1h4V1a1 1 0 0 1 1-1Zm3 2H6V1h3v1Zm5 1v3a1.996 1.996 0 0 1-2 2H8v-.5a.5.5 0 1 0-1 0V8H3a1.996 1.996 0 0 1-2-2V3h13ZM3 9c-.35 0-.687-.06-1-.17v2.67a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8.83c-.313.11-.65.17-1 .17H8v.5a.5.5 0 0 1-1 0V9H3Z" fillRule="evenodd"/></svg>;
    }
);
BackpackIcon.displayName = 'BackpackIcon';
BackpackIcon.propTypes = {iconType: PropTypes.string};
BackpackIcon.defaultProps = {iconType: 'Objects'};