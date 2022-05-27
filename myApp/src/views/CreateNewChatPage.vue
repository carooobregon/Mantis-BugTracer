<template>
  <div id="app" class="container">
    <sync-loader color="blue"></sync-loader>
  </div>
</template>

<script>
import SyncLoader from "vue-spinner/src/SyncLoader.vue";

export default {
  components: {
    SyncLoader,
  },
};
</script>

<style scoped>
.container {
  position: absolute;
  left: 50%;
  top: 50%;
}
</style>
