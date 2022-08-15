import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const ContainerIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Components', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M1.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM5 14h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1Zm5-1V2H5v11h5Zm4-11.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM1.5 4a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM14 3.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM1.5 6a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM14 5.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM1.5 8a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM14 7.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM1.5 10a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM14 9.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM1.5 12a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm12.5-.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM1.5 14a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm12.5-.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Z" fillRule="evenodd"/></svg>;
    }
);
ContainerIcon.displayName = 'ContainerIcon';
ContainerIcon.propTypes = {iconType: PropTypes.string};
ContainerIcon.defaultProps = {iconType: 'Components'};

export default ContainerIcon;