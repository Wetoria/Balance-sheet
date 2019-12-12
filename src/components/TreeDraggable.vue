<template>
  <el-tree
    :data="data"
    :props="{
      label: 'name',
    }"
    node-key="key"
    default-expand-all
    draggable
  >
    <template v-slot="{ node, data }" v-if="$slots">
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
  },
  methods: {
  },
};
</script>
