import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const HeartIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><g fill="none" fillRule="evenodd"><path d="M0 0h15v15H0V0Z"/><path d="M4.893 1.352c1.115 0 1.842.408 2.316.943.112.126.208.259.291.39a3.02 3.02 0 0 1 .291-.39c.474-.535 1.2-.943 2.316-.943a3.547 3.547 0 0 1 3.54 3.553c0 1.835-1.046 3.6-2.246 5.064-1.137 1.387-2.48 2.582-3.395 3.397l-.173.155a.5.5 0 0 1-.666 0l-.173-.155c-.916-.815-2.258-2.01-3.395-3.397C2.4 8.505 1.352 6.74 1.352 4.905a3.547 3.547 0 0 1 3.541-3.553Zm-2.54 3.553c0 1.477.857 3.012 2.02 4.43 1.021 1.246 2.222 2.335 3.127 3.143.905-.808 2.106-1.897 3.127-3.143 1.163-1.418 2.02-2.953 2.02-4.43a2.547 2.547 0 0 0-2.54-2.553c-.836 0-1.288.291-1.567.606-.261.295-.394.628-.515.932l-.063.156a.5.5 0 0 1-.924 0l-.063-.156c-.121-.304-.254-.637-.515-.932-.279-.315-.73-.606-1.567-.606a2.547 2.547 0 0 0-2.54 2.553Z" fill="#000"/></g></svg>;
    }
);
HeartIconIcon.displayName = 'HeartIconIcon';
HeartIconIcon.propTypes = {iconType: PropTypes.string};
HeartIconIcon.defaultProps = {iconType: 'Objects'};

export default HeartIconIcon;