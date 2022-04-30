<template>
  <div class="container p-0 mt-5">
    <div>
      <paginate
        :per="8"
        ref="paginator"
        class="row mt-5 gy-5"
        name="items"
        :list="items"
      >
        <!-- products-view   -->
        <div class="col-3 p-4 mt-5">
          <div class="head-title text-center w-100">
            <h1>Filter Products By</h1>
          </div>
          <div class="categories mt-5">
            <h5 class="pb-2 text-black text-center">
              <strong>Categories</strong>
            </h5>
            <ul class="d-flex flex-column gap-2 w-100">
              <div class="input-search w-100">
                <input
                  type="text"
                  :placeholder="$t('search-header.input-placeHolder')"
                  @keyup="fLangs"
                  ref="serx"
                  v-model="inputSearch"
                  style="outline: none"
                  class="w-100 border-0 shadow-sm p-2 my-3"
                />
              </div>
              <li
                v-for="filter in $t('filter')"
                :key="filter"
                class="d-flex flex-row gap-2 w-100 align-items-center"
              >
                <div class="form-check">
                  <input
                    :id="filter"
                    class="form-check-input"
                    type="checkbox"
                    :value="filter"
                    @click="() => filterPosts(filter)"
                  />
                </div>
                <div>
                  <label
                    :for="filter"
                    @click="() => filterPosts(filter)"
                    class="form-check-label"
                  >
                    {{ filter }}
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-9">
          <div class="row gy-3">
            <div
              v-for="(item, index) in paginated('items')"
              :key="index"
              class="col-lg-3"
            >
              <div
                class="veg-card rounded p-4 bg-white d-flex flex-column align-items-center justify-content-center"
              >
                <div class="img-veg-card">
                  <img class="pb-2 border-bottom" :src="item.image" alt="" />
                </div>
                <div class="text-start my-2 w-100">
                  <router-link :to="`/${$i18n.locale}/seeAll/${item.id}`">
                    <p>
                      <strong> {{ item.title.slice(0, 20) }}...</strong>
                    </p>
                  </router-link>

                  <h4 class="p-0 m-0">{{ item.price }} {{ $t("currency") }}</h4>
                  <h6>
                    <del>{{ item.del }} {{ $t("currency") }}</del>
                  </h6>
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
        </div>
      </paginate>
      <div class="my-2">
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
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
const filter = [
  "all",
  "vegtabiles",
  "fruits",
  "men",
  "elctro",
  "women",
  "fastfoods",
  "dariymilks",
];
export default {
  name: "Fruits-Vue",
  data() {
    return {
      items: [],
      paginate: ["items"],
      loading: true,
      resetData: [],
      filters: filter,
      inputSearch: "",
      checked: [],
    };
  },

  mounted() {
    this.loadPressRelease();
  },

  methods: {
    ...mapActions(["removeProduct", "aQuantity", "rQuantity", "addToCart"]),
    loadPressRelease() {
      axios
        .get(`allProducts`)
        .then((response) => {
          this.items = response.data;
          this.resetData = response.data;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    filterPosts(prod) {
      this.resetPosts();
      if (prod !== `${this.$t("filter")[0]}`) {
        this.items = this.items.filter((post) => {
          return post.category === prod;
        });
      } else if (prod === "") {
        prod = "";
      }
    },
    fLangs() {
      this.resetPosts();
      const re = new RegExp(this.inputSearch, "i");
      return (this.items = this.items.filter((lang) => lang.title.match(re)));
    },
    resetPosts() {
      this.items = this.resetData;
      if (this.inputSearch.length === 0) {
        this.inputSearch = "";
        this.$refs.paginator.goToPage(1);
        // window.location.reload();
      }
    },
    goToFirstPage() {
      if (this.$refs.paginator) {
        this.$refs.paginator.goToPage(1);
      }
    },
  },
  computed: {},
};
</script>

<style></style>
