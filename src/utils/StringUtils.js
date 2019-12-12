const getFileNameByPath = (path) => {
  const pattern = /^(\.|\/)(.*)\.\w+$/;
  if (pattern.test(path)) {
    const lastSlashIndex = path.lastIndexOf('/');
    const lastDotIndex = path.lastIndexOf('.');
    return path.substr(lastSlashIndex + 1, lastDotIndex - lastSlashIndex);
  }
  throw new Error(`${path} is not a path`);
};


export default {
  getFileNameByPath,
};
