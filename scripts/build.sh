#!/usr/bin/env bash
set -e

NITRO_VERSION=$(node -p "require('./package.json').version")
NITRO_BANNER=$(node -p "require('./scripts/banner')")

echo "Building @nitro-ui/vue-framework ${NITRO_VERSION}"
echo ''

# Cleanup
rm -rf dist

echo 'Rolling up Vue Components...'
rollup -c scripts/rollup.config.js
echo 'Done.'
echo ''

echo 'Minify CJS JS...'
terser dist/index.cjs.js \
       --compress typeofs=false \
       --mangle --comments "/^!/" \
       --output dist/index.cjs.min.js
echo 'Done.'
echo ''

echo 'Minify ESM JS...'
terser dist/index.esm.js \
       --compress typeofs=false \
       --mangle --comments "/^!/" \
       --output dist/index.esm.min.js
echo 'Done.'
echo ''

echo 'Done building dist.'
