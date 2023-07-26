import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const ReloadIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Abstract', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M7.5 1.85c2.778 0 4.152 2.056 4.737 3.15H10.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0v1.813C12.295 3.071 10.666.85 7.5.85 3.437.85.85 4.185.85 7.5c0 3.315 2.587 6.65 6.65 6.65 1.944 0 3.562-.77 4.715-1.942a6.772 6.772 0 0 0 1.427-2.167.5.5 0 1 0-.925-.38 5.772 5.772 0 0 1-1.216 1.846c-.972.99-2.336 1.643-4.001 1.643-3.44 0-5.65-2.815-5.65-5.65 0-2.835 2.21-5.65 5.65-5.65Z"/></svg>;
    }
);
ReloadIcon.displayName = 'ReloadIcon';
ReloadIcon.propTypes = {iconType: PropTypes.string};
ReloadIcon.defaultProps = {iconType: 'Abstract'};