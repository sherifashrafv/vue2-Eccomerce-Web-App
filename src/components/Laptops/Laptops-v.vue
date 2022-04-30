<template>
  <div>
    <div class="container">
      <div class="row align-items-center g-3">
        <div class="col-12">
          <div class="veg-heading mt-3 bg-white p-3">
            <h1 class="text-capitalize mt-5 text-end text-black fw-bold">
              {{ $t("laptops.title") }}
            </h1>
            <p class="descrption-head-veg my-4 text-end fs-6">
              {{ $t("laptops.desc") }}
            </p>
          </div>
        </div>
        <div class="col-12">
          <div class="img-banner-market mb-5">
            <img
              src="../../assets/Laptops/ef8083bfe79088dc00bd8eca9c821cd5.jpg"
              alt=""
            />
          </div>
        </div>

        <div v-if="loading">
          <div class="bg-white p-2 d-flex align-items-center">
            <strong>Loading...</strong>
            <div
              class="spinner-border ms-auto"
              role="status"
              aria-hidden="true"
            ></div>
          </div>
        </div>
        <div v-else>
          <paginate
            :per="8"
            ref="paginator"
            class="row gy-3"
            name="items"
            :list="items"
          >
            <!-- products-view   -->
            <div
              v-for="(item, index) in paginated('items')"
              :key="index"
              class="col-lg-3"
            >
              <div
                class="veg-card p-4 bg-white d-flex flex-column align-items-center justify-content-center"
              >
                <div class="img-veg-card">
                  <img :src="item.image" alt="" />
                </div>
                <div class="d-flex mt-2 w-100 flex-row justify-content-between">
                  <div>
                    <router-link
                      class="text-black"
                      :to="`/${$i18n.locale}/laptop/${item.id}`"
                    >
                      <h6>
                        <strong>
                          {{ item.title.slice(0, 15) }}
                          .....
                        </strong>
                      </h6>
                    </router-link>
                  </div>
                  <div class="d-flex flex-row-reverse">
                    <h5>
                      <strong class="price-veg">
                        {{ item.price }}
                      </strong>
                    </h5>
                    <h5>
                      <strong class="price-veg">
                        {{ $t("currency") }}
                      </strong>
                    </h5>
                  </div>
                </div>
                <div class="item-size-veg align-self-start pt-2">
                  <h5 class="text-muted">{{ item.size }}</h5>
                </div>
                <div
                  class="d-flex flex-row align-self-start align-items-center w-100 justify-content-between mt-3"
                >
                  <div>
                    <ul
                      class="d-flex align-self-start flex-row justify-content-between gap-3"
                    >
                      <li class="incr">-</li>
                      <li class="quantity">0</li>
                      <li class="decr">+</li>
                    </ul>
                  </div>
                  <div>
                    <button @click="addToCar(item)" class="btn btn-primary">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </paginate>
          <div
            class="d-flex w-100 flex-row justify-content-between align-items-center"
          >
            <div>
              <span v-if="$refs.paginator">
                Viewing {{ $refs.paginator.pageItemsCount }} results
              </span>
            </div>
            <div>
              <paginate-links for="items" :limit="3" :show-step-links="true">
              </paginate-links>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div
              class="img-market w-100 my-5 d-flex flex-row justify-content-between align-items-center"
            >
              <div class="orginal-market-image">
                <img
                  class="img-fluid laptop-image"
                  src="../../assets/Laptops/lap1.png"
                  alt=""
                />
              </div>
              <div class="market-body bg-white p-2 rounded">
                <h5 class="fw-bold text-black">
                  {{ $t("laptops.title2") }}
                </h5>
                <p class="market-descr text-black">
                  {{ $t("laptops.desc2") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: "laptops-Vue",
  metaInfo() {
    return {
      title: `${this.$t("routes.laptop")} - ${this.$t("routes.title")}`,
    };
  },
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
    ...mapActions(["addToCart"]),

    loadPressRelease() {
      axios
        .get(`laptops`)
        .then((response) => {
          this.items = response.data;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    addToCar(prod) {
      this.addToCart(prod);
    },
  },
  components: {},
};
</script>
