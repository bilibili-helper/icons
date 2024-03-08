/**
 * Author: DrowsyFlesh
 * Create: 2020/12/19
 * Description:
 */
/*global module*/
module.exports = {
    ignore: [/[/\\]core-js/, /@babel[/\\]runtime/],
    comments: true,
    sourceType: 'unambiguous',
    presets: [
        [
            '@babel/preset-env',
            {
                'modules': false,
                "targets": {
                    "chrome": 63,
                },
            },
        ],
        '@babel/preset-react',
    ],
    plugins: [
        [
            '@babel/plugin-proposal-decorators',
            {
                'legacy': true,
            },
        ],
        '@babel/plugin-transform-object-rest-spread',
        '@babel/plugin-transform-object-assign',
        //'@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-transform-class-properties',
        '@babel/plugin-proposal-function-bind',
        'lodash',
        [
            '@babel/plugin-transform-runtime',
            {
                'corejs': 2,
            },
        ],
        [
            'babel-plugin-transform-builtin-classes',
            {
                'globals': [
                    'Array',
                    'Error',
                    'HTMLElement',
                    'DataView',
                ],
            },
        ],
    ],
};
