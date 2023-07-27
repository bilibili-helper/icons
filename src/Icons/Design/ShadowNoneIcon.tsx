import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const ShadowNoneIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Design', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><g fillRule="evenodd"><path d="M6.906 13.499c1.956-3.423 1.956-8.329 0-11.752l.434-.248c2.044 3.577 2.044 8.671 0 12.248l-.434-.248Z" opacity=".05"/><path d="M7.405 13.6c1.957-3.482 1.957-8.472 0-11.955l.436-.245c2.043 3.635 2.043 8.811 0 12.445l-.436-.245Z" opacity=".1"/><path d="M7.944 13.63c1.904-3.512 1.905-8.493.004-12.006l.44-.238c1.981 3.662 1.98 8.822-.005 12.482l-.44-.239Z" opacity=".15"/><path d="M8.536 13.552c1.782-3.5 1.783-8.354.001-11.855l.446-.227c1.854 3.644 1.853 8.666-.002 12.309l-.445-.227Z" opacity=".2"/><path d="M9.147 13.419c1.633-3.458 1.635-8.119.006-11.58l.452-.212c1.692 3.595 1.69 8.412-.006 12.005l-.452-.213Z" opacity=".25"/><path d="M9.791 13.188c1.442-3.37 1.443-7.753.003-11.124l.46-.196c1.493 3.496 1.492 8.022-.003 11.517l-.46-.197Z" opacity=".3"/><path d="M10.454 12.869c1.224-3.225 1.225-7.255.004-10.482l.467-.177c1.265 3.341 1.264 7.497-.004 10.836l-.467-.177Z" opacity=".35"/><path d="M11.138 12.422c.979-3.002.98-6.586.003-9.588l.476-.155c1.009 3.103 1.008 6.796-.003 9.897l-.476-.154Z" opacity=".4"/><path d="M11.844 11.791c.704-2.655.705-5.671.003-8.327l.483-.128c.725 2.74.724 5.844-.002 8.583l-.484-.128Z" opacity=".45"/><path d="M12.566 10.875c.41-2.114.41-4.391 0-6.505l.49-.095a17.888 17.888 0 0 1 .001 6.695l-.49-.095Z" opacity=".5"/><path d="M7.623 1A6.623 6.623 0 0 0 2.6 11.94l-.83.83a.5.5 0 1 0 .707.706l.83-.83a6.623 6.623 0 0 0 9.34-9.34l.83-.83a.5.5 0 0 0-.708-.707l-.83.83A6.597 6.597 0 0 0 7.623 1Zm3.642 2.274a5.673 5.673 0 0 0-7.992 7.992l7.992-7.992Zm-7.284 8.698a5.673 5.673 0 0 0 7.991-7.992l-7.991 7.992Z"/></g></svg>;
    }
);
ShadowNoneIcon.displayName = 'ShadowNoneIcon';
ShadowNoneIcon.propTypes = {iconType: PropTypes.string};
ShadowNoneIcon.defaultProps = {iconType: 'Design'};