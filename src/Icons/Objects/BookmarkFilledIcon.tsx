import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const BookmarkFilledIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M3 2.5v11a.5.5 0 0 0 .765.424L7.5 11.59l3.735 2.334A.5.5 0 0 0 12 13.5v-11a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5Z"/></svg>;
    }
);
BookmarkFilledIconIcon.displayName = 'BookmarkFilledIconIcon';
BookmarkFilledIconIcon.propTypes = {iconType: PropTypes.string};
BookmarkFilledIconIcon.defaultProps = {iconType: 'Objects'};

export default BookmarkFilledIconIcon;