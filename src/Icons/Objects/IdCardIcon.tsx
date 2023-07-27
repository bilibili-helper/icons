import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const IdCardIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M2.25 5h3.5a.25.25 0 0 1 .25.25v4.5a.25.25 0 0 1-.25.25h-3.5A.25.25 0 0 1 2 9.75v-4.5A.25.25 0 0 1 2.25 5ZM7 7.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5ZM7.5 9h5a.5.5 0 0 1 0 1h-5a.5.5 0 1 1 0-1ZM7 5.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Zm8 5.5a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v7Zm-1-7H1v7h13V4Z" fillRule="evenodd"/></svg>;
    }
);
IdCardIcon.displayName = 'IdCardIcon';
IdCardIcon.propTypes = {iconType: PropTypes.string};
IdCardIcon.defaultProps = {iconType: 'Objects'};