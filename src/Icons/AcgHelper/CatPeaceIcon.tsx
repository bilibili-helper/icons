import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const CatPeaceIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'AcgHelper', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><defs><linearGradient x1="50%" y1="5.98%" x2="50%" y2="93.766%" id="j874"><stop stopColor="#54FFCD" offset="0%"/><stop stopColor="#14D4FF" offset="100%"/></linearGradient><linearGradient x1="-11.587%" y1="-16.967%" x2="112.437%" y2="117.239%" id="w882"><stop stopColor="#FFA5BF" offset="0%"/><stop stopColor="#FB7299" offset="100%"/></linearGradient></defs><g fill="none" fillRule="evenodd"><path d="M13.54 6.237c.11.55.2 1.153.216 1.77l.001.044c.67-.492 1.082-1.365 1.008-2.327a2.132 2.132 0 0 0-1.225.513M1.33 8.072a15.075 15.075 0 0 1 .218-1.81 2.137 2.137 0 0 0-1.255-.538c-.075.976.35 1.86 1.037 2.348m12.374 1.41a3.36 3.36 0 0 1-.08.39l-.001.004c-.048.176-.108.395-.267.583a.675.675 0 0 1-.14.125 1.368 1.368 0 0 1 .545.377c.707-.168 1.362-.67 1.738-1.416a2.105 2.105 0 0 0-.952-.225 2.32 2.32 0 0 0-.843.162M-.44 9.545c.455.902 1.315 1.445 2.183 1.476a4.48 4.48 0 0 1-.41-1.465l-.007-.085A2.333 2.333 0 0 0 .51 9.32c-.325 0-.649.072-.951.225m2.038 3.7c.92.868 2.245.991 3.141.351a5.835 5.835 0 0 1-1.233-.593 5.043 5.043 0 0 1-.557-.415 2.15 2.15 0 0 0-1.35.658m9.925-.202-.002.001-.003.002a6.177 6.177 0 0 1-1.188.557c.896.631 2.214.505 3.13-.358a2.115 2.115 0 0 0-.107-.106 1.301 1.301 0 0 1-.62.177.829.829 0 0 1-.413-.105l-.004-.002-.003-.002a.796.796 0 0 1-.36-.476 4.687 4.687 0 0 1-.43.312" fill="url(#j874)"/><path d="M4.177 1.021c-.342.093-.475.448-.63.73-.187.34-.359.689-.517 1.044-.323.725-.59 1.474-.8 2.24-.208.762-.358 1.54-.445 2.326-.043.394-.068.79-.082 1.185a7.12 7.12 0 0 0 .023.97 4.1 4.1 0 0 0 .647 1.827 4.5 4.5 0 0 0 1.345 1.328c1.13.725 2.499.96 3.819.96a8.7 8.7 0 0 0 2.078-.23 5.789 5.789 0 0 0 1.698-.692c.253-.158.475-.357.711-.538.22-.168.376-.331.596-.451a.223.223 0 0 1 .227 0c.092.07.11.203.04.296-.092.12-.252.1-.373.169a.398.398 0 0 0 0 .684c.248.14.6-.02.803-.175.235-.18.38-.454.395-.75a.998.998 0 0 0-.31-.787c-.417-.387-1.01-.338-1.51.096-.173.15-.348.288-.52.434a4.2 4.2 0 0 1-.698.477 5.519 5.519 0 0 1-1.777.576 8.814 8.814 0 0 1-2.227.06 6.197 6.197 0 0 1-1.903-.465 3.968 3.968 0 0 1-1.44-1.04 3.302 3.302 0 0 1-.789-1.729 5.717 5.717 0 0 1-.034-.985c.015-.393.037-.782.082-1.166a14.64 14.64 0 0 1 .475-2.354c.219-.76.495-1.503.833-2.218.084-.177.171-.354.264-.527.05-.092.096-.184.15-.274.032-.062.046-.058.069-.062.023-.004.05-.006.103.063.223.293.427.6.611.917.089.19.247.337.442.413a.984.984 0 0 0 .451-.039 8.19 8.19 0 0 1 2.93-.037c.296.05.601.178.859-.038.175-.187.322-.4.434-.632a8.06 8.06 0 0 1 .329-.476c.023-.029.09-.152.163-.152.073 0 .129.112.148.144a14.615 14.615 0 0 1 1.702 5.671c.061.703-.049 1.508-.13 1.81-.038.136-.086.275-.054.414.03.133.145.231.277.267.137.037.32.007.413-.101.103-.122.146-.28.188-.435.127-.469.136-1.072.118-1.751-.02-.789-.168-1.57-.345-2.338a16.52 16.52 0 0 0-.719-2.305 13.638 13.638 0 0 0-1.005-2.058.645.645 0 0 0-.78-.27.948.948 0 0 0-.384.328c-.25.302-.477.621-.68.957-.027.042-.065.11-.077.126-.011.018-.036.073-.075.089a.317.317 0 0 1-.136-.01l-.13-.021a9.653 9.653 0 0 0-1.2-.123 8.218 8.218 0 0 0-1.152.039 9.84 9.84 0 0 0-.576.074l-.167.03a.337.337 0 0 1-.14 0c-.054-.016-.114-.12-.147-.176a8.46 8.46 0 0 0-.653-.931 1.248 1.248 0 0 0-.369-.361.638.638 0 0 0-.45-.046M9.885 5.67a3.006 3.006 0 0 0-.96.265c-.193.094-.463.251-.425.46.044.254.384.266.75.375.462.114.891.333 1.254.642.278.213.657.05.6-.298-.051-.33-.833-.657-1.096-.74.242-.017.485-.005.724.035.285.04.554-.06.52-.43-.024-.282-.41-.352-.79-.352-.217 0-.433.023-.577.043m-6.022.309c-.032.37.236.47.52.43.24-.04.483-.052.725-.034-.263.082-1.045.409-1.097.74-.056.347.323.51.601.297a3.062 3.062 0 0 1 1.255-.642c.365-.11.705-.12.749-.374.038-.21-.232-.367-.425-.461a3.006 3.006 0 0 0-.96-.265 4.431 4.431 0 0 0-.578-.043c-.38 0-.765.07-.79.352" fill="url(#w882)"/></g></svg>;
    }
);
CatPeaceIcon.displayName = 'CatPeaceIcon';
CatPeaceIcon.propTypes = {iconType: PropTypes.string};
CatPeaceIcon.defaultProps = {iconType: 'AcgHelper'};