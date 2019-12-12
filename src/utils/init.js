import Vue from 'vue';
import utils from '@utils';

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

const init = () => {
  setEnv();
  setElectron();
  setBasePath();

  Vue.prototype.$utils = utils;

  mountFS();

  initAppData();
};

export default init;
