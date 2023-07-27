import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const RocketIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M10.552 1.801a5.342 5.342 0 0 1 1.504-.02c.443.066.714.196.84.323.127.126.257.397.323.84.064.427.059.95-.02 1.504-.16 1.123-.608 2.254-1.253 2.898L7.5 11.793l-1.146-1.147a.5.5 0 0 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l.547-.548 1.17 1.951a.5.5 0 0 0 .783.097l2-2a.5.5 0 0 0 .141-.425l-.465-3.252.624-.623c.855-.856 1.358-2.225 1.535-3.465.09-.627.1-1.25.019-1.794-.08-.528-.256-1.05-.604-1.399-.349-.348-.872-.525-1.4-.604a6.332 6.332 0 0 0-1.793.02C9.17.987 7.8 1.49 6.946 2.345l-.623.624-3.252-.465a.5.5 0 0 0-.425.141l-2 2a.5.5 0 0 0 .097.783l1.95 1.17-.547.547a.5.5 0 0 0 0 .708l1.5 1.5a.5.5 0 1 0 .708-.708L3.207 7.5l4.447-4.446c.644-.645 1.775-1.092 2.898-1.253ZM9.13 11.578l2.016-2.017.324 2.262-1.37 1.37-.97-1.615ZM5.44 3.854 3.176 3.53 1.807 4.9l1.616.97 2.016-2.016ZM2.353 9.646a.5.5 0 0 0-.708 0l-1 1a.5.5 0 0 0 .708.708l1-1a.5.5 0 0 0 0-.708Zm1.5 1.5a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708Zm1.5 1.5a.5.5 0 0 0-.708 0l-1 1a.5.5 0 0 0 .708.708l1-1a.5.5 0 0 0 0-.708ZM10.749 5.5a1.249 1.249 0 1 0-2.498 0 1.249 1.249 0 0 0 2.498 0Z" fillRule="evenodd"/></svg>;
    }
);
RocketIcon.displayName = 'RocketIcon';
RocketIcon.propTypes = {iconType: PropTypes.string};
RocketIcon.defaultProps = {iconType: 'Objects'};