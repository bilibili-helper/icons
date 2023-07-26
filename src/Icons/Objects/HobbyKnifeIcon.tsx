import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const HobbyKnifeIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="m12.146 13.854-5.75-5.75A.5.5 0 0 1 6.316 8H5a.5.5 0 0 1-.472-.336l-2.4-6.9A.5.5 0 0 1 2.936.23l5.4 4.9a.5.5 0 0 1 .164.37v.317a.5.5 0 0 1 .104.08l5.75 5.75a.5.5 0 0 1 0 .707l-1.5 1.5a.5.5 0 0 1-.708 0ZM7.457 7.75l5.043 5.043.793-.793L8.25 6.957l-.793.793ZM5.355 7h.938L7.5 5.793V5.72L3.717 2.288 5.355 7Z" fillRule="evenodd"/></svg>;
    }
);
HobbyKnifeIcon.displayName = 'HobbyKnifeIcon';
HobbyKnifeIcon.propTypes = {iconType: PropTypes.string};
HobbyKnifeIcon.defaultProps = {iconType: 'Objects'};