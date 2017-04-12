exports.modifyWebpackConfig = function(config, env) {

  config.merge({
    postcss (wp) {
            return [
              require('postcss-import')({ addDependencyTo: wp }),
              require('postcss-cssnext')({ browsers: 'last 2 versions', features: {customProperties: false} }),
              require('postcss-browser-reporter'),
              require('postcss-reporter'),
            ]
    },
  })

  config.loader('url-loader', function(cfg) {
    cfg.test = /\.(mp4|webm|wav|mp3|m4a|aac|oga|pdf)(\?.*)?$/,
    cfg.loader = 'url'
    return cfg
  })

  return config
}