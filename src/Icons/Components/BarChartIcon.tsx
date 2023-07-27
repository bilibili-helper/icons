import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const BarChartIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Components', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M12 1.5v12a.5.5 0 0 1-1 0v-12a.5.5 0 0 1 1 0Zm-2 2v10a.5.5 0 0 1-1 0v-10a.5.5 0 0 1 1 0Zm4 0v10a.5.5 0 0 1-1 0v-10a.5.5 0 0 1 1 0Zm-8 1v9a.5.5 0 0 1-1 0v-9a.5.5 0 0 1 1 0Zm-4 1v8a.5.5 0 0 1-1 0v-8a.5.5 0 0 1 1 0Zm6 0v8a.5.5 0 0 1-1 0v-8a.5.5 0 0 1 1 0Zm-4 2v6a.5.5 0 0 1-1 0v-6a.5.5 0 1 1 1 0Z" fillRule="evenodd"/></svg>;
    }
);
BarChartIcon.displayName = 'BarChartIcon';
BarChartIcon.propTypes = {iconType: PropTypes.string};
BarChartIcon.defaultProps = {iconType: 'Components'};