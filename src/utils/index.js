import StringUtils from './StringUtils';

const utils = {
  StringUtils,
};

function registerAllUtils() {
  const requireUtils = require.context(
    './',
    true,
    /[^(index)|(init)|(StringUtils)]\.js$/
  );

  requireUtils.keys().forEach((path) => {
    const util = requireUtils(path);
    const utilName = StringUtils.getFileNameByPath(path);
    utils[utilName] = {
      ...util.default,
    };
  });
}

registerAllUtils();

export default utils;
