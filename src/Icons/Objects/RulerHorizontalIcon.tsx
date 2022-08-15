import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const RulerHorizontalIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><g fill="none" fillRule="evenodd"><path d="M0 0h15v15H0V0Z"/><path d="M0 4.5v6a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5ZM1 5h1.075v2.5a.425.425 0 0 0 .85 0V5h1.15v1.5a.425.425 0 0 0 .85 0V5h1.15v1.5a.425.425 0 0 0 .85 0V5h1.15v2.5a.425.425 0 0 0 .85 0V5h1.15v1.5a.425.425 0 0 0 .85 0V5h1.15v1.5a.425.425 0 0 0 .85 0V5H14v5H1V5Z" fill="#000"/></g></svg>;
    }
);
RulerHorizontalIcon.displayName = 'RulerHorizontalIcon';
RulerHorizontalIcon.propTypes = {iconType: PropTypes.string};
RulerHorizontalIcon.defaultProps = {iconType: 'Objects'};

export default RulerHorizontalIcon;