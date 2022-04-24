<template>
  <div>
    <div class="container p-0">
      <div class="row">
        <!-- Free Shipping Nationwide  -->
        <div class="col-12 p-0">
          <div class="img-banner-electro bg-white rounded mt-3 p-2 w-100">
            <div class="imag-banner-electro-img"></div>
          </div>
          <div
            class="show-all-tab p-3 bg-tabs my-3 d-flex flex-row justify-content-between"
          >
            <div>
              <h5>Free Shipping Nationwide | On orders above 250EGP</h5>
            </div>
            <div>
              <h5>
                <router-link
                  class="text-decoration-none text-uppercase text-black"
                  :to="{ name: 'SeeAll' }"
                  >See All
                  <i class="fa-solid fa-chevron-right"></i>
                </router-link>
              </h5>
            </div>
          </div>
        </div>
        <VueSlickCarousel
          v-if="collection.length > 0"
          class="p-0 mb-4"
          v-bind="settings"
        >
          <div
            v-for="item in collection"
            :key="item.id"
            class="card-electro p-3 d-flex bg-white flex-column align-items-center"
          >
            <router-link
              class="text-black"
              :to="`/${$i18n.locale}/product/${item.id}`"
            >
              <div class="electro-image">
                <img :src="item.img" alt="" />
              </div>
              <p>
                {{ item.title.slice(0, 35) }}
                ...
              </p>
              <h4 class="pt-2 align-self-end">
                <span>{{ item.price }}</span>
                {{ $t("currency") }}
              </h4>
              <p class="text-muted text-decoration-line-through align-self-end">
                {{ $t("currency") }}{{ item.firstPrice }}
              </p>
            </router-link>
          </div>
        </VueSlickCarousel>
        <!-- end -->
        <!-- Get-Televisions-->
        <div class="col-12 p-0">
          <div
            class="show-all-tab p-3 bg-tabs my-3 d-flex flex-row justify-content-between"
          >
            <div>
              <h5>Televisions</h5>
            </div>
            <div>
              <h5>
                <router-link
                  class="text-decoration-none text-uppercase text-black"
                  :to="{ name: 'SeeAll' }"
                  >See All
                  <i class="fa-solid fa-chevron-right"></i>
                </router-link>
              </h5>
            </div>
          </div>
        </div>
        <VueSlickCarousel
          v-if="collection.length > 0"
          class="p-0 mb-4"
          v-bind="settings"
        >
          <div
            v-for="item in collection"
            :key="item.id"
            class="card-electro p-3 d-flex rounded shadow-sm bg-white flex-column align-items-center"
          >
            <router-link
              class="text-black"
              :to="`/${$i18n.locale}/product/${item.id}`"
            >
              <div class="electro-image">
                <img :src="item.img" alt="" />
              </div>
              <p>
                {{ item.title.slice(0, 30) }}
                ...
              </p>
              <h4 class="pt-2 align-self-end">
                <span>{{ item.price }}</span>
                {{ $t("currency") }}
              </h4>
              <p class="text-muted text-decoration-line-through align-self-end">
                {{ $t("currency") }}{{ item.firstPrice }}
              </p>
            </router-link>
          </div>
        </VueSlickCarousel>
        <!-- end -->
        <div class="bg-white p-2 shadow-sm rounded mb-3">
          <h1 class="text-center pb-3">Shop By Brand</h1>
          <!-- banners -->
          <div class="icons-electro d-flex flex-row justify-content-between">
            <div class="">
              <img class="" src="../../assets/Electorincs/1.png" alt="" />
            </div>
            <div class="">
              <img class="" src="../../assets/Electorincs/2.png" alt="" />
            </div>
            <div class="">
              <img class="" src="../../assets/Electorincs/3.png" alt="" />
            </div>
            <div class="">
              <img class="" src="../../assets/Electorincs/4.png" alt="" />
            </div>
            <div class="">
              <img class="" src="../../assets/Electorincs/5.png" alt="" />
            </div>
            <div class="">
              <img class="" src="../../assets/Electorincs/6.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import Flickity from "vue-flickity";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "Electro-vue",
  components: {
    // Flickity,
    VueSlickCarousel,
  },
  data() {
    return {
      collection: [],
      settings: {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
        ],
      },
    };
  },
  mounted() {
    this.getCollection();
  },
  methods: {
    getCollection() {
      axios.get("collection").then((res) => {
        this.collection = res.data;
      });
    },
  },
};
</script>

<style></style>
