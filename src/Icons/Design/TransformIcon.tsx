import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const TransformIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Design', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M6 5.1h1a.9.9 0 0 1 .9.9v1a.91.91 0 0 1-.006.106A.91.91 0 0 1 8 7.1h1a.9.9 0 0 1 .9.9v1a.9.9 0 0 1-.9.9H8a.9.9 0 0 1-.9-.9V8a.91.91 0 0 1 .006-.106A.91.91 0 0 1 7 7.9H6a.9.9 0 0 1-.9-.9V6a.9.9 0 0 1 .9-.9ZM6 7h1V6H6v1Zm3 1v1H8V8h1ZM1.75.85h1.5a.9.9 0 0 1 .9.9v.3h6.7v-.3a.9.9 0 0 1 .9-.9h1.5a.9.9 0 0 1 .9.9v1.5a.9.9 0 0 1-.9.9h-.3v6.7h.3a.9.9 0 0 1 .9.9v1.5a.9.9 0 0 1-.9.9h-1.5a.9.9 0 0 1-.9-.9v-.3h-6.7v.3a.9.9 0 0 1-.9.9h-1.5a.9.9 0 0 1-.9-.9v-1.5a.9.9 0 0 1 .9-.9h.3v-6.7h-.3a.9.9 0 0 1-.9-.9v-1.5a.9.9 0 0 1 .9-.9Zm1.2 10h.3a.9.9 0 0 1 .9.9v.3h6.7v-.3a.9.9 0 0 1 .9-.9h.3v-6.7h-.3a.9.9 0 0 1-.9-.9v-.3h-6.7v.3a.9.9 0 0 1-.9.9h-.3v6.7Zm-1.2-7.6h1.5v-1.5h-1.5v1.5Zm0 10h1.5v-1.5h-1.5v1.5Zm11.5-11.5v1.5h-1.5v-1.5h1.5Zm-1.5 11.5h1.5v-1.5h-1.5v1.5Z" fillRule="evenodd"/></svg>;
    }
);
TransformIcon.displayName = 'TransformIcon';
TransformIcon.propTypes = {iconType: PropTypes.string};
TransformIcon.defaultProps = {iconType: 'Design'};

export default TransformIcon;