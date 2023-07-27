import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const ShadowIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Design', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><g fillRule="evenodd"><path d="m6.783 1.624.434-.248c2.044 3.577 2.044 8.671 0 12.248l-.434-.248c1.956-3.423 1.956-8.329 0-11.752Z" opacity=".05"/><path d="m7.282 1.522.436-.245c2.043 3.635 2.043 8.811 0 12.445l-.436-.245c1.957-3.482 1.957-8.472 0-11.955Z" opacity=".1"/><path d="m7.825 1.5.44-.237c1.981 3.662 1.98 8.822-.004 12.482l-.44-.239c1.904-3.51 1.905-8.492.004-12.005Z" opacity=".15"/><path d="m8.414 1.574.446-.227c1.854 3.644 1.853 8.666-.002 12.309l-.445-.227c1.782-3.5 1.783-8.354.001-11.855Z" opacity=".2"/><path d="m9.03 1.717.452-.213c1.692 3.595 1.69 8.412-.005 12.005l-.453-.213c1.633-3.458 1.635-8.119.006-11.58Z" opacity=".25"/><path d="m9.67 1.941.46-.196c1.494 3.496 1.493 8.022-.002 11.517l-.46-.196c1.442-3.37 1.443-7.754.003-11.125Z" opacity=".3"/><path d="m10.335 2.264.467-.177c1.265 3.341 1.264 7.497-.004 10.836l-.467-.177c1.224-3.225 1.225-7.255.004-10.482Z" opacity=".35"/><path d="m11.018 2.71.476-.154c1.009 3.103 1.008 6.796-.003 9.898l-.475-.155c.978-3.002.979-6.586.002-9.588Z" opacity=".4"/><path d="m11.724 3.341.483-.128c.725 2.74.724 5.844-.002 8.583l-.484-.128c.704-2.655.705-5.671.003-8.327Z" opacity=".45"/><path d="m12.443 4.247.49-.095a17.886 17.886 0 0 1 .001 6.695l-.49-.095a17.418 17.418 0 0 0-.001-6.505Z" opacity=".5"/><path d="M7.5.877a6.623 6.623 0 1 1 0 13.246A6.623 6.623 0 0 1 7.5.877ZM1.827 7.5a5.673 5.673 0 1 0 11.346 0 5.673 5.673 0 0 0-11.346 0Z"/></g></svg>;
    }
);
ShadowIcon.displayName = 'ShadowIcon';
ShadowIcon.propTypes = {iconType: PropTypes.string};
ShadowIcon.defaultProps = {iconType: 'Design'};