<template>
  <el-button :size="size" v-bind="$props" v-on="$listeners">
    <slot></slot>
  </el-button>
</template>

<script>
export default {
  props: {
    size: {
      default: 'small',
    },
  },
};
</script>
