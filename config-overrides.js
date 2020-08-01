const { override, addWebpackAlias } = require('customize-cra')
const path = require('path')
 
module.exports = override(
  addWebpackAlias({
    '@tarojs/components$': path.join(__dirname, './node_modules/@tarojs/components/dist-h5/react')
  })
)