<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="img-banner-electro bg-white rounded mt-3 p-2 w-100">
            <div class="imag-banner-bueaty-img"></div>
          </div>
          <div
            class="show-all-tab p-3 bg-tabs-bueaty-1 my-3 d-flex flex-row justify-content-between"
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
          <VueSlickCarousel
            v-if="collection.length > 0"
            class="p-0 mb-4"
            v-bind="settings"
          >
            <div
              v-for="item in collection"
              :key="item.id"
              class="card-electro p-3 d-flex flex-column bg-white align-items-center"
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
                <p
                  class="text-muted text-decoration-line-through align-self-end"
                >
                  {{ $t("currency") }}{{ item.firstPrice }}
                </p>
              </router-link>
            </div>
          </VueSlickCarousel>
        </div>
        <div class="col-12">
          <div
            class="show-all-tab p-3 bg-tabs-bueaty-2 my-3 d-flex flex-row justify-content-between"
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
          <VueSlickCarousel
            v-if="collection.length > 0"
            class="p-0 mb-4"
            v-bind="settings"
          >
            <div
              v-for="item in collection"
              :key="item.id"
              class="card-electro p-3 d-flex flex-column bg-white align-items-center"
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
                <p
                  class="text-muted text-decoration-line-through align-self-end"
                >
                  {{ $t("currency") }}{{ item.firstPrice }}
                </p>
              </router-link>
            </div>
          </VueSlickCarousel>
        </div>
        <div class="bg-white p-2 shadow-sm rounded mb-3">
          <h1 class="text-center pb-3">Shop By Brand</h1>
          <!-- banners -->
          <div class="icons-bueaty row">
            <div class="col-2">
              <img
                class=""
                src="../../assets/Beauty/bueaty-brand-1.png"
                alt=""
              />
            </div>
            <div class="col-2">
              <img
                class=""
                src="../../assets/Beauty/bueaty-brand-2.png"
                alt=""
              />
            </div>
            <div class="col-2">
              <img
                class=""
                src="../../assets/Beauty/bueaty-brand-3.png"
                alt=""
              />
            </div>
            <div class="col-2">
              <img
                class=""
                src="../../assets/Beauty/bueaty-brand-4.png"
                alt=""
              />
            </div>
            <div class="col-2">
              <img
                class=""
                src="../../assets/Beauty/bueaty-brand-5.png"
                alt=""
              />
            </div>
            <div class="col-2">
              <img
                class=""
                src="../../assets/Beauty/bueaty-brand-6.png"
                alt=""
              />
            </div>
            <div class="col-2">
              <img
                class=""
                src="../../assets/Beauty/bueaty-brand-7.png"
                alt=""
              />
            </div>
            <div class="col-2">
              <img
                class=""
                src="../../assets/Beauty/bueaty-brand-8.png"
                alt=""
              />
            </div>
            <div class="col-2">
              <img
                class=""
                src="../../assets/Beauty/bueaty-brand-9.png"
                alt=""
              />
            </div>
            <div class="col-2">
              <img
                class=""
                src="../../assets/Beauty/bueaty-brand-10.png"
                alt=""
              />
            </div>
            <div class="col-2">
              <img
                class=""
                src="../../assets/Beauty/bueaty-brand-11.png"
                alt=""
              />
            </div>
            <div class="col-2">
              <img
                class=""
                src="../../assets/Beauty/bueaty-brand-12.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
export default {
  name: "Health-Bueaty",
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
        autoplay: true,
        autoplaySpeed: 2000,
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
