'use strict';

module.exports = {
  name: require('./package').name,

  isDevelopingAddon() {
    return true;
  },

  setupPreprocessorRegistry(type, registry) {
    registry.add('htmlbars-ast-plugin', {
      name: 'template-transform',
      plugin(env) {
        console.log('\n\nprocessing', env.moduleName, '\n');
        return { visitor: {} };
      },
    })
  }
};
