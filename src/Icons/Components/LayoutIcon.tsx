import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const LayoutIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Components', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M1 2.5v10A1.5 1.5 0 0 0 2.5 14h10a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 12.5 1h-10A1.5 1.5 0 0 0 1 2.5ZM6 2v11h3V2H6Zm4 11h2.5a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H10v11ZM5 2v11H2.5a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5H5Z" fillRule="evenodd"/></svg>;
    }
);
LayoutIconIcon.displayName = 'LayoutIconIcon';
LayoutIconIcon.propTypes = {iconType: PropTypes.string};
LayoutIconIcon.defaultProps = {iconType: 'Components'};

export default LayoutIconIcon;