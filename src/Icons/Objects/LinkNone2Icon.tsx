import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const LinkNone2Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M8.512 3.005c-.154.105-.32.268-.747.695l-.619.618a.5.5 0 0 1-.707-.707l.619-.619.043-.042c.37-.37.606-.607.849-.772.994-.675 2.288-.71 3.278-.06.241.159.472.39.823.741l.045.045.045.045c.351.351.582.582.74.823.651.99.616 2.284-.059 3.278-.165.243-.402.48-.771.85a325.4 325.4 0 0 0-.043.042l-.619.619a.5.5 0 1 1-.707-.707l.619-.619c.427-.427.589-.592.694-.747.46-.676.468-1.531.051-2.167-.095-.144-.245-.298-.657-.71-.412-.412-.566-.562-.71-.657-.636-.417-1.49-.408-2.167.051ZM4.318 7.147l-.619.618c-.427.427-.59.593-.694.747-.46.677-.468 1.532-.051 2.167.095.144.245.298.657.71.412.412.566.563.71.657.635.418 1.49.409 2.167-.05.154-.106.32-.268.747-.695l.618-.619a.5.5 0 1 1 .708.707l-.62.62-.042.042c-.37.37-.606.606-.85.771-.993.676-2.287.71-3.277.06-.241-.158-.472-.39-.824-.74l-.044-.046-.045-.044c-.351-.351-.582-.582-.741-.824-.65-.99-.615-2.284.06-3.278.165-.243.402-.48.771-.849l.043-.043.619-.618a.5.5 0 1 1 .707.707Z" fillRule="evenodd"/></svg>;
    }
);
LinkNone2Icon.displayName = 'LinkNone2Icon';
LinkNone2Icon.propTypes = {iconType: PropTypes.string};
LinkNone2Icon.defaultProps = {iconType: 'Objects'};

export default LinkNone2Icon;