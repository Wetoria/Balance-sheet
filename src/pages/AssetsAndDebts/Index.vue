<template>
  <div
    style="
      width: 100%;
      height: 100%;
      background: #FFFFFF;
    "
  >
    <el-row type="flex" style="padding: 5px 20px;">
      <b-button @click="handleSave">保存</b-button>
    </el-row>
    <el-row
      type="flex"
      style="
        height: calc(100% - 42px);
      "
    >
      <balance-page
        :detail="assetsAndDebts.assets"
        @remove="onRemove"
        @add="onAdd"
      />
      <balance-page
        :detail="assetsAndDebts.debts"
        @remove="onRemove"
        @add="onAdd"
        style="
          border-left: 1px solid black;
        "
      >
        <info-panel>
          <template v-slot:left>
            <span style=" textAlign: center; ">所有者权益<br />(总资产-总负债)</span>
          </template>
          <template v-slot:right>
            <span>{{ ownersEquity }}</span>
          </template>
        </info-panel>
        <info-panel>
          <template v-slot:left>
            <span style=" textAlign: center; ">资产负债率<br />(总资产/总负债)</span>
          </template>
          <template v-slot:right>
            <span>{{ assetDebtsRatio }}</span>
          </template>
        </info-panel>
      </balance-page>
    </el-row>
  </div>
</template>

<script>
import balanceDetailService from '@domains/services/BalanceDetailService';
import BalancePage from './BalancePage';

export default {
  components: {
    BalancePage,
  },
  computed: {
    ownersEquity() {
      return this.statisticsRender((assets, debts) => (assets.amount - debts.amount).toFixed(2));
    },
    assetDebtsRatio() {
      return this.statisticsRender((assets, debts) => `${((debts.amount / assets.amount) * 100).toFixed(2)}%`);
    },
  },
  data() {
    return {
      assetsAndDebts: balanceDetailService.initAssetsAndDebts(),
    };
  },
  methods: {
    statisticsRender(callback) {
      const { assets, debts } = this.assetsAndDebts;
      if (!assets || !debts) return;
      if (this._.isFunction(callback)) {
        return callback(assets, debts);
      }
    },
    handleSave() {
    },
    onRemove(parent, child) {
      balanceDetailService.removeChild(parent, child);
    },
    onAdd(data) {
      balanceDetailService.addChild(data);
    },
  },
};
</script>
