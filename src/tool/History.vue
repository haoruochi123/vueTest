<template>
        <a-icon type="left" style="font-size: 3rem;" v-on:click="prev"/>
</template>

<script>
export default {
  name: "History",
  data() {
    return {};
  },
  methods: {
    prev() {
      this.$router.go(-1);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
