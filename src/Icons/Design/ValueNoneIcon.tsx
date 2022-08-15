import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const ValueNoneIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Design', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M.877 7.5c0 1.649.603 3.157 1.6 4.316l-.83.83a.5.5 0 1 0 .707.708l.83-.83a6.623 6.623 0 0 0 9.34-9.34l.83-.83a.5.5 0 0 0-.708-.708l-.83.83A6.623 6.623 0 0 0 .876 7.5ZM7.5 1.827a5.673 5.673 0 0 0-4.35 9.315l7.992-7.991A5.65 5.65 0 0 0 7.5 1.827Zm0 11.346a5.673 5.673 0 0 0 4.35-9.315l-7.992 7.991A5.65 5.65 0 0 0 7.5 13.173Z" fillRule="evenodd"/></svg>;
    }
);
ValueNoneIcon.displayName = 'ValueNoneIcon';
ValueNoneIcon.propTypes = {iconType: PropTypes.string};
ValueNoneIcon.defaultProps = {iconType: 'Design'};

export default ValueNoneIcon;