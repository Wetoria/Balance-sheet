<template>
  <el-tree
    :data="data"
    :props="defaultProps"
    :node-key="nodeKey"
    :default-expand-all="defaultExpandAll"
    :draggable="draggable"
    v-bind="$attrs"
  >
    <template v-slot="{ node, data }" v-if="$scopedSlots.default">
      <slot v-bind:data="data" v-bind:node="node"></slot>
    </template>
  </el-tree>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    defaultProps: {
      default: () => ({
        label: 'name',
      }),
    },
    defaultExpandAll: {
      type: Boolean,
      default: true,
    },
    nodeKey: {
      type: String,
      default: 'key',
    },
    draggable: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
/deep/ .el-tree-node__content {
  height: auto;
}
</style>
