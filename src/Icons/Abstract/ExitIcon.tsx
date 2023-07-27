import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const ExitIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Abstract', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M2 2v11a1 1 0 0 0 1 1h7.5a.5.5 0 0 0 0-1H3V2h7.5a.5.5 0 0 0 0-1H3a1 1 0 0 0-1 1Zm9.896 2.896a.5.5 0 0 0 0 .708L13.293 7H6.5a.5.5 0 0 0 0 1h6.793l-1.397 1.396a.5.5 0 0 0 .708.708l2.25-2.25a.5.5 0 0 0 0-.708l-2.25-2.25a.5.5 0 0 0-.708 0Z" fillRule="evenodd"/></svg>;
    }
);
ExitIcon.displayName = 'ExitIcon';
ExitIcon.propTypes = {iconType: PropTypes.string};
ExitIcon.defaultProps = {iconType: 'Abstract'};