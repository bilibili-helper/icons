import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const MarginIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Design', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M2 1.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm3 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm2.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm3.5-.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm2.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM2 13.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM1.5 11a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM2 7.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM1.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM14 10.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM13.5 8a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm.5-3.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM4.5 14a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm3.5-.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm2.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm3.5-.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM5 4h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm5 1v5H5V5h5Z" fillRule="evenodd"/></svg>;
    }
);
MarginIcon.displayName = 'MarginIcon';
MarginIcon.propTypes = {iconType: PropTypes.string};
MarginIcon.defaultProps = {iconType: 'Design'};