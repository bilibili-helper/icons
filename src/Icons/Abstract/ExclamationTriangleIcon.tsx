import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const ExclamationTriangleIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Abstract', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M7.5 3.787c.382 0 .688.317.673.7l-.154 4a.52.52 0 0 1-1.038 0l-.154-4a.674.674 0 0 1 .673-.7Zm0 7.439a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM6.555.609.161 11.337A1.1 1.1 0 0 0 1.106 13h12.788a1.1 1.1 0 0 0 .945-1.663L8.445.609a1.1 1.1 0 0 0-1.89 0Zm1.03.512 6.395 10.728a.1.1 0 0 1-.086.151H1.106a.1.1 0 0 1-.086-.151L7.414 1.12a.1.1 0 0 1 .172 0Z" fillRule="evenodd"/></svg>;
    }
);
ExclamationTriangleIcon.displayName = 'ExclamationTriangleIcon';
ExclamationTriangleIcon.propTypes = {iconType: PropTypes.string};
ExclamationTriangleIcon.defaultProps = {iconType: 'Abstract'};

export default ExclamationTriangleIcon;