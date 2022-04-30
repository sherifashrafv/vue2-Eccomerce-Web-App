<template>
  <div>
    <div class="container p-0">
      <div class="row align-items-center g-3">
        <div class="col-12">
          <div class="veg-heading mt-3">
            <div class="veg-title d-flex flex-row justify-content-end">
              <h1 class="text-uppercase text-end">
                {{ $t("superMarket.title") }}
              </h1>
            </div>
            <p class="descrption-head-veg my-4 text-end">
              {{ $t("superMarket.desription") }}
            </p>
          </div>
        </div>
        <div class="col-12">
          <div class="img-banner-market mb-5">
            <img
              src="../../assets/Makret/blog-supermarket-inventory-management-1.jpg.optimal.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="nav-bar-routers col-12">
          <ul class="d-flex flex-row justify-content-between flex-wrap">
            <router-link
              role="button"
              tag="li"
              :to="{ name: 'fruits' }"
              :class="[
                $route.fullPath === '/SuperMarkets'
                  ? ''
                  : 'market-links-routes d-flex flex-row align-items-center gap-2',
              ]"
            >
              <div class="img-pics-market">
                <img src="../../assets/Makret/fruit.png" alt="" />
              </div>
              <h2>{{ $t("market.fruits") }}</h2>
            </router-link>

            <router-link
              role="button"
              tag="li"
              :to="{ name: 'meats' }"
              :class="[
                $route.fullPath === 'meats'
                  ? ''
                  : 'market-links-routes d-flex flex-row align-items-center gap-2',
              ]"
            >
              <div class="img-pics-market">
                <img src="../../assets/Makret/steak.png" alt="" />
              </div>
              <h2>{{ $t("market.meats") }}</h2>
            </router-link>

            <router-link
              role="button"
              tag="li"
              :to="{ name: 'Drinks' }"
              :class="[
                $route.fullPath === 'Drinks'
                  ? ''
                  : 'market-links-routes d-flex flex-row align-items-center gap-2',
              ]"
            >
              <div class="img-pics-market">
                <img src="../../assets/Makret/soft-drink.png" alt="" />
              </div>
              <h2>{{ $t("market.drinks") }}</h2>
            </router-link>

            <router-link
              role="button"
              tag="li"
              :to="{ name: 'FastFoods' }"
              class="market-links-routes d-flex flex-row align-items-center gap-2"
              :class="[
                $route.fullPath === 'FastFoods'
                  ? ''
                  : 'market-links-routes d-flex flex-row align-items-center gap-2',
              ]"
            >
              <div class="img-pics-market">
                <img src="../../assets/Makret/fastfood.png" alt="" />
              </div>
              <h2>{{ $t("market.fastFoods") }}</h2>
            </router-link>

            <router-link
              role="button"
              tag="li"
              :to="{ name: 'DairyProducts' }"
              :class="[
                $route.fullPath === 'DairyProducts'
                  ? ''
                  : 'market-links-routes d-flex flex-row align-items-center gap-2',
              ]"
            >
              <div class="img-pics-market">
                <img src="../../assets/Makret/milk-products.png" alt="" />
              </div>
              <h2>{{ $t("market.dairyproducts") }}</h2>
            </router-link>
          </ul>
        </div>
        <div>
          <router-view></router-view>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div
            class="img-market w-100 my-5 d-flex justify-content-between align-items-center"
          >
            <div class="orginal-market-image">
              <img
                class="img-fluid"
                src="../../assets/Makret/market2.jpg"
                alt=""
              />
            </div>
            <div class="market-body bg-white p-3 rounded">
              <h5 class="fw-bold text-black">
                {{ $t("superMarket.feetTitle") }}
              </h5>
              <p class="market-descr text-muted">
                {{ $t("superMarket.desription") }}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      items: [],
      paginate: ["items"],
      loading: true,
    };
  },

  mounted() {
    this.loadPressRelease();
  },

  methods: {
    loadPressRelease() {
      axios
        .get(`vegtabiles`)
        .then((response) => {
          this.items = response.data;
        })
        .then(() => {
          this.loading = false;
        });
    },
  },
  metaInfo() {
    return {
      title: `${this.$t("routes.superMarkets")} - ${this.$t("routes.title")}`,
    };
  },
};
</script>
