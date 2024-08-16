import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const FlaskIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><g fill="none" fillRule="evenodd"><path d="M5.727.641v2.413c0 1.95.002 1.953-.841 3.536a520.886 520.886 0 0 1-3.226 5.905c-.637 1.138.128 2.048 1.276 2.048h9.128c1.148 0 1.913-.91 1.276-2.048-.45-.804-2.383-4.322-3.226-5.905-.843-1.583-.841-1.586-.841-3.536V.64" stroke="#000" strokeLinecap="round" strokeLinejoin="round"/><path d="M4.107 7.85c1.075-.571 2.228-.542 3.393.055 1.165.596 2.053.569 3.175-.028" stroke="#000" strokeLinejoin="round"/><path stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="M4.802.5h5.396"/><circle fill="#000" cx="5.5" cy="9.719" r="1"/><circle fill="#000" cx="8.162" cy="10.881" r="1"/><circle fill="#000" cx="5" cy="12.326" r="1"/></g></svg>;
    }
);
FlaskIcon.displayName = 'FlaskIcon';
FlaskIcon.propTypes = {iconType: PropTypes.string};
FlaskIcon.defaultProps = {iconType: 'Objects'};