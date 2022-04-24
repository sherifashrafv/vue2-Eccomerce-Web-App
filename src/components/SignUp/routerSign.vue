<template>
  <div>
    <Transition name="fade">
      <router-view />
    </Transition>
    <div class="container">
      <div class="router-links-sign-up">
        <ul
          class="d-flex flex-row gap-4 justify-content-center pb-4 list-unstyled"
        >
          <li>
            <router-link
              class="text-decoration-none fs-5 text-uppercase"
              exact
              :to="{ name: 'default' }"
              >{{ $t("SignRouter.sign") }}</router-link
            >
          </li>
          <li>
            <router-link
              class="text-decoration-none fs-5 text-uppercase"
              :to="{ name: 'login' }"
              >{{ $t("SignRouter.login") }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "router-sign",
};
</script>
<style scoped>
.router-links-sign-up {
  width: 700px;
  margin: auto;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
  transform: translateX(0%);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-20%);
}
a.text-decoration-none {
  color: black;
}
a.text-decoration-none.router-link-exact-active.router-link-active {
  color: #1e8bc3;
}
</style>
