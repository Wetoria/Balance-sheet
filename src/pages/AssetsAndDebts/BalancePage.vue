<template>
  <div
    style="
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    "
  >
    <div
      style="
        display: block;
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
      "
    >
      <div
        style="
          width: 100%;
          height: 100%;
          position: absolute;
          overflow-y: scroll;
        "
      >
        <!-- TODO: tree -->
        <tree-draggable
          :data="detail.children"
          :expand-on-click-node="false"
        >
          <template v-slot="{ node, data }">
            <el-row
              style="
                width: 100%;
                padding: 5px 10px 5px 0;
              "
              type="flex"
              justify="space-between"
              align="middle"
            >
              <span style="max-width: 500px;">
                <b-input v-model="data.name" />
              </span>
              <span style="display: flex; align-items: center;">
                <b-input v-model="data.amount" style="width: 110px;" />
                <i
                  class="el-icon-circle-plus-outline"
                  style="margin-left: 5px;"
                  @click="emit('add', data)"
                ></i>
                <i
                  class="el-icon-remove-outline"
                  style="margin-left: 3px;"
                  @click="emit('remove', node.parent.data, data)"
                ></i>
              </span>
            </el-row>
          </template>
        </tree-draggable>
        <div
          style="
            width: 100%;
            height: 50px;
          "
        ></div>
      </div>

      <div
        style="
          height: 34px;
          border-radius: 20px;
          position: absolute;
          bottom: 10px;
          right: 20px;
          background: white;
          cursor: pointer;
          text-align: center;
        "
      >
        <i class="el-icon-circle-plus-outline" style="font-size: 34px;"></i>
      </div>
    </div>
    <info-panel>
      <template v-slot:left>
        <span>{{ detail.name }}</span>
      </template>
      <template v-slot:right>
        <span>{{ detail.amount }}</span>
      </template>
    </info-panel>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    detail: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    emit(eventName, ...args) {
      this.$emit(eventName, ...args);
    },
  },
};
</script>
