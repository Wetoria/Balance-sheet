import Vue from 'vue';
import BalanceDetail from '../entities/BalanceDetail';

class BalanceService {
  initAssetsAndDebts = () => {
    let fileContent = {};
    const { BASE_PATH, fileSys } = Vue.prototype;
    try {
      const fileUrl = `${BASE_PATH}/AND.json`;
      fileContent = JSON.parse(fileSys.readFileSync(fileUrl));
    } catch (err) {
      window.console.log(err);
    }
    const assetsAndDebts = {
      assets: new BalanceDetail(fileContent.assets),
      debts: new BalanceDetail(fileContent.debts),
    };
    return assetsAndDebts;
  }

  removeChild = (parent, child) => {
    if (this.isNotDetail(parent) || this.isNotDetail(child)) return;
    parent.removeChild(child);
  }

  addChild = (data) => {
    data.addNewSubDetail();
  }

  isDetail = object => object instanceof BalanceDetail;

  isNotDetail = object => !this.isDetail(object);
}

export default new BalanceService();
