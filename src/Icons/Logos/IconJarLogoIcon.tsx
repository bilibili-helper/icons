import * as React from 'react';
import {IconProps} from '../types';
import PropTypes from 'prop-types';

export const IconJarLogoIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Logos', ...props}, forwardedRef) => {
        return <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M6.25.75c0 .247.174.37.327.477.118.084.223.158.223.273 0 .207-.738.243-1.602.284-1.222.06-2.698.13-2.698.716A.5.5 0 0 0 3 3h9a.5.5 0 0 0 .5-.5c0-.586-1.476-.657-2.698-.716C8.938 1.743 8.2 1.707 8.2 1.5c0-.115.105-.19.223-.273.153-.107.327-.23.327-.477 0-.469-.555-.747-1.25-.747S6.25.281 6.25.75ZM2.025 8.056l.81 4.421A1.867 1.867 0 0 0 4.662 14h5.676c.898 0 1.651-.644 1.825-1.523l.812-4.42c.115-.733-.146-1.524-.84-1.963-.406-.264-.493-.762 0-.966C12.827 4.864 12.693 4 12 4H3c-.695 0-.801.893-.105 1.157.491.175.404.673 0 .966a1.958 1.958 0 0 0-.87 1.933ZM7.906 5H4.111a1.4 1.4 0 0 1 .118.655c-.034.57-.383 1.014-.749 1.278l-.025.018-.026.017a.96.96 0 0 0-.418.92l.807 4.4a.867.867 0 0 0 .843.712h5.676c.4 0 .756-.285.843-.711l.807-4.4c.061-.407-.092-.763-.388-.95l-.012-.007c-.392-.256-.754-.704-.788-1.284A1.399 1.399 0 0 1 10.91 5H9.055A2.127 2.127 0 0 0 9 5.5c0 .475.217.871.444 1.287.249.456.51.934.51 1.563 0 .92-.455 1.492-1.332 1.492-.49 0-1.044-.381-1.044-1.084 0-.405.138-.742.283-1.098.164-.402.34-.83.34-1.41 0-.432-.115-.874-.295-1.25Z" fillRule="evenodd"/></svg>;
    }
);
IconJarLogoIcon.displayName = 'IconJarLogoIcon';
IconJarLogoIcon.propTypes = {iconType: PropTypes.string};
IconJarLogoIcon.defaultProps = {iconType: 'Logos'};

export default IconJarLogoIcon;