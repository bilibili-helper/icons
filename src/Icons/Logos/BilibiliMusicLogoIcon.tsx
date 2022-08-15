import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const BilibiliMusicLogoIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Logos', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M7.609 1.457c1.905-.558 3.895-.658 5.026 0 1.422.828 1.496 7.255 1.265 8.63-.23 1.375-1.108 2.312-2.396 2.312-1.287 0-2.335-1.037-2.335-2.312s1.048-2.312 2.335-2.312a.68.68 0 0 1 .683.676.68.68 0 0 1-.683.675c-.535 0-.97.431-.97.961s.435.96.97.96c.535 0 .914-.316 1.048-.837.31-.7.29-7.243-.822-7.7-.904-.37-4.405-.08-5.756 1.41-.115.138-.301.356-.304.6 0 .144-.052.444.304.444s1.7-1.487 4.928-1.373c.531.036.716.569.497.93-.145.236-.921.277-1.321.32-.553.061-3.537.605-4.304 2.057-.448 1.123.08 2.789.032 4.802 0 1.28-1.183 2.3-2.47 2.3C2.047 14 1 12.968 1 11.7c0-1.262 1.048-2.29 2.335-2.29a.68.68 0 0 1 .683.676.68.68 0 0 1-.683.676c-.544 0-.97.411-.97.937a.96.96 0 0 0 .97.949c.535 0 .916-.377 1.106-.95.31-.747-.832-5.28 0-7.78.395-1.185 1.282-1.91 3.168-2.462Z" fillRule="evenodd"/></svg>;
    }
);
BilibiliMusicLogoIcon.displayName = 'BilibiliMusicLogoIcon';
BilibiliMusicLogoIcon.propTypes = {iconType: PropTypes.string};
BilibiliMusicLogoIcon.defaultProps = {iconType: 'Logos'};

export default BilibiliMusicLogoIcon;