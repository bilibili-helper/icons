import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const NotionLogoIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Logos', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="m11.532 5.768-.394.078v5.775c-.341.183-.657.288-.92.288-.42 0-.525-.131-.84-.525L6.803 7.342v3.911l.815.184c0 .315-.219.472-.657.472l-1.812.105c-.053-.105 0-.367.184-.42l.472-.13V6.292L5.15 6.24c-.053-.236.078-.577.446-.604l1.944-.13L10.22 9.6V5.978l-.683-.079c-.053-.289.157-.499.42-.525l1.813-.105c.052.236 0 .472-.237.499ZM9.326.781c.919-.08 1.156-.026 1.733.394l2.39 1.68c.395.288.526.367.526.682v9.212c0 .578-.21.92-.946.971l-8.694.525c-.552.027-.815-.052-1.104-.42l-1.76-2.283c-.315-.42-.446-.735-.446-1.103V2.25c0-.472.21-.866.814-.918L9.326.781ZM4.624 3.379l7.433-.446c.158 0 .027-.157-.026-.183l-1.234-.893c-.237-.184-.552-.394-1.156-.341l-7.198.525c-.262.026-.315.157-.21.262l1.025.814c.42.341.577.315 1.366.262Zm-.92 9.291c0 .42.21.578.683.552l8.17-.473c.472-.026.525-.315.525-.656V4.324c0-.34-.131-.525-.42-.499l-8.538.499c-.315.026-.42.184-.42.525v7.821Z" fillRule="evenodd"/></svg>;
    }
);
NotionLogoIcon.displayName = 'NotionLogoIcon';
NotionLogoIcon.propTypes = {iconType: PropTypes.string};
NotionLogoIcon.defaultProps = {iconType: 'Logos'};

export default NotionLogoIcon;