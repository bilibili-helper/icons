import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const ResumeFilledIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Player', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M2.5 2.2a.55.55 0 0 0-.55.55v9.5a.55.55 0 1 0 1.1 0v-9.5a.55.55 0 0 0-.55-.55Zm2.742.122A.5.5 0 0 0 5 2.75v9.5a.5.5 0 0 0 .733.442l9-4.75a.5.5 0 0 0 0-.884l-9-4.75a.5.5 0 0 0-.491.014Z" fillRule="evenodd"/></svg>;
    }
);
ResumeFilledIconIcon.displayName = 'ResumeFilledIconIcon';
ResumeFilledIconIcon.propTypes = {iconType: PropTypes.string};
ResumeFilledIconIcon.defaultProps = {iconType: 'Player'};

export default ResumeFilledIconIcon;