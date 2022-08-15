import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const QuoteIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Components', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M11.38 3.546c1.373.706 1.968 2.526 1.415 4.454-.248.865-.685 1.705-1.609 2.552-.924.848-2.206 1.348-2.8 1.348A.38.38 0 0 1 8 11.525c0-.207.176-.375.386-.375.679 0 1.286-.37 2.005-.914.55-.417.98-.95 1.217-1.414.455-.888.47-2.14-.265-2.473-.353.386-.814.61-1.366.61-1.2 0-1.907-.965-1.876-1.839.029-.835.56-1.43 1.324-1.679.631-.204 1.359-.2 1.954.105Zm-6 0C6.752 4.252 7.347 6.072 6.794 8c-.248.865-.685 1.705-1.609 2.552-.924.848-2.206 1.348-2.8 1.348A.38.38 0 0 1 2 11.525c0-.207.176-.375.386-.375.679 0 1.286-.37 2.005-.914.55-.417.98-.95 1.217-1.414.455-.888.47-2.14-.265-2.473-.353.386-.814.61-1.366.61-1.2 0-1.907-.965-1.876-1.839.029-.835.56-1.43 1.324-1.679.631-.204 1.359-.2 1.954.105Z" fillRule="evenodd"/></svg>;
    }
);
QuoteIcon.displayName = 'QuoteIcon';
QuoteIcon.propTypes = {iconType: PropTypes.string};
QuoteIcon.defaultProps = {iconType: 'Components'};

export default QuoteIcon;