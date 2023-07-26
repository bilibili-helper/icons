import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const Half1Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Abstract', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M.877 7.5a6.623 6.623 0 1 0 13.246 0 6.623 6.623 0 0 0-13.246 0Zm.95 0A5.673 5.673 0 0 0 7 13.15V1.85A5.673 5.673 0 0 0 1.827 7.5Zm11.346 0A5.673 5.673 0 0 0 8 1.849V13.15a5.673 5.673 0 0 0 5.173-5.65Z" fillRule="evenodd"/></svg>;
    }
);
Half1Icon.displayName = 'Half1Icon';
Half1Icon.propTypes = {iconType: PropTypes.string};
Half1Icon.defaultProps = {iconType: 'Abstract'};