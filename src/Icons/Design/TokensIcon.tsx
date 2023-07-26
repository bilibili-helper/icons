import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const TokensIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Design', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M2 4.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0ZM4.5 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM8 4.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0ZM10.5 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-6 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 10.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm5 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0ZM10.5 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" fillRule="evenodd"/></svg>;
    }
);
TokensIcon.displayName = 'TokensIcon';
TokensIcon.propTypes = {iconType: PropTypes.string};
TokensIcon.defaultProps = {iconType: 'Design'};