import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const Cross2Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Abstract', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M11.782 3.218a.575.575 0 0 0-.814 0L7.5 6.687 4.032 3.218a.575.575 0 1 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.468 3.469a.575.575 0 0 0 .814-.814L8.313 7.5l3.469-3.468a.575.575 0 0 0 0-.814Z"/></svg>;
    }
);
Cross2Icon.displayName = 'Cross2Icon';
Cross2Icon.propTypes = {iconType: PropTypes.string};
Cross2Icon.defaultProps = {iconType: 'Abstract'};

export default Cross2Icon;