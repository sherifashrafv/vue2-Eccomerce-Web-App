<template>
  <div class="mt-4">
    <div v-if="search.length > 0">
      <div v-for="(product, i) in blogs" :key="i">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <div
                class="image-main d-flex justify-content-center flex-column align-items-center"
              >
                <div class="image-product w-100">
                  <img
                    v-img:group
                    class="w-100 rounded"
                    :src="product.image"
                    alt=""
                  />
                </div>
                <div class="m-3 d-flex flex-row gap-2 align-items-center">
                  <div v-for="(img, i) in product.images" :key="i">
                    <img
                      v-img:group
                      class="imag-slider rounded"
                      :src="img.src"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-7">
              <div
                class="h-100 d-flex flex-column justify-content-center align-items-end p-2"
              >
                <div class="info">
                  <div class="head">
                    <h4>{{ product.title }}</h4>
                  </div>
                  <div
                    class="price mt-3 justify-content-end gap-2 d-flex flex-row"
                  >
                    <span>{{ product.currency }}</span>
                    <div>
                      <h4>
                        {{ product.price }}
                      </h4>
                    </div>
                    <div>
                      <h4>
                        <del style="color: red">{{ product.del }}</del>
                      </h4>
                    </div>
                    <div class="rating">
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
                  </div>
                  <div class="details mt-2">
                    <h5>:التفاصيل</h5>
                    <div class="body mt-2">
                      <p class="">{{ product.details }}</p>
                    </div>
                  </div>
                  <div
                    class="quantity mt-2 align-items-center justify-content-end gap-2 d-flex flex-row"
                  >
                    <div class="d-flex flex-row gap-2 align-items-center">
                      <button class="btn btn-dark">+</button>
                      <div>{{ product.quantity }}</div>
                      <button class="btn btn-success">-</button>
                    </div>
                    <div class="button w-100">
                      <button class="btn btn-primary">Add To Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="container">
        <div class="row">
          <div class="error-found">
            <div
              class="error-box d-flex flex-column align-items-center justify-content-center"
            >
              <h4>We Got No Products</h4>
              <h3>
                would You Like To Go To
                <router-link to="/" class="text-decoration-none">
                  <span class="home-page">Home Page</span>
                </router-link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import StarRating from "vue-star-rating";
import { mapActions } from "vuex";
export default {
  name: "search-value",
  data() {
    return {
      search: "",
      blogs: [],
    };
  },
  async mounted() {
    const search = localStorage.getItem("search-val");
    if (search) {
      this.search = JSON.parse(search);
      // console.log(search);
      // console.log(this.search);
    } else {
      console.log("no");
      this.redirectTo({ val: "Home" });
    }
    await axios
      .get("allProducts")
      .then((res) => ((this.blogs = res.data), console.log(this.blogs)));
  },
  computed: {
    filter() {
      return this.blogs.filter((product) => (product.title = this.search));
    },
  },
  methods: {
    ...mapActions(["redirectTo"]),
  },
  components: {
    StarRating,
  },
};
</script>

<style scoped>
.image-main {
  width: 100%;
}
.imag-slider {
  width: 100px;
}
.details {
  width: 400px;
}
.info {
  height: fit-content !important;
}
.error-box {
  width: 550px;
  height: 350px;
  margin: auto;
  text-align: center;
}
.home-page {
  color: red;
}
</style>
