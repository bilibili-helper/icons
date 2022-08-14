import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const LoopIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Player', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M3.354 1.146a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 1 0 .708-.708L2.207 4H9.5A3.5 3.5 0 0 1 13 7.5a.5.5 0 0 0 1 0A4.5 4.5 0 0 0 9.5 3H2.207l1.147-1.146a.5.5 0 0 0 0-.708ZM1.5 7a.5.5 0 0 0-.5.5A4.5 4.5 0 0 0 5.5 12h7.293l-1.147 1.146a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708.708L12.793 11H5.5A3.5 3.5 0 0 1 2 7.5a.5.5 0 0 0-.5-.5Z" fillRule="evenodd"/></svg>;
    }
);
LoopIconIcon.displayName = 'LoopIconIcon';
LoopIconIcon.propTypes = {iconType: PropTypes.string};
LoopIconIcon.defaultProps = {iconType: 'Player'};

export default LoopIconIcon;