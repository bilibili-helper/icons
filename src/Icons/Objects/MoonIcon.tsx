import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const MoonIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M2.5.1a.4.4 0 0 0-.4.4v.6h-.6a.4.4 0 0 0 0 .8h.6v.6a.4.4 0 0 0 .8 0v-.6h.6a.4.4 0 1 0 0-.8h-.6V.5a.4.4 0 0 0-.4-.4Zm3 3a.4.4 0 0 0-.4.4v.6h-.6a.4.4 0 0 0 0 .8h.6v.6a.4.4 0 0 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6v-.6a.4.4 0 0 0-.4-.4Zm-4 3a.4.4 0 0 0-.4.4v.6H.5a.4.4 0 0 0 0 .8h.6v.6a.4.4 0 0 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6v-.6a.4.4 0 0 0-.4-.4ZM8.246.942c-.213-.024-.34.223-.217.4A6.57 6.57 0 0 1 9.203 5.1a6.602 6.602 0 0 1-6.243 6.59c-.214.012-.333.264-.183.417a6.8 6.8 0 0 0 .21.206l.072.067.26.224.188.15.121.09.187.13.176.115c.12.076.244.149.37.217l.264.135.26.12.303.122.244.086a6.547 6.547 0 0 0 1.103.26l.317.04.267.02a6.6 6.6 0 0 0 6.943-7.328l-.037-.277a6.562 6.562 0 0 0-.384-1.415l-.113-.268-.077-.166-.074-.148a6.604 6.604 0 0 0-.546-.883l-.153-.2-.199-.24-.163-.18-.12-.124-.16-.158-.223-.2-.32-.26-.245-.177-.292-.19-.321-.186-.328-.165-.113-.052-.24-.101-.276-.104-.252-.082-.325-.09-.265-.06-.292-.053-.298-.04Zm1.586 1.464a5.601 5.601 0 1 1-4.748 10.146 7.611 7.611 0 0 0 3.66-2.51.749.749 0 1 0 .771-1.174c.062-.116.122-.235.178-.355A1.25 1.25 0 1 0 10.35 6.2c.034-.295.052-.595.052-.9a7.578 7.578 0 0 0-.57-2.894Z" fillRule="evenodd"/></svg>;
    }
);
MoonIcon.displayName = 'MoonIcon';
MoonIcon.propTypes = {iconType: PropTypes.string};
MoonIcon.defaultProps = {iconType: 'Objects'};

export default MoonIcon;