<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="bg-white rounded mt-3 p-2 w-100">
            <div v-if="$i18n.locale === 'ar'" class="imag-banner-mobile-img">
              <img
                class="w-100 rounded"
                src="../../assets/Mobile&Tablet/mobile-ar.jpg"
                alt=""
              />
            </div>
            <div v-else class="imag-banner-mobile-img">
              <img
                class="w-100 rounded"
                src="../../assets/Mobile&Tablet/mobile-en.jpg"
                alt=""
              />
            </div>
          </div>
          <div
            class="show-all-tab p-3 bg-tabs-kids my-3 d-flex flex-row justify-content-between"
          >
            <div>
              <h5>{{ $t("moblieAndTablets.bgTitle") }}</h5>
            </div>
            <div>
              <h5>
                <router-link
                  class="text-decoration-none text-uppercase text-black"
                  :to="{ path: 'AllProducts' }"
                  @click.native="Up()"
                >
                  {{ $t("moblieAndTablets.bgLink") }}
                  <i class="fa-solid fa-chevron-right"></i>
                </router-link>
              </h5>
            </div>
          </div>
          <VueSlickCarousel
            v-if="tablet.length > 0"
            class="p-0 mb-4"
            v-bind="settings"
          >
            <div
              v-for="item in tablet"
              :key="item.id"
              class="card-electro p-3 d-flex flex-column bg-white align-items-center"
            >
              <router-link
                class="text-black"
                :to="`/${$i18n.locale}/tablet/${item.id}`"
              >
                <div class="electro-image">
                  <img :src="item.image" alt="" />
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
            class="show-all-tab p-3 bg-tabs-kids my-3 d-flex flex-row justify-content-between"
          >
            <div>
              <h5>{{ $t("moblieAndTablets.bgTitle") }}</h5>
            </div>
            <div>
              <h5>
                <router-link
                  class="text-decoration-none text-uppercase text-black"
                  :to="{ path: 'AllProducts' }"
                  @click.native="Up()"
                >
                  {{ $t("moblieAndTablets.bgLink") }}
                  <i class="fa-solid fa-chevron-right"></i>
                </router-link>
              </h5>
            </div>
          </div>
          <VueSlickCarousel
            v-if="mobiles.length > 0"
            class="p-0 mb-4"
            v-bind="settings"
          >
            <div
              v-for="item in mobiles"
              :key="item.id"
              class="card-electro p-3 d-flex flex-column bg-white align-items-center"
            >
              <router-link
                class="text-black"
                :to="`/${$i18n.locale}/mobile/${item.id}`"
              >
                <div class="electro-image">
                  <img :src="item.image" alt="" />
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
          <h1 class="text-center pb-3">
            {{ $t("moblieAndTablets.shopByBrand") }}
          </h1>
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
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import { mapActions } from "vuex";
export default {
  name: "Health-Bueaty",
  metaInfo() {
    return {
      title: `${this.$t("routes.mobile")} - ${this.$t("routes.title")}`,
    };
  },
  components: {
    // Flickity,
    VueSlickCarousel,
  },
  data() {
    return {
      mobiles: [],
      tablet: [],
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
    this.getMobiles();
    this.getTablets();
  },
  methods: {
    ...mapActions(["Up"]),
    getMobiles() {
      axios.get("mobile").then((res) => {
        this.mobiles = res.data;
      });
    },
    getTablets() {
      axios.get("tablet").then((res) => {
        this.tablet = res.data;
      });
    },
  },
};
</script>

<style></style>
