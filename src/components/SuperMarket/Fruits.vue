<template>
  <div class="container p-0">
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
            <div class="d-flex w-100 flex-row justify-content-between">
              <div>
                <h5>
                  <strong> {{ item.title }}</strong>
                </h5>
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
                  class="d-flex align-self-start flex-lg-row flex-md-column justify-content-between gap-3"
                >
                  <li @click="rQuantity(item.id)" class="incr">-</li>
                  <li class="quantity">{{ item.quantity }}</li>
                  <li @click="aQuantity(item.id)" class="decr">+</li>
                </ul>
              </div>
              <div>
                <button
                  @click="addToCart(item)"
                  class="btn btn-primary custome-add-toCart"
                >
                  {{ $t("addToCart") }}
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
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
export default {
  name: "Fruits-Vue",
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
    ...mapActions(["removeProduct", "aQuantity", "rQuantity", "addToCart"]),

    loadPressRelease() {
      axios
        .get(`vegtabiles`)
        .then((response) => {
          this.items = response.data;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    rQuantity(idx, index) {
      this.rQuantity({ idx, index });
    },
    aQuantity(idx) {
      this.aQuantity(idx);
    },
    addToCar(prod) {
      this.addToCart(prod);
    },
  },
};
</script>

<style></style>
