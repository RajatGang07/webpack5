const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/'
    },
    mode: 'none',
    module: {
        rules: [
            // {
            //     test: /\.(png|jpg)$/,
            //     type: 'asset/resource'
            // }
            // {
            //     test: /\.(png|jpg)$/,
            //     type: 'asset/inline'
            // },
            {
                test: /\.(png|jpg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition:{
                        maxSize: 3 * 1024 // 3 kilobytes
                    }
                }
            }
        ]
    }
}