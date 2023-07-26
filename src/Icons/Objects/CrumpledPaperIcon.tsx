import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const CrumpledPaperIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><g fill="none" fillRule="evenodd"><path d="M0 0h15v15H0Z"/><path d="m4.082.333-.928 2.32-2.321.93a.45.45 0 0 0-.193.687l1.371 1.829-.948 3.792a.45.45 0 0 0 .264.524L4.2 11.613l1.425 2.137a.45.45 0 0 0 .498.183l3.5-1a.451.451 0 0 0 .018-.006l3-1a.45.45 0 0 0 .297-.33l1-4.5a.45.45 0 0 0-.169-.457l-1.82-1.365V3a.45.45 0 0 0-.249-.402l-3-1.5a.45.45 0 0 0-.092-.035l-4-1a.45.45 0 0 0-.527.27Zm8.693 6.686-2.563 2.135a.45.45 0 0 0-.139.204l-.82 2.457-1.515-.947a.45.45 0 0 0-.477.764l1.142.713-2.21.632L4.873 11a.45.45 0 0 0-.2-.165L2.03 9.734l.821-3.284H5a.45.45 0 1 0 0-.9H2.725L1.712 4.2l1.802-.721 2.844.948a.45.45 0 0 0 .493-.146l1.773-2.216 2.426 1.213v1.917l-2.217.887a.45.45 0 0 0-.26.276l-.5 1.5a.45.45 0 1 0 .854.284L9.36 6.84l2.071-.828 1.343 1.007Zm-6.43-3.545-2.25-.75.677-1.692 2.939.734-1.366 1.708Zm5.771 7.68.658-2.964-1.888 1.574-.674 2.024 1.904-.634Z" fill="#000"/></g></svg>;
    }
);
CrumpledPaperIcon.displayName = 'CrumpledPaperIcon';
CrumpledPaperIcon.propTypes = {iconType: PropTypes.string};
CrumpledPaperIcon.defaultProps = {iconType: 'Objects'};