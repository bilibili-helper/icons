import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const MobileIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M5.65 12c0 .193.157.35.35.35h3a.35.35 0 0 0 0-.7H6a.35.35 0 0 0-.35.35ZM3 2.5v10A1.5 1.5 0 0 0 4.5 14h6a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 10.5 1h-6A1.5 1.5 0 0 0 3 2.5ZM4.5 2h6a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5Z" fillRule="evenodd"/></svg>;
    }
);
MobileIcon.displayName = 'MobileIcon';
MobileIcon.propTypes = {iconType: PropTypes.string};
MobileIcon.defaultProps = {iconType: 'Objects'};