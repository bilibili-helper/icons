import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const MagicWandIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M13.5.1a.4.4 0 0 0-.4.4v.6h-.6a.4.4 0 0 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6V.5a.4.4 0 0 0-.4-.4Zm-1.646 3.754-1 1a.5.5 0 1 1-.708-.708l1-1a.5.5 0 1 1 .708.708Zm-2 2-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 1 1 .708.708ZM13.9 5.5v.6h.6a.4.4 0 0 1 0 .8h-.6v.6a.4.4 0 1 1-.8 0v-.6h-.6a.4.4 0 0 1 0-.8h.6v-.6a.4.4 0 1 1 .8 0ZM8.5.1a.4.4 0 0 0-.4.4v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 0 0 .8 0v-.6h.6a.4.4 0 1 0 0-.8h-.6V.5a.4.4 0 0 0-.4-.4Z" fillRule="evenodd"/></svg>;
    }
);
MagicWandIcon.displayName = 'MagicWandIcon';
MagicWandIcon.propTypes = {iconType: PropTypes.string};
MagicWandIcon.defaultProps = {iconType: 'Objects'};