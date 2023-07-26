import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const QuestionMarkIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Abstract', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M7.5 1.925c1.243 0 2.425.986 2.425 2.175 0 1.099-.557 1.614-1.306 2.279l-.031.027C7.845 7.065 6.925 7.88 6.925 9.5a.575.575 0 1 0 1.15 0c0-1.085.554-1.594 1.307-2.26l.02-.02c.748-.662 1.673-1.482 1.673-3.12C11.075 2.128 9.219.775 7.5.775S3.925 2.128 3.925 4.1a.575.575 0 1 0 1.15 0c0-1.189 1.182-2.175 2.425-2.175Zm.875 10.557a.875.875 0 1 0-1.75 0 .875.875 0 0 0 1.75 0Z" fillRule="evenodd"/></svg>;
    }
);
QuestionMarkIcon.displayName = 'QuestionMarkIcon';
QuestionMarkIcon.propTypes = {iconType: PropTypes.string};
QuestionMarkIcon.defaultProps = {iconType: 'Abstract'};