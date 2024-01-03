module.exports = {
    output: 'export',
    images: { unoptimized: true },
    webpack: function (config, { isServer }) {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        })
        if (isServer) {
            import('./util/generateSiteMap.mjs')
        }
        return config
    }
}