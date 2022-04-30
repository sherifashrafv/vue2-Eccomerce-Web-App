<template>
  <div class="header-custome p-5">
    <div class="container">
      <div class="row">
        <div class="d-flex flex-row justify-content-center">
          <router-link tag="div" class="logo" :to="`/${$i18n.locale}/Home`">
            <h5>
              {{ $t("search-header.logo") }}
            </h5>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header-Custome",
};
</script>
<style scoped>
.header-custome {
  background: #22313f;
}
.logo h5 {
  font-size: 25px;
  color: white;
}
.logo {
  position: relative;
  text-align: center;
}
</style>
