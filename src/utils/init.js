import Vue from 'vue';
import utils from '@utils';
import lodash from 'lodash';

const { prototype } = Vue;

const electron = window.require('electron');
const isDev = process.env.NODE_ENV === 'development';


// init functions
const initAppData = () => {
  const { BASE_PATH, fileSys } = prototype;

  if (isDev) return;

  if (!fileSys.existsSync(BASE_PATH)) {
    fileSys.mkdirSync(BASE_PATH);
  }
};

const registerCommonComponent = () => {
  const upperFirst = lodash.upperFirst;
  const camelCase = lodash.camelCase;
  const requireComponent = require.context(
    '../components',
    true,
    /[A-Z]\w+\.(vue)$/
  );

  requireComponent.keys().forEach((path) => {
    const componentConfig = requireComponent(path);
    const componentName = upperFirst(
      camelCase(
        utils.getFileNameByPath(path)
      )
    );
    // Globally register the component
    Vue.component(componentName, componentConfig.default || componentConfig);
  });
};

const init = () => {
  Vue.prototype.isDev = isDev;
  Vue.prototype.electron = electron;
  Vue.prototype.$utils = utils;
  Vue.prototype._ = lodash;

  const { remote } = electron;
  // TODO: Write a default config file.
  // When start app at first time, write config file to next path.
  // After init config file, while starting app, read config file to init base path.
  const basePath = isDev ? '.' : `${remote.app.getPath('userData')}/data`;
  Vue.prototype.BASE_PATH = basePath;


  const fs = window.require('electron').remote.require('fs');
  Vue.prototype.fileSys = fs;

  initAppData();

  registerCommonComponent();
};

export default init;
