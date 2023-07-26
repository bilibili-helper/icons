import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const LeftWingIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M13.388 5.022c-1.39-1.115-3.742-2.52-8.102-1.847-4.098.633-4.28 3.383-4.286 3.5v.022c.009.73.246 1.32.704 1.755.666.632 1.619.747 2.088.763.401 1.07 1.551 1.255 2.332 1.185.064.12.154.241.268.355.365.368.89.57 1.412.561a1.818 1.818 0 0 0 1.265-.554c.235.309.63.7 1.247.96a3.43 3.43 0 0 0 1.345.278c1.055 0 2.065-.502 2.74-1.423 1.01-1.382.788-4.11-1.013-5.555Zm.454 5.125c-.779 1.063-2.058 1.423-3.26.914-.857-.363-1.147-1.026-1.157-1.052-.003-.006-.01-.01-.013-.015-.005-.01-.005-.022-.011-.032-.005-.009-.494-.853-.102-1.76.233-.54.744-.757 1.146-.781.423-.025.785.142.953.434.167.292.19.65.053.87-.101.164-.28.237-.525.212a.354.354 0 0 0-.38.324.356.356 0 0 0 .317.389c.51.046.936-.15 1.178-.541.28-.452.263-1.086-.041-1.616-.302-.526-.916-.824-1.595-.787A2.011 2.011 0 0 0 8.66 7.912c-.406.942-.132 1.816.038 2.206-.14.182-.438.473-.908.483a1.302 1.302 0 0 1-.95-.399 1.7 1.7 0 0 0 .828-.953.36.36 0 0 0-.204-.46.346.346 0 0 0-.449.209 1.01 1.01 0 0 1-.712.654c-.069.014-1.324.254-1.783-.543a1.86 1.86 0 0 0 .991-.923.362.362 0 0 0-.156-.48.346.346 0 0 0-.468.16c-.234.481-.676.61-.808.64-.017-.002-.034-.008-.052-.006-.012.002-1.182.059-1.848-.574-.314-.298-.472-.698-.48-1.224.012-.151.26-2.29 3.69-2.819 4.094-.632 6.28.67 7.569 1.702 1.473 1.183 1.688 3.463.884 4.562Z"/></svg>;
    }
);
LeftWingIcon.displayName = 'LeftWingIcon';
LeftWingIcon.propTypes = {iconType: PropTypes.string};
LeftWingIcon.defaultProps = {iconType: 'Objects'};