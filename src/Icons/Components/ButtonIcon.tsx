import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const ButtonIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Components', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M3.75 7.5a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm3.75-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm2.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM2 4h11a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm11 1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h11Z" fillRule="evenodd"/></svg>;
    }
);
ButtonIconIcon.displayName = 'ButtonIconIcon';
ButtonIconIcon.propTypes = {iconType: PropTypes.string};
ButtonIconIcon.defaultProps = {iconType: 'Components'};

export default ButtonIconIcon;