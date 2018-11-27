<template>
    <div class="clearFix">
      <input
        readonly='readonly'
        class="keyWord"
        @click="showList"
        :value = " title"
      />
      <input type="button" value="GO">
      <span></span>
    </div>
</template>

<script>
export default {
  props: ["isShow", "val"],
  computed: {
    initshow() {
      return this.isShow;
    },
    title() {
      return this.$store.state.title;
    }
  },
  methods: {
    showList() {
      console.log(0);
      // 触发一个自定义事件   update 是vue内部定义的
      this.$emit("update:isShow", !this.initshow);
    }
  }
};
</script>
