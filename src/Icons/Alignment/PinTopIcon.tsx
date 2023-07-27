import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const PinTopIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Alignment', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M1.05 1.5c0 .249.202.45.45.45h12a.45.45 0 0 0 0-.9h-12a.45.45 0 0 0-.45.45Zm2.882 6.568a.45.45 0 0 0 .636 0L7.05 5.586V13.5a.45.45 0 0 0 .9 0V5.586l2.482 2.482a.45.45 0 0 0 .636-.636l-3.25-3.25a.45.45 0 0 0-.636 0l-3.25 3.25a.45.45 0 0 0 0 .636Z" fillRule="evenodd"/></svg>;
    }
);
PinTopIcon.displayName = 'PinTopIcon';
PinTopIcon.propTypes = {iconType: PropTypes.string};
PinTopIcon.defaultProps = {iconType: 'Alignment'};