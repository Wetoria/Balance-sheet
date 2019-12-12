import Vue from 'vue';

const { BASE_PATH, fileSys } = Vue.prototype;

const writeToFile = (path, content) => new Promise((resolve, reject) => {
  fileSys.writeFile(path, content, (err) => {
    if (err) {
      reject(err);
    } else {
      resolve('wrote');
    }
  });
});

const writeToDataDir = (fileName, content) => writeToFile(`${BASE_PATH}/${fileName}`, content);

const readJsonFile = (path) => {
  const content = JSON.parse(fileSys.readFileSync(path));
  return content;
};

export default {
  writeToFile,
  writeToDataDir,
  readJsonFile,
};
