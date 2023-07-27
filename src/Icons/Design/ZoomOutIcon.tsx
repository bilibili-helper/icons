import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const ZoomOutIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Design', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M4.25 6.5a.5.5 0 0 0 .5.5h3.5a.5.5 0 0 0 0-1h-3.5a.5.5 0 0 0-.5.5Zm5.059 3.516 2.837 2.838a.5.5 0 0 0 .708-.708L10.016 9.31a4.5 4.5 0 1 0-.707.707ZM10 6.5a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0Z" fillRule="evenodd"/></svg>;
    }
);
ZoomOutIcon.displayName = 'ZoomOutIcon';
ZoomOutIcon.propTypes = {iconType: PropTypes.string};
ZoomOutIcon.defaultProps = {iconType: 'Design'};