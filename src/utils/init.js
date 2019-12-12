import Vue from 'vue';
import utils from '@utils';
import lodash from 'lodash';

const { prototype } = Vue;

const electron = window.require('electron');
const isDev = !!process.env.ELECTRON_START_URL;

// set attributes
const setEnv = () => {
  Vue.prototype.isDev = isDev;
};

const setElectron = () => {
  Vue.prototype.electron = electron;
};

const setBasePath = () => {
  const { remote } = electron;
  // TODO: Write a default config file.
  // When start app at first time, write config file to next path.
  // After init config file, while starting app, read config file to init base path.
  const basePath = isDev ? './' : `${remote.app.getPath('userData')}/data`;
  Vue.prototype.BASE_PATH = basePath;
};

// mount modules
const mountFS = () => {
  const fs = window.require('electron').remote.require('fs');
  Vue.prototype.fileSys = fs;
};

// init functions
const initAppData = () => {
  const { BASE_PATH, fileSys } = prototype;

  if (isDev) return;

  if (!fileSys.existsSync(BASE_PATH)) {
    fileSys.mkdirSync(BASE_PATH);
  }
};

const upperFirst = lodash.upperFirst;
const camelCase = lodash.camelCase;


const registerCommonComponent = () => {
  const requireComponent = require.context(
    '../components',
    true,
    /[A-Z]\w+\.(vue)$/
  );

  requireComponent.keys().forEach((path) => {
    const componentConfig = () => requireComponent(path);
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
  setEnv();
  setElectron();
  setBasePath();

  Vue.prototype.$utils = utils;

  mountFS();

  initAppData();

  registerCommonComponent();
};

export default init;
