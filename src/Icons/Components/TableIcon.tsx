import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const TableIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Components', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M2.5 1h10A1.5 1.5 0 0 1 14 2.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 12.5v-10A1.5 1.5 0 0 1 2.5 1Zm10 1a.5.5 0 0 1 .5.5V5H8V2h4.5ZM7 2H2.5a.5.5 0 0 0-.5.5V5h5V2ZM2 9h5V6H2v3Zm11-3v3H8V6h5Zm0 4v2.5a.5.5 0 0 1-.5.5H8v-3h5ZM2 10h5v3H2.5a.5.5 0 0 1-.5-.5V10Z" fillRule="evenodd"/></svg>;
    }
);
TableIcon.displayName = 'TableIcon';
TableIcon.propTypes = {iconType: PropTypes.string};
TableIcon.defaultProps = {iconType: 'Components'};

export default TableIcon;