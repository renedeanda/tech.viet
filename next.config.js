module.exports = {
    future: {
        webpack5: true,
        strictPostcssConfiguration: true
    },
    target: 'serverless',
    webpack: function (config, { isServer }) {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        })
        if (isServer) {
            require('./util/generateSiteMap')
        }
        return config
    }
}