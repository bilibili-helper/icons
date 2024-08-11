import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const EnterArrowIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Arrows', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M12.104 3.45H8.153a.45.45 0 0 0 0 .9h3.276c.124 0 .226.101.226.225v3.35a.226.226 0 0 1-.226.225H3.982l1.732-1.732a.449.449 0 1 0-.636-.636l-2.5 2.5a.449.449 0 0 0 0 .636l2.5 2.5a.449.449 0 1 0 .636-.636L3.982 9.05h8.122a.45.45 0 0 0 .45-.451V3.9a.45.45 0 0 0-.45-.45" fillRule="evenodd"/></svg>;
    }
);
EnterArrowIcon.displayName = 'EnterArrowIcon';
EnterArrowIcon.propTypes = {iconType: PropTypes.string};
EnterArrowIcon.defaultProps = {iconType: 'Arrows'};