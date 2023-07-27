import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const CardStackIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M1 9.5v-6A1.5 1.5 0 0 1 2.5 2h10A1.5 1.5 0 0 1 14 3.5v6a1.5 1.5 0 0 1-1 1.415v.585a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 11.5v-.585A1.5 1.5 0 0 1 1 9.5ZM2.5 3h10a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5Zm9.5 8.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5V11h9v.5Z" fillRule="evenodd"/></svg>;
    }
);
CardStackIcon.displayName = 'CardStackIcon';
CardStackIcon.propTypes = {iconType: PropTypes.string};
CardStackIcon.defaultProps = {iconType: 'Objects'};