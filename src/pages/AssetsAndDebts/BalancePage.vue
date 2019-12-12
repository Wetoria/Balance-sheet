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
        <tree-draggable />
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
        <span>{{ detail.label }}</span>
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
};
</script>
