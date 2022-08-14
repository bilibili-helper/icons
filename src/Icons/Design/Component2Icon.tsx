import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const Component2IconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Design', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M11.12 1c.403 0 .735 0 1.006.022.281.023.54.072.782.196a2 2 0 0 1 .874.874c.124.243.173.501.196.782.022.27.022.603.022 1.005v7.242c0 .402 0 .734-.022 1.005-.023.281-.072.54-.196.782a2 2 0 0 1-.874.874c-.243.124-.501.173-.782.196-.27.022-.603.022-1.005.022H3.879c-.402 0-.734 0-1.005-.022-.281-.023-.54-.072-.782-.196a2 2 0 0 1-.874-.874c-.124-.243-.173-.501-.196-.782C1 11.856 1 11.523 1 11.12V3.879c0-.402 0-.734.022-1.005.023-.281.072-.54.196-.782a2 2 0 0 1 .874-.874c.243-.124.501-.173.782-.196C3.144 1 3.477 1 3.88 1h7.242ZM2.547 2.109a1 1 0 0 0-.437.437c-.04.078-.072.19-.09.41C2 3.18 2 3.472 2 3.9V7h5V2H3.9c-.428 0-.72 0-.944.019-.22.018-.332.05-.41.09ZM2 8v3.1c0 .428 0 .72.019.944.018.22.05.332.09.41a1 1 0 0 0 .437.437c.078.04.19.072.41.09.225.019.516.019.944.019H7V8H2Zm11 0v3.1c0 .428 0 .72-.019.944-.018.22-.05.332-.09.41a1 1 0 0 1-.437.437c-.078.04-.19.072-.41.09-.225.019-.516.019-.944.019H8V8h5ZM8 7V2h3.1c.428 0 .72 0 .944.019.22.018.332.05.41.09a1 1 0 0 1 .437.437c.04.078.072.19.09.41.019.225.019.516.019.944V7H8Z" fillRule="evenodd"/></svg>;
    }
);
Component2IconIcon.displayName = 'Component2IconIcon';
Component2IconIcon.propTypes = {iconType: PropTypes.string};
Component2IconIcon.defaultProps = {iconType: 'Design'};

export default Component2IconIcon;