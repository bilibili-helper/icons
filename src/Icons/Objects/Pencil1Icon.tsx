import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const Pencil1Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M11.146 1.146 3.715 8.578a1 1 0 0 0-.212.314L2.04 12.303a.5.5 0 0 0 .657.657l3.411-1.462a1 1 0 0 0 .314-.213l7.432-7.431a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708 0Zm.354 1.061L12.793 3.5l-7.078 7.078-1.496.641-.438-.438.64-1.496L11.5 2.207Z" fillRule="evenodd"/></svg>;
    }
);
Pencil1Icon.displayName = 'Pencil1Icon';
Pencil1Icon.propTypes = {iconType: PropTypes.string};
Pencil1Icon.defaultProps = {iconType: 'Objects'};

export default Pencil1Icon;