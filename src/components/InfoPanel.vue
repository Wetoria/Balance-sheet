<template>
  <el-row
    type="flex"
    align="middle"
    :style="{
      height: `${height}`,
    }"
  >
    <el-col :span="12">
      <slot name="left"></slot>
    </el-col>
    <el-col :span="12">
      <slot name="right"></slot>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    height: {
      default: '70px',
    },
  },
};
</script>
