import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const LinkBreak2IconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M5 .5v2a.5.5 0 1 1-1 0v-2a.5.5 0 0 1 1 0ZM1.354.646l1.5 1.5a.5.5 0 1 1-.708.708l-1.5-1.5a.5.5 0 1 1 .708-.708ZM.5 4h2a.5.5 0 1 1 0 1h-2a.5.5 0 1 1 0-1Zm12 6h2a.5.5 0 1 1 0 1h-2a.5.5 0 0 1 0-1ZM11 12.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0Zm1.854-.354 1.5 1.5a.5.5 0 1 1-.708.708l-1.5-1.5a.5.5 0 0 1 .708-.708Zm-4.342-9.14c.676-.46 1.531-.47 2.167-.052.144.095.298.245.71.657.412.412.562.566.657.71.417.636.408 1.49-.051 2.167-.105.154-.268.32-.695.747l-.618.619a.5.5 0 1 0 .707.707l.661-.662c.37-.37.607-.606.772-.849.675-.994.71-2.288.06-3.278-.159-.241-.39-.472-.741-.823l-.09-.09c-.351-.351-.582-.582-.823-.74-.99-.651-2.284-.616-3.278.06-.243.164-.48.4-.85.77l-.66.662a.5.5 0 1 0 .706.707l.619-.619c.427-.427.592-.589.747-.694ZM2.178 7.95c-.676.994-.71 2.288-.06 3.278.158.241.39.472.74.824l.09.089c.351.351.583.583.824.741.99.65 2.284.615 3.278-.06.243-.165.48-.402.849-.771l.661-.662a.5.5 0 0 0-.707-.707l-.618.619c-.427.427-.593.59-.747.694-.677.46-1.532.468-2.167.051-.144-.095-.298-.245-.71-.657-.412-.412-.563-.566-.657-.71-.418-.635-.409-1.49.05-2.167.106-.154.268-.32.695-.747l.619-.618a.5.5 0 0 0-.707-.708l-.662.662c-.37.37-.606.606-.771.85Z" fillRule="evenodd"/></svg>;
    }
);
LinkBreak2IconIcon.displayName = 'LinkBreak2IconIcon';
LinkBreak2IconIcon.propTypes = {iconType: PropTypes.string};
LinkBreak2IconIcon.defaultProps = {iconType: 'Objects'};

export default LinkBreak2IconIcon;