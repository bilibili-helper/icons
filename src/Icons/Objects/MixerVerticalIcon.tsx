import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const MixerVerticalIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M4.5 1a.5.5 0 0 0-.5.5V7c0 .017 0 .033.002.05a2.5 2.5 0 0 0 0 4.9A.506.506 0 0 0 4 12v1.5a.5.5 0 0 0 1 0V12c0-.017 0-.033-.002-.05a2.5 2.5 0 0 0 0-4.9A.506.506 0 0 0 5 7V1.5a.5.5 0 0 0-.5-.5ZM3 9.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM10.5 1a.5.5 0 0 0-.5.5V3c0 .017 0 .033.002.05a2.5 2.5 0 0 0 0 4.9A.506.506 0 0 0 10 8v5.5a.5.5 0 0 0 1 0V8c0-.017 0-.033-.002-.05a2.5 2.5 0 0 0 0-4.9A.506.506 0 0 0 11 3V1.5a.5.5 0 0 0-.5-.5Zm0 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" fillRule="evenodd"/></svg>;
    }
);
MixerVerticalIcon.displayName = 'MixerVerticalIcon';
MixerVerticalIcon.propTypes = {iconType: PropTypes.string};
MixerVerticalIcon.defaultProps = {iconType: 'Objects'};