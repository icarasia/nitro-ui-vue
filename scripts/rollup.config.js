import path from 'path';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import vue from 'rollup-plugin-vue';
import pkg from '../package.json';

const bannerComment = require( './banner' );
const base = path.resolve( __dirname, '..' );
const src = path.resolve( base, 'src' );
const packages = path.resolve( base, 'src/packages' );
const dist = path.resolve( base, 'dist' );

export default {
    input: `${packages}/index.js`,
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            sourcemap: false
        },
        {
            file: pkg.module,
            format: 'es',
            sourcemap: false
        }
    ],
    plugins: [
        postcss( {
            extract: true
        } ),
        vue( {
            css: false
        } ),
        resolve( {
            external: [ 'vue' ],
            extensions: ['.js', '.vue'],
        } ),
        commonjs(),
        babel( {
            exclude: 'node_modules/**',
            runtimeHelpers: true,
            sourceMap: true,
        } ),
    ]
}
