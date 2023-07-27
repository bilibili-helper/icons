import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const ArchiveIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M5 7.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5ZM2.415 1.553 1.053 4.276A.5.5 0 0 0 1 4.5V13a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.053-.224l-1.362-2.723A1 1 0 0 0 11.691 1H3.309a1 1 0 0 0-.894.553ZM7 2v2H2.309l1-2H7Zm1 0h3.691l1 2H8V2Zm5 11H2V5h11v8Z" fillRule="evenodd"/></svg>;
    }
);
ArchiveIcon.displayName = 'ArchiveIcon';
ArchiveIcon.propTypes = {iconType: PropTypes.string};
ArchiveIcon.defaultProps = {iconType: 'Objects'};