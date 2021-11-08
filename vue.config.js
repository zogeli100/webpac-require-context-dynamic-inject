//  获取指令中指定参数并挂载到自定义变量
const argv = process.argv
const argvLat = argv.splice(argv.length - 1)[0]
const _FileName = argvLat.includes('FileName') ? argvLat.split("=")[1] : ''
const Define_FileName = '/' + _FileName + '\\.js$/'

const webpack = require('webpack')

module.exports = {
    configureWebpack: config => {
        const plugins = []
        // 注入自定义变量
        plugins.push(new webpack.DefinePlugin({
            Define_FileName
        }))
        config.plugins = [...config.plugins, ...plugins]
    },
    lintOnSave: false,
}