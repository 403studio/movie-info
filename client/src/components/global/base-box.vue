<template>
  <div :class="className">
    <div class="box-header" :class="{'with-border': headerBorder}">
      <div class="box-title">{{ title }}</div>
      <slot name="title-addon"></slot>
    </div>
    <div class="box-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseBox',
  props: {
    type: {
      type: String,
      default: 'info'
    },
    title: {
      type: String,
      required: true
    },
    headerBorder: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    className () {
      return ['box', 'box-' + this.type]
    }
  }
}
</script>

<style>

</style>
