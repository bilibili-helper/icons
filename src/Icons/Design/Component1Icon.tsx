import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const Component1Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Design', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="m4.671 3.853 2.475 2.475a.5.5 0 0 0 .707 0l2.475-2.475a.5.5 0 0 0 0-.707L7.853.671a.5.5 0 0 0-.707 0L4.671 3.146a.5.5 0 0 0 0 .707Zm1.06-.353L7.5 1.732 9.267 3.5 7.5 5.268 5.732 3.5Zm2.94 4.353 2.475 2.475a.5.5 0 0 0 .707 0l2.475-2.475a.5.5 0 0 0 0-.707l-2.475-2.475a.5.5 0 0 0-.707 0L8.671 7.146a.5.5 0 0 0 0 .707Zm1.06-.353L11.5 5.732 13.267 7.5 11.5 9.268 9.732 7.5Zm-5.06 3.646 2.475-2.475a.5.5 0 0 1 .707 0l2.475 2.475a.5.5 0 0 1 0 .707l-2.475 2.475a.5.5 0 0 1-.707 0l-2.475-2.475a.5.5 0 0 1 0-.707ZM7.5 13.268 9.267 11.5 7.5 9.732 5.732 11.5 7.5 13.268ZM.67 7.854l2.475 2.474a.5.5 0 0 0 .707 0l2.475-2.474a.5.5 0 0 0 0-.708L3.853 4.672a.5.5 0 0 0-.707 0L.671 7.146a.5.5 0 0 0 0 .708ZM1.73 7.5 3.5 5.732 5.267 7.5 3.5 9.268 1.732 7.5Z" fillRule="evenodd"/></svg>;
    }
);
Component1Icon.displayName = 'Component1Icon';
Component1Icon.propTypes = {iconType: PropTypes.string};
Component1Icon.defaultProps = {iconType: 'Design'};