import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const ViewHorizontalIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Abstract', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M1.5 1h12A1.5 1.5 0 0 1 15 2.5v10a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 12.5v-10A1.5 1.5 0 0 1 1.5 1Zm12 1a.5.5 0 0 1 .5.5V7H1V2.5a.5.5 0 0 1 .5-.5h12ZM1 12.5a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V8H1v4.5Z" fillRule="evenodd"/></svg>;
    }
);
ViewHorizontalIcon.displayName = 'ViewHorizontalIcon';
ViewHorizontalIcon.propTypes = {iconType: PropTypes.string};
ViewHorizontalIcon.defaultProps = {iconType: 'Abstract'};

export default ViewHorizontalIcon;