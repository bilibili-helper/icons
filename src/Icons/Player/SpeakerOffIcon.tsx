import * as React from 'react';
import { IconProps } from '../types';

export const SpeakerOffIconIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path
          d="M8 1.5v12a.5.5 0 0 1-.8.4L3.333 11H1.5A1.5 1.5 0 0 1 0 9.5v-4A1.5 1.5 0 0 1 1.5 4h1.833L7.2 1.1a.5.5 0 0 1 .8.4ZM3.8 4.9a.5.5 0 0 1-.3.1h-2a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h2a.5.5 0 0 1 .3.1L7 12.5v-10L3.8 4.9Zm11.054.954L13.207 7.5l1.647 1.646a.5.5 0 1 1-.708.708L12.5 8.207l-1.646 1.647a.5.5 0 0 1-.708-.708L11.793 7.5l-1.647-1.646a.5.5 0 1 1 .708-.708L12.5 6.793l1.646-1.647a.5.5 0 0 1 .708.708Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
);
SpeakerOffIconIcon.displayName = 'SpeakerOffIconIcon';

export default SpeakerOffIconIcon;
