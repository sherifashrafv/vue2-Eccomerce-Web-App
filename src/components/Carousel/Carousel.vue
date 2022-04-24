<template>
  <div class="container">
    <carousel :autoplay="true" :nav="false" :items="1">
      <img src="../../assets/SliderImages/s2.jpg" />
      <img src="../../assets/SliderImages/s1.jpg" />
      <img src="../../assets/SliderImages/s3.jpg" />
      <img src="../../assets/SliderImages/s3.jpg" />
      <img src="../../assets/SliderImages/s3.jpg" />
      <img src="../../assets/SliderImages/s3.jpg" />
    </carousel>
  </div>
</template>
<script>
import carousel from "vue-owl-carousel";

export default {
  name: "App",
  components: {
    carousel,
  },
};
</script>
<style scoped>
>>> .owl-carousel.owl-loaded {
  position: relative !important;
}
>>> .owl-theme .owl-dots {
  position: absolute !important;
  top: 5% !important;
  left: 50% !important;
  transform: translate(-48%, -50%) !important;
  display: flex;
  width: 100%;
}
>>> .owl-theme .owl-dots .owl-dot.active span {
  background: #1e8bc3;
}
>>> .owl-theme .owl-dots .owl-dot span {
  background: #ddd;
}

>>> .owl-item img {
  max-height: 100%;
}
@media (max-width: 767.98px) {
  .container,
  .container-fluid,
  .container-xxl,
  .container-xl,
  .container-lg,
  .container-md,
  .container-sm {
    width: 100% !important;
    padding-right: var(--bs-gutter-x, 0) !important;
    padding-left: var(--bs-gutter-x, 0) !important;
    margin-right: 0 !important;
    margin-left: 0 !important;
    max-width: 100% !important;
  }
}
</style>
