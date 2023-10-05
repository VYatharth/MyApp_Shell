const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  // not needed for dynamic MF
  // remotes: {
  //   "mfe1": "http://localhost:4201/remoteEntry.js",
  //   "mfe2": "http://localhost:4202/remoteEntry.js",    
  // },
  // shared: share({
  //   "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
  //   "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
  //   "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
  //   "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
  //   "@angular/material/snack-bar": { singleton: true, strictVersion: true, requiredVersion:'auto' }, 
 
  // })
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
