const path = require('path')
const resolve = dir => {
    return path.join(__dirname, dir)
}
// const BASE_URL = '/'
module.exports={
    publicPath:"/",
    lintOnSave: true,
    productionSourceMap: true,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
            .set('_c', resolve('src/components'))
    },
    devServer: {
        // proxy: 'localhost:3000'
        port: 8085,
        open: true
    }
}