const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    lintOnSave: false,
    css: {
        // extract: true,
        modules: true,
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({
                        rootValue: 16, // 换算的基数
                        selectorBlackList: [], // 忽略转换正则匹配项
                        propList: ['*'],
                    }),
                ]
            }
        }
    },
    configureWebpack: config => {
        config.entry = {
            app: [resolve(__dirname, 'src/main.tsx')]
        }
        config.resolve.extensions = ['.ts', '.tsx', '.mjs', '.js', '.jsx', '.vue', '.json', '.wasm'];
        // console.log(config);
        for (let i in config.module.rules) {
            if (config.module.rules[i].test.test('.css')) {
                config.module.rules[i] = {
                    test: /\.css/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: false
                            }
                        }
                    ]
                }
            }
        }

        config.plugins.push(new MiniCssExtractPlugin('[name].css'));
    }
}