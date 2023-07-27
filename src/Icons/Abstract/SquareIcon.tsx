import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const SquareIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Abstract', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M14 1v13H1V1h13ZM2 13h11V2H2v11Z" fillRule="evenodd"/></svg>;
    }
);
SquareIcon.displayName = 'SquareIcon';
SquareIcon.propTypes = {iconType: PropTypes.string};
SquareIcon.defaultProps = {iconType: 'Abstract'};