import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const PlusIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Abstract', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M7.5 2.25a.5.5 0 0 0-.5.5V7H2.75a.5.5 0 1 0 0 1H7v4.25a.5.5 0 0 0 1 0V8h4.25a.5.5 0 0 0 0-1H8V2.75a.5.5 0 0 0-.5-.5Z"/></svg>;
    }
);
PlusIconIcon.displayName = 'PlusIconIcon';
PlusIconIcon.propTypes = {iconType: PropTypes.string};
PlusIconIcon.defaultProps = {iconType: 'Abstract'};

export default PlusIconIcon;