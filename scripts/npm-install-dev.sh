rm -rf node_modules
rm package-lock.json

npm install --save-dev \
@babel/core \
@babel/plugin-transform-modules-commonjs \
@babel/preset-env \
bootstrap \
lodash \
object-assign \
promise-polyfill \
rollup \
rollup-plugin-babel \
rollup-plugin-commonjs \
rollup-plugin-peer-deps-external \
rollup-plugin-node-resolve \
rollup-plugin-postcss \
rollup-plugin-vue \
vue \
vue-router \
webpack \
webpack-cli \
webpack-dev-server \
vue-loader \
vue-template-compiler \
vue-style-loader \
css-loader \
babel-loader \
file-loader
