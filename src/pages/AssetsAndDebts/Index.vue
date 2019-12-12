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
      <balance-page :detail="{ label: 'test', amount: 123 }" />
      <balance-page
        :detail="{ label: 'test', amount: 123 }"
        style="
          border-left: 1px solid black;
        "
      >
        <info-panel>
          <template v-slot:left>
            <span>Test</span>
          </template>
          <template v-slot:right>
            <span>Test</span>
          </template>
        </info-panel>
        <info-panel>
          <template v-slot:left>
            <span>Test</span>
          </template>
          <template v-slot:right>
            <span>Test</span>
          </template>
        </info-panel>
      </balance-page>
    </el-row>
  </div>
</template>

<script>
import BalancePage from './BalancePage';

export default {
  components: {
    BalancePage,
  },
  methods: {
    handleSave() {

    },
  },
};
</script>
