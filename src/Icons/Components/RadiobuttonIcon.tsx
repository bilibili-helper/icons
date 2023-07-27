import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const RadiobuttonIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Components', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M9.5 7.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm-8.623 0a6.623 6.623 0 1 0 13.246 0 6.623 6.623 0 0 0-13.246 0ZM7.5 1.827a5.673 5.673 0 1 1 0 11.346 5.673 5.673 0 0 1 0-11.346Z" fillRule="evenodd"/></svg>;
    }
);
RadiobuttonIcon.displayName = 'RadiobuttonIcon';
RadiobuttonIcon.propTypes = {iconType: PropTypes.string};
RadiobuttonIcon.defaultProps = {iconType: 'Components'};