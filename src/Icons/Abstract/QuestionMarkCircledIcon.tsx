import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const QuestionMarkCircledIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Abstract', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M7.5 11.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm0-6.325c.865 0 1.45.647 1.45 1.325 0 .491-.27.742-.736 1.025-.051.032-.111.066-.176.104a5.28 5.28 0 0 0-.564.36c-.242.188-.524.493-.524.961a.55.55 0 0 0 1.1.004.443.443 0 0 1 .1-.098c.102-.079.215-.144.366-.232.078-.045.167-.097.27-.159.534-.325 1.264-.861 1.264-1.965 0-1.322-1.115-2.425-2.55-2.425-1.435 0-2.55 1.103-2.55 2.425a.55.55 0 0 0 1.1 0c0-.678.585-1.325 1.45-1.325Zm0-4.048a6.623 6.623 0 1 1 0 13.246A6.623 6.623 0 0 1 7.5.877ZM1.827 7.5a5.673 5.673 0 1 0 11.346 0 5.673 5.673 0 0 0-11.346 0Z" fillRule="evenodd"/></svg>;
    }
);
QuestionMarkCircledIcon.displayName = 'QuestionMarkCircledIcon';
QuestionMarkCircledIcon.propTypes = {iconType: PropTypes.string};
QuestionMarkCircledIcon.defaultProps = {iconType: 'Abstract'};

export default QuestionMarkCircledIcon;