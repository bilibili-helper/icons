import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const RulerSquareIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><g fill="none" fillRule="evenodd"><path d="M0 0h15v15H0V0Z"/><path d="M0 .5v14a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V5h9.5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5ZM1 1h3.075v3.075H1V1Zm0 13h3v-1.075H2.75a.425.425 0 0 1 0-.85H4v-1.15H2.25a.425.425 0 0 1 0-.85H4v-1.15H2.75a.425.425 0 0 1 0-.85H4v-1.15H2.75a.425.425 0 1 1 0-.85H4v-1.15H1V14ZM6.075 4V2.75a.425.425 0 1 1 .85 0V4h1.15V2.75a.425.425 0 1 1 .85 0V4h1.15V2.25a.425.425 0 0 1 .85 0V4h1.15V2.75a.425.425 0 1 1 .85 0V4H14V1H4.925v3h1.15Z" fill="#000"/></g></svg>;
    }
);
RulerSquareIconIcon.displayName = 'RulerSquareIconIcon';
RulerSquareIconIcon.propTypes = {iconType: PropTypes.string};
RulerSquareIconIcon.defaultProps = {iconType: 'Objects'};

export default RulerSquareIconIcon;