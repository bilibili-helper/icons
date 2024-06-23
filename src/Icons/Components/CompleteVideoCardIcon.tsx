import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const CompleteVideoCardIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Components', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M13.5 1a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-12a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h12Zm-.75 1H2.25a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25ZM1.5 6h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1 0-1Zm12 2a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-12a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h12Zm-.75 1H2.25a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25ZM1.5 13h8a.5.5 0 1 1 0 1h-8a.5.5 0 1 1 0-1Z" fillRule="evenodd"/></svg>;
    }
);
CompleteVideoCardIcon.displayName = 'CompleteVideoCardIcon';
CompleteVideoCardIcon.propTypes = {iconType: PropTypes.string};
CompleteVideoCardIcon.defaultProps = {iconType: 'Components'};