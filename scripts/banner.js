const pkg = require( '../package.json' );
const year = new Date().getFullYear();

const banner = `/*!
 * @nitro-ui-vue ${pkg.version}
 *
 * @link ${pkg.homepage}
 * @source https://github.com/icarasia-engineering/nitro-ui-vue
 * @copyright (c) 2019 @nitro-ui-vue
 * @license ${pkg.license}
 * https://github.com/icarasia-engineering/nitro-ui-vue/blob/master/LICENSE
 */
`;

module.exports = banner;
