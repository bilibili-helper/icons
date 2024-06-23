import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const SimpleVideoCardIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Components', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M6.185 1h7.13a.435.435 0 1 1 0 .87h-7.13a.435.435 0 1 1 0-.87Zm0 2h5.352a.435.435 0 1 1 0 .87H6.185a.435.435 0 1 1 0-.87ZM4.25 1a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-.5.5h-2.5a.5.5 0 0 1-.5-.5V1.5a.5.5 0 0 1 .5-.5h2.5Zm-.625.875h-1.25a.25.25 0 0 0-.25.25v1.25c0 .138.112.25.25.25h1.25a.25.25 0 0 0 .25-.25v-1.25a.25.25 0 0 0-.25-.25Zm2.56 3.875h7.13a.435.435 0 1 1 0 .87h-7.13a.435.435 0 1 1 0-.87Zm0 2h5.352a.435.435 0 1 1 0 .87H6.185a.435.435 0 1 1 0-.87Zm-1.935-2a.5.5 0 0 1 .5.5v2.5a.5.5 0 0 1-.5.5h-2.5a.5.5 0 0 1-.5-.5v-2.5a.5.5 0 0 1 .5-.5h2.5Zm-.625.875h-1.25a.25.25 0 0 0-.25.25v1.25c0 .138.112.25.25.25h1.25a.25.25 0 0 0 .25-.25v-1.25a.25.25 0 0 0-.25-.25Zm2.56 3.875h7.13a.435.435 0 1 1 0 .87h-7.13a.435.435 0 1 1 0-.87Zm0 2h5.352a.435.435 0 1 1 0 .87H6.185a.435.435 0 1 1 0-.87Zm-1.935-2a.5.5 0 0 1 .5.5v2.5a.5.5 0 0 1-.5.5h-2.5a.5.5 0 0 1-.5-.5V11a.5.5 0 0 1 .5-.5h2.5Zm-.625.875h-1.25a.25.25 0 0 0-.25.25v1.25c0 .138.112.25.25.25h1.25a.25.25 0 0 0 .25-.25v-1.25a.25.25 0 0 0-.25-.25Z" fillRule="evenodd"/></svg>;
    }
);
SimpleVideoCardIcon.displayName = 'SimpleVideoCardIcon';
SimpleVideoCardIcon.propTypes = {iconType: PropTypes.string};
SimpleVideoCardIcon.defaultProps = {iconType: 'Components'};