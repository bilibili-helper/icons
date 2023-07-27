import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const Half2Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Abstract', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M.877 7.5a6.623 6.623 0 1 0 13.246 0 6.623 6.623 0 0 0-13.246 0Zm.95 0A5.673 5.673 0 0 0 7.5 13.173V1.827A5.673 5.673 0 0 0 1.827 7.5Z" fillRule="evenodd"/></svg>;
    }
);
Half2Icon.displayName = 'Half2Icon';
Half2Icon.propTypes = {iconType: PropTypes.string};
Half2Icon.defaultProps = {iconType: 'Abstract'};