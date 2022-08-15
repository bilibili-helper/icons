import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const GridIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Components', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M1 2.5v10A1.5 1.5 0 0 0 2.5 14h10a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 12.5 1h-10A1.5 1.5 0 0 0 1 2.5ZM8 2v5h5V2.5a.5.5 0 0 0-.5-.5H8Zm0 6v5h4.5a.5.5 0 0 0 .5-.5V8H8ZM7 2H2.5a.5.5 0 0 0-.5.5V7h5V2ZM2 12.5a.5.5 0 0 0 .5.5H7V8H2v4.5Z" fillRule="evenodd"/></svg>;
    }
);
GridIcon.displayName = 'GridIcon';
GridIcon.propTypes = {iconType: PropTypes.string};
GridIcon.defaultProps = {iconType: 'Components'};

export default GridIcon;