const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    plugins: [
        new ModuleFederationPlugin({
            name: 'dashboard',
            filename: 'remoteEntry.js',
            exposes: {
                './DashboardModule': './src/app/dashboard/dashboard.module.ts',
            },
            shared: {
                "@angular/core": { singleton: true, strictVersion: true },
                "@angular/common": { singleton: true, strictVersion: true },
                "@angular/router": { singleton: true, strictVersion: true },
            },
        }),
    ],
};
