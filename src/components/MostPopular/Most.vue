<template>
  <div>
    <div class="bestProducts mt-3">
      <div class="container">
        <div class="row">
          <div class="title">
            <h3>{{ $t("productsMost.title") }}</h3>
          </div>
        </div>
        <div class="border-bottom mt-3"></div>
        <!-- Sc2 -->
        <div class="row mt-1 g-3">
          <div
            v-for="product in products.slice(0, 4)"
            :key="product.id"
            class="col-lg-3 col-md-6 col-sm-12"
          >
            <div class="border">
              <div class="card-x d-flex align-items-center flex-column nowrap">
                <div class="image">
                  <img :src="product.image" alt="" srcset="" />
                </div>
                <router-link
                  @click.native="Up()"
                  :to="`/${$i18n.locale}/product/${product.id}`"
                  class="text-decoration-none my-3 product-title w-100"
                >
                  <div class="text-black">
                    <h6>{{ product.title }}</h6>
                  </div>
                </router-link>
                <div
                  class="stars-rating d-flex gap-2 flex-row align-items-center"
                >
                  <div class="buys">
                    {{ product.rating }}
                    {{ $t("buyer") }}
                  </div>
                  <star-rating
                    :show-rating="false"
                    :rating="3.5"
                    :rtl="true"
                    v-bind:increment="0.5"
                    v-bind:max-rating="5"
                    active-color="#f39c12"
                    v-bind:star-size="15"
                  >
                  </star-rating>
                </div>
                <div
                  class="price d-flex align-items-center flex-row align-self-end mt-2"
                >
                  <span class="">{{ product.price }}</span>
                  <span class="">
                    {{ $t("currency") }}
                  </span>
                </div>
                <button @click="addToCar(product)" class="btn btn-primary mt-3">
                  {{ $t("addToCart") }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Sc2 -->
  </div>
</template>
<script>
import { mapActions } from "vuex";
import axios from "axios";
import StarRating from "vue-star-rating";
export default {
  components: {
    StarRating,
  },
  name: "Best-Products",
  data() {
    return {
      products: [],
    };
  },
  async mounted() {
    await axios.get("Products").then((res) => (this.products = res.data));
  },
  methods: {
    ...mapActions(["addToCart"]),
    Up() {
      window.scroll(0, 0);
    },
    addToCar(prod) {
      this.addToCart(prod);
    },
  },
};
</script>
<style scoped>
.image {
  overflow: hidden;
}
.image image {
  max-width: 100%;
}
.border {
  transition: 0.3s ease-in-out;
  padding: 10px;
}
button.btn.btn-primary.mt-3 {
  display: none;
  transition: 0.3s ease-in-out;
}
.border:hover {
  background: white;
}
.border:hover button.btn.btn-primary {
  display: block;
}
.card-x {
  background: none;
  width: 100%;
  padding: 15px;
  height: 500px;
  overflow: hidden;
}
.col-lg-3 {
  /* padding: 0 !important; */
  gap: 20px !important;
}
.custom-text {
  font-weight: bold;
  font-size: 1.9em;
  border: 1px solid #cfcfcf;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  color: #999;
  background: #fff;
}
</style>
