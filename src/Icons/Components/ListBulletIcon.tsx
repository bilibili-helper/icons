import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const ListBulletIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Components', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M2.25 4.5a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0ZM4.5 4h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1ZM4 7.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 0-1h-9a.5.5 0 0 0-.5.5Zm0 3a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 0-1h-9a.5.5 0 0 0-.5.5ZM1.5 8.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm.75 2.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" fillRule="evenodd"/></svg>;
    }
);
ListBulletIcon.displayName = 'ListBulletIcon';
ListBulletIcon.propTypes = {iconType: PropTypes.string};
ListBulletIcon.defaultProps = {iconType: 'Components'};