import path from 'path';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import external from 'rollup-plugin-peer-deps-external'
import minify from 'rollup-plugin-babel-minify';
import vue from 'rollup-plugin-vue';
import { dependencies, main, module } from '../package.json';

const bannerComment = require( './banner' );
const base = path.resolve( __dirname, '..' );
const src = path.resolve( base, 'src' );
const packages = path.resolve( base, 'src/packages' );
const dist = path.resolve( base, 'dist' );
const externals = [ 'vue', ...Object.keys( dependencies ) ];

export default {
    input: `${packages}/index.js`,
    external: externals,
    output: [
        {
            banner: bannerComment,
            file: main,
            format: 'cjs',
            sourcemap: false
        },
        {
            banner: bannerComment,
            file: module,
            format: 'es',
            sourcemap: false
        }
    ],
    plugins: [
        minify(),
        external(),
        postcss( {
            extract: true
        } ),
        vue( {
            css: false
        } ),
        resolve( {
            extensions: [ '.js', '.vue' ],
        } ),
        commonjs(),
        babel( {
            exclude: 'node_modules/**',
            runtimeHelpers: true,
            sourceMap: true,
        } ),
    ]
}
