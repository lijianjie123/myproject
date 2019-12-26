<template>
    <svg :class = "svgClass" aria-hidden = "true" v-on = "$listeners">
        <use :xlink:href = "iconName"></use>
    </svg>
</template>
<script>
export default {
  name: 'svgicon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`
    },
    svgClass() {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    }
  }
}
</script>

<style>

</style>
