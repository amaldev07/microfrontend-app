const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    publicPath: "http://localhost:4200/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        profile: 'profile@http://localhost:4201/remoteEntry.js',
        dashboard: 'dashboard@http://localhost:4202/remoteEntry.js',
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true },
        "@angular/common": { singleton: true, strictVersion: true },
        "@angular/router": { singleton: true, strictVersion: true },
      },
    }),
  ],
};
