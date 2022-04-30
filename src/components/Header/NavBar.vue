<template>
  <div>
    <!-- LocalSection -->
    <section
      class="background-blue p-3 d-md-block d-lg-block d-sm-none d-xs-none"
    >
      <div class="container">
        <div class="d-flex align-items-center flex-row justify-content-between">
          <!-- lang -->
          <div class="languages">
            <div class="dropdown">
              <button
                class="btn-custome dropdown-toggle d-flex flex-row gap-2 align-items-center text-white"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  v-if="$i18n.locale === 'ar'"
                  class="flag-switcher"
                  src="../../assets/Flags/lang_ar.png"
                  alt=""
                />
                <img
                  v-else
                  class="flag-switcher"
                  src="../../assets/Flags/lang_en.png"
                  alt=""
                />
                <p v-if="$i18n.locale === 'ar'">
                  {{ $t("languages.Arabic") }}
                </p>
                <p v-else>
                  {{ $t("languages.English") }}
                </p>

                <i class="fa-solid fa-caret-down text-white"></i>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li
                  @click="setlocale('ar')"
                  role="button"
                  class="d-flex p-2 flex-row align-items-center justify-content-between"
                >
                  <img
                    class="w-25"
                    src="../../assets/Flags/lang_ar.png"
                    alt=""
                  />
                  <span class="">{{ $t("languages.Arabic") }}</span>
                </li>
                <li
                  @click="setlocale('en')"
                  role="button"
                  class="d-flex p-2 flex-row align-items-center justify-content-between"
                >
                  <img
                    class="w-25"
                    src="../../assets/Flags/lang_en.png"
                    alt=""
                  />
                  <span class="">{{ $t("languages.English") }}</span>
                </li>
              </ul>
            </div>
          </div>
          <!-- end -->
          <!-- icon-delevry -->
          <div class="deliver-icons d-lg-block d-md-block d-sm-none text-white">
            <ul class="d-flex p-0 m-0 flex-row gap-2">
              <li class="d-flex gap-2 flex-row">
                <p>{{ $t("Deleviery.delve") }}</p>
                <span>
                  <i class="fa-solid fa-truck"></i>
                </span>
              </li>
              <li class="d-flex gap-2 flex-row">
                <p>{{ $t("Deleviery.repeat") }}</p>
                <span>
                  <i class="fa-solid fa-repeat"></i>
                </span>
              </li>
              <!--  -->
              <li class="d-flex gap-2 flex-row">
                <p>{{ $t("Deleviery.repeat") }}</p>
                <span>
                  <i class="fa-solid fa-dollar-sign"></i>
                </span>
              </li>
            </ul>
          </div>
          <!-- end-delevry -->
        </div>
      </div>
    </section>
    <!-- End -->
    <section class="search p-3">
      <div class="container p-0">
        <div>
          <!-- send-end -->
          <div class="search-nav d-flex flex-row gap-3 align-items-center">
            <!--  -->
            <div
              class="nav-info d-flex gap-1 flex-row justify-content-center align-items-center"
            >
              <router-link
                :to="`/${$i18n.locale}/shoppingCart`"
                tag="div"
                class="shopping-cart-link d-flex flex-column justify-content-center align-items-center"
              >
                <div>
                  <i class="fa-solid fa-basket-shopping text-center"></i>
                </div>
                <div>
                  <h6 class="text-center">
                    {{ $t("search-header.shopping-cart") }}
                  </h6>
                </div>
              </router-link>
              <!-- user-access -->
              <div class="languages">
                <div class="dropdown">
                  <button
                    class="btn-custome dropdown-toggle d-flex flex-row gap-2 align-items-center text-black custome-margin"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa-solid fa-caret-down text-black"></i>
                    <h6 v-if="$i18n.locale === 'ar'">
                      {{ $t("signUp.signin").slice(0, 5) }}
                      <br />
                      {{ $t("signUp.signin").slice(5) }}
                    </h6>
                    <h6 v-else>
                      {{ $t("signUp.signin") }}
                    </h6>
                  </button>
                  <ul
                    v-if="user"
                    class="dropdown-menu p-4 mine-width"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <router-link
                      :to="`/${$i18n.locale}/login`"
                      tag="li"
                      role="button"
                      class="bg-signup-email text-center text-white rounded fw-bold pe-2 py-2"
                    >
                      <span class="border-bottom pb-3">
                        {{ $t("signUp.signin") }}</span
                      >
                    </router-link>
                    <router-link
                      :to="`/${$i18n.locale}/login`"
                      tag="li"
                      role="button"
                      class="text-black fw-bold d-flex align-items-center flex-row justify-content-end gap-2 mt-4"
                    >
                      <span class="pb-2"> {{ $t("signUp.signUp") }}</span>
                      <i class="fa-solid fa-user-plus"></i>
                    </router-link>
                  </ul>
                  <!-- auth-user-not-found -->
                  <ul
                    v-else
                    class="dropdown-menu p-4 mine-width"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <button
                      @click="logOut()"
                      class="bg-signup-email text-center text-white rounded fw-bold pe-2 py-2 border-0"
                    >
                      <span class="border-bottom pb-3">
                        {{ $t("signUp.logout") }}</span
                      >
                    </button>
                    <router-link
                      :to="`/${$i18n.locale}/profile`"
                      tag="li"
                      role="button"
                      class="text-black fw-bold d-flex align-items-center flex-row mt-2"
                    >
                      <span class="m-auto"> {{ $t("signUp.profile") }}</span>
                      <i class="fa-solid fa-user"></i>
                    </router-link>
                  </ul>
                  <!-- end -->
                </div>
              </div>
              <!-- END -->
              <router-link tag="div" class="help" :to="`/${$i18n.locale}/Help`">
                <h6 class="text-center">{{ $t("search-header.help") }}</h6>
              </router-link>
            </div>
            <div class="input-search position-relative">
              <form class="d-flex flex-row form-search-inputs">
                <input
                  type="submit"
                  :value="$t('search-header.buttonsearch')"
                  @click="getSearchVal()"
                />

                <input
                  type="text"
                  v-model="search"
                  @keyup="filterData(search)"
                  :placeholder="$t('search-header.input-placeHolder')"
                />
              </form>
              <ul class="bg-black search-query" ref="searchquery">
                <router-link
                  role="button"
                  tag="li"
                  :to="`/${$i18n.locale}/seeAll/${que.id}`"
                  v-for="que in getData"
                  :key="que.id"
                  class="text-white pb-2"
                  @click.native="closeSearch"
                >
                  {{ que.title }}
                </router-link>
              </ul>
            </div>
            <router-link
              tag="div"
              class="logo position-relative"
              :to="`/${$i18n.locale}/`"
            >
              <h5>
                {{ $t("search-header.logo") }}
              </h5>
              <span class="market">
                {{ $t("search-header.span-logo") }}
              </span>
            </router-link>
          </div>
        </div>
        <!-- links -->
        <div class="links-nav mt-4 d-lg-block d-md-block d-sm-none">
          <ul
            class="list-unstyled flex-row-reverse justify-content-start d-flex flex-wrap flex-row gap-3"
          >
            <router-link
              :title="link.name"
              class="route-links"
              :to="`/${$i18n.locale}/${link.path}`"
              tag="li"
              v-for="(link, i) in links"
              :key="i"
              exact
            >
              {{ link.name }}
            </router-link>
          </ul>
        </div>
        <!-- drop-menu-trigger -->
        <div
          class="drop-down-menu position-relative d-lg-none d-md-none d-sm-block mt-2"
        >
          <div class="drop-trigger">
            <!-- Button trigger modal -->
            <i
              @click="openNav()"
              id="menu"
              role="button"
              class="fa-solid fa-bars"
            ></i>
          </div>
        </div>
      </div>
    </section>
    <!-- dropDown Menu -->
    <div class="overlay">
      <div ref="dropAction" class="drop-menu">
        <i
          @click="closeNav()"
          style="font-size: 20px"
          class="fa-solid fa-xmark text-end w-100"
        ></i>
        <ul
          class="list-unstyled mt-5 flex-column justify-content-start d-flex flex-wrap flex-row gap-3"
        >
          <router-link
            :title="link.name"
            class="route-links"
            :to="`/${$i18n.locale}/${link.path}`"
            tag="li"
            v-for="(link, i) in links"
            :key="i"
            exact
          >
            {{ link.name }}
          </router-link>
        </ul>
        <div class="languages border p-3">
          <div class="dropdown">
            <button
              class="btn-custome dropdown-toggle w-100 justify-content-between d-flex flex-row align-items-center text-black"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <p v-if="$i18n.locale === 'ar'">
                {{ $t("languages.Arabic") }}
              </p>
              <p v-else>
                {{ $t("languages.English") }}
              </p>
              <i class="fa-solid fa-caret-down text-black"></i>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li
                @click="setlocale('ar')"
                role="button"
                class="d-flex p-2 flex-row align-items-center justify-content-between"
              >
                <img class="w-25" src="../../assets/Flags/lang_ar.png" alt="" />
                <span class="">{{ $t("languages.Arabic") }}</span>
              </li>
              <li
                @click="setlocale('en')"
                role="button"
                class="d-flex p-2 flex-row align-items-center justify-content-between"
              >
                <img class="w-25" src="../../assets/Flags/lang_en.png" alt="" />
                <span class="">{{ $t("languages.English") }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="nav-info-mobile d-flex my-4 gap-1 flex-row justify-content-center align-items-center"
        >
          <router-link
            :to="`/${$i18n.locale}/shoppingCart`"
            tag="div"
            class="shopping-cart-link d-flex flex-column justify-content-center align-items-center"
          >
            <div>
              <i class="fa-solid fa-basket-shopping text-center"></i>
            </div>
            <div>
              <h6 class="text-center">
                {{ $t("search-header.shopping-cart") }}
              </h6>
            </div>
          </router-link>
          <!-- user-access -->
          <router-link v-if="user" tag="h6" :to="`/${$i18n.locale}/SignUp`">
            <div
              class="user-access d-flex flex-column justify-content-center align-items-center"
            >
              <div>
                <i class="fa-solid fa-arrow-right-to-bracket"></i>
              </div>
              <h6 class="text-center">{{ $t("signUp.signin") }}</h6>
            </div>
          </router-link>
          <!-- end USER ACCESS -->
          <div v-else @click="dropdown = !dropdown">
            <div class="position-relative">
              <div
                class="user-access d-flex flex-column justify-content-center align-items-center"
              >
                <div>
                  <i class="fa-solid fa-user"></i>
                </div>
                <p class="text-center">{{ $t("signUp.sigon") }}</p>
              </div>
              <Transition name="fade">
                <div v-if="dropdown" class="admin-settings">
                  <div class="d-flex align-items-center gap-3">
                    <i class="fa-solid fa-gear"></i>
                    <h5 class="text">{{ $t("signUp.Settings") }}</h5>
                  </div>
                  <div class="border-bottom-black mt-2 mb-2"></div>
                  <!-- profile settings -->
                  <router-link
                    @click.native="reload()"
                    tag="div"
                    :to="{ name: 'Settings' }"
                    class="account-setting mb-2 text-decoration-none text-black"
                  >
                    <p class="settings">{{ $t("signUp.profile") }}</p>
                  </router-link>
                  <!-- End -->
                  <!-- Log Out -->
                  <div @click="logOut()" class="log-out">
                    <p>{{ $t("signUp.logout") }}</p>
                  </div>
                  <!-- END Out -->
                </div>
              </Transition>
            </div>
          </div>
          <!-- END -->
          <router-link tag="div" class="help" :to="`/${$i18n.locale}/Help`">
            <h6 class="text-center">{{ $t("search-header.help") }}</h6>
          </router-link>
        </div>
        <div class="input-search-mobile">
          <form class="mobile-form d-flex flex-column-reverse">
            <input
              type="submit"
              :value="$t('search-header.buttonsearch')"
              @click="getSearchVal()"
            />

            <input
              type="text"
              v-model="search"
              :placeholder="$t('search-header.input-placeHolder')"
            />
          </form>
        </div>
        <router-link
          tag="div"
          class="logo-mobile text-center"
          :to="`/${$i18n.locale}/`"
        >
          <h5>
            {{ $t("search-header.logo") }}
          </h5>
          <span class="text-center">
            {{ $t("search-header.span-logo") }}
          </span>
        </router-link>
      </div>
    </div>
    <!--  -->
    <div class="border-bottom"></div>
  </div>
</template>
<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";

export default {
  name: "Header-Vue",
  data() {
    let lang = localStorage.getItem("lang").toUpperCase();
    return {
      langugaes: lang || "English",
      links: this.$t("links"),
      dropdown: false,
      search: "",
      getData: [],
      resetData: [],
      // menu: false,
      // user: true,
    };
  },
  methods: {
    ...mapActions(["addToCart", "redirectTo", "logOut"]),
    setlocale(locale) {
      console.log(locale);
      localStorage.setItem("lang", locale);
      this.$i18n.locale = locale;
      this.$router.push({
        params: { lang: locale },
      });
      // if (this.langugaes === "ar") {
      //   import("../../../public/Styles/Arabic/ar.css");
      // } else {
      //   import("../../../public/Styles/English/en.css");
      // }
      window.location.reload();
    },
    getSearchVal() {
      localStorage.setItem("search-val", JSON.stringify(this.search));
      this.redirectTo({ val: "Search" });
    },
    reload() {
      window.location.reload();
    },
    openNav() {
      // this.$refs.dropAction.style.left = "0";
      // this.$refs.dropAction.style.left = "0";
      document.body.style.overflow = "hidden";
      this.$refs.dropAction.classList.toggle("show");
    },
    closeNav() {
      document.body.style.overflow = "";
      this.$refs.dropAction.classList.toggle("show");
    },
    getSearch() {
      axios.get("allProducts").then((res) => {
        this.getData = res.data;
        this.resetData = res.data;
      });
    },
    filterData(ser) {
      if (ser === "") {
        this.$refs.searchquery.classList.remove("active");
        this.reset();
      } else {
        this.$refs.searchquery.classList.add("active");
        return (this.getData = this.getData.filter((item) =>
          item.title.match(ser)
        ));
      }
    },
    closeSearch() {
      this.$refs.searchquery.classList.remove("active");
      window.location.reload();
    },
    reset() {
      this.getData = this.resetData;
    },
  },
  computed: {
    ...mapState(["user", "basketCart"]),
  },
  mounted() {
    let users = localStorage.getItem("user-info");
    if (users) {
      this.$store.state.user = false;
    } else {
      this.$store.state.user = true;
    }
    this.getSearch();
  },
};
</script>
