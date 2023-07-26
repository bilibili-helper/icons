import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const RowSpacingIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Design', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="m7.182.682-2 2a.45.45 0 0 0 .636.636L7.05 2.086V5.5a.45.45 0 0 0 .9 0V2.086l1.232 1.232a.45.45 0 0 0 .636-.636l-2-2a.45.45 0 0 0-.636 0ZM7.95 9.5a.45.45 0 1 0-.9 0v3.414l-1.232-1.232a.45.45 0 0 0-.636.636l2 2a.45.45 0 0 0 .636 0l2-2a.45.45 0 1 0-.636-.636L7.95 12.914V9.5ZM1 7.5a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 0-1h-12a.5.5 0 0 0-.5.5Z" fillRule="evenodd"/></svg>;
    }
);
RowSpacingIcon.displayName = 'RowSpacingIcon';
RowSpacingIcon.propTypes = {iconType: PropTypes.string};
RowSpacingIcon.defaultProps = {iconType: 'Design'};