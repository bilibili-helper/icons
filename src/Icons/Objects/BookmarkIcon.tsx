import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const BookmarkIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M3.5 2h8a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.765.424L7.5 11.59l-3.735 2.334A.5.5 0 0 1 3 13.5v-11a.5.5 0 0 1 .5-.5ZM4 12.598l2.97-1.856a1 1 0 0 1 1.06 0L11 12.598V3H4v9.598Z" fillRule="evenodd"/></svg>;
    }
);
BookmarkIcon.displayName = 'BookmarkIcon';
BookmarkIcon.propTypes = {iconType: PropTypes.string};
BookmarkIcon.defaultProps = {iconType: 'Objects'};