import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const UnderlineIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Typography', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M4.5 2.25a.5.5 0 0 0-.5.5v5.3a3.5 3.5 0 1 0 7 0v-5.3a.5.5 0 0 0-1 0v5.3a2.5 2.5 0 0 1-5 0v-5.3a.5.5 0 0 0-.5-.5ZM3.1 13.5c0 .221.18.4.4.4h8a.4.4 0 1 0 0-.8h-8a.4.4 0 0 0-.4.4Z" fillRule="evenodd"/></svg>;
    }
);
UnderlineIconIcon.displayName = 'UnderlineIconIcon';
UnderlineIconIcon.propTypes = {iconType: PropTypes.string};
UnderlineIconIcon.defaultProps = {iconType: 'Typography'};

export default UnderlineIconIcon;