<template>
  <div v-if="user">user-not-found</div>
  <UserNotFound v-else />
</template>

<script>
import UserNotFound from "../Login/Login.vue";
export default {
  name: "final-shopping",
  data() {
    return {
      user: false,
    };
  },
  mounted() {
    const user = localStorage.getItem("user-info");
    if (!user) {
      this.user = false;
    } else {
      this.user = true;
    }
  },
  components: {
    UserNotFound,
  },
};
</script>

<style></style>
