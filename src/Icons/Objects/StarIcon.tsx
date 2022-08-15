import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const StarIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="m5.334 4.784-4.248.34a.3.3 0 0 0-.171.528L4.15 8.424a.3.3 0 0 1 .097.297l-.989 4.145a.3.3 0 0 0 .448.326l3.637-2.221a.3.3 0 0 1 .312 0l3.637 2.22a.3.3 0 0 0 .448-.325l-.989-4.145a.3.3 0 0 1 .097-.297l3.236-2.772a.3.3 0 0 0-.171-.527l-4.248-.34a.3.3 0 0 1-.253-.185L7.777.666a.3.3 0 0 0-.554 0L5.587 4.6a.3.3 0 0 1-.253.184Zm1.176.2a1.3 1.3 0 0 1-1.096.797l-2.57.206 1.958 1.677a1.3 1.3 0 0 1 .418 1.29l-.598 2.507 2.2-1.344a1.3 1.3 0 0 1 1.356 0l2.2 1.344-.598-2.508a1.3 1.3 0 0 1 .418-1.289l1.958-1.677-2.57-.206a1.3 1.3 0 0 1-1.096-.797l-.99-2.38-.99 2.38Z" fillRule="evenodd"/></svg>;
    }
);
StarIcon.displayName = 'StarIcon';
StarIcon.propTypes = {iconType: PropTypes.string};
StarIcon.defaultProps = {iconType: 'Objects'};

export default StarIcon;