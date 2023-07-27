import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const ViewGridIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Abstract', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M0 2.5v10A1.5 1.5 0 0 0 1.5 14h12a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-12A1.5 1.5 0 0 0 0 2.5ZM1.5 2a.5.5 0 0 0-.5.5V7h6V2H1.5ZM8 7h6V2.5a.5.5 0 0 0-.5-.5H8v5ZM1 8v4.5a.5.5 0 0 0 .5.5H7V8H1Zm7 0h6v4.5a.5.5 0 0 1-.5.5H8V8Z" fillRule="evenodd"/></svg>;
    }
);
ViewGridIcon.displayName = 'ViewGridIcon';
ViewGridIcon.propTypes = {iconType: PropTypes.string};
ViewGridIcon.defaultProps = {iconType: 'Abstract'};