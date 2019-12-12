let temps = {};

function registerAllUtils() {
  const requireUtils = require.context(
    './',
    true,
    /[^(index)|(init)]\.js$/
  );

  requireUtils.keys().forEach((path) => {
    const util = requireUtils(path);
    temps = {
      ...temps,
      ...util.default,
    };
  });
}

registerAllUtils();

const utils = temps;

export default utils;
