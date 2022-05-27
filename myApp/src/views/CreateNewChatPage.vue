<template>
  <div id="app" class="container">
    <sync-loader color="blue"></sync-loader>
  </div>
</template>

<script>
import SyncLoader from "vue-spinner/src/SyncLoader.vue";
import { Auth } from "aws-amplify";

export default {
  created() {
    const project_id = this.$route.params.project_id;
    Auth.currentAuthenticatedUser()
      .then(() => {
        // SIGNED IN -> create new chat
      })
      .catch(() => {
        localStorage.setItem("project_id", project_id);
        localStorage.setItem("pending_new_chat", true);
        this.$router.push({ name: "Auth" });
      });
  },
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
