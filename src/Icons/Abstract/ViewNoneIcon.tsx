import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const ViewNoneIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Abstract', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="m.825 13.88.03-.026c.195.094.414.146.645.146h12a1.5 1.5 0 0 0 1.5-1.5v-10a1.5 1.5 0 0 0-.763-1.307l-.062-.073-.03.026A1.494 1.494 0 0 0 13.5 1h-12A1.5 1.5 0 0 0 0 2.5v10c0 .56.307 1.05.763 1.307l.062.073ZM1.852 13H13.5a.5.5 0 0 0 .5-.5V2.587L1.852 13ZM13.148 2H1.5a.5.5 0 0 0-.5.5v9.913L13.148 2Z" fillRule="evenodd"/></svg>;
    }
);
ViewNoneIconIcon.displayName = 'ViewNoneIconIcon';
ViewNoneIconIcon.propTypes = {iconType: PropTypes.string};
ViewNoneIconIcon.defaultProps = {iconType: 'Abstract'};

export default ViewNoneIconIcon;