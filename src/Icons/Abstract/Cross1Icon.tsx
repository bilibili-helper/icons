import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const Cross1Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Abstract', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M12.854 2.146a.5.5 0 0 0-.708 0L7.5 6.793 2.854 2.146a.5.5 0 1 0-.708.708L6.793 7.5l-4.647 4.646a.5.5 0 0 0 .708.708L7.5 8.207l4.646 4.647a.5.5 0 0 0 .708-.708L8.207 7.5l4.647-4.646a.5.5 0 0 0 0-.708Z"/></svg>;
    }
);
Cross1Icon.displayName = 'Cross1Icon';
Cross1Icon.propTypes = {iconType: PropTypes.string};
Cross1Icon.defaultProps = {iconType: 'Abstract'};

export default Cross1Icon;