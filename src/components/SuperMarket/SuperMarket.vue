<template>
  <div>
    <div class="container p-0">
      <div class="row align-items-center g-3">
        <div class="col-12">
          <div class="veg-heading mt-3">
            <div class="veg-title d-flex flex-row justify-content-end">
              <div class="skew">
                <h1 class="text-uppercase text-end">الفواكه والخضار</h1>
              </div>
            </div>
            <p class="descrption-head-veg my-4 text-end">
              السوبر ماركت أو السوق المركزي هو مجمع أو مبنى متعدد الأقسام وقد
              يكون متعدد الطوابق يتم فيه التسوق وبيع وشراء المواد الغذائية
              والمواد المنزلية مثل: الأطعمة، والشراب، ومواد وأدوات الغسيل، كما
              قد يحتوي على أقسام لبيع الأجهزة الإلكترونية والأدوات
              وآلةالآلاتالكهربائية، وهي بذلك توفر الوقت والجهد المبذول في التردد
              على مناطق وأماكن مختلفة للتسوق، وهناك بعض الأسواق المركزية (السوبر
              ماركت) قد تحوي على أصناف مختلفة من المواد المذكورة سابقا. وتتميز
              محلات وأسواق (السوبر ماركت) بكثرة عدد العاملين في مختلف الأقسام،
              كما يلزم وجود زي موحد للعاملين حتى يتعرف عليهم الزبائن عندما
              يطلبون المساعدة. وتقدم محلات وأسواق (السوبر ماركت) عروض الجملة على
              البضائع والسلع الاستهلاكية، مثل: المواد الغذائية، مواد التنظيف،
              والأسماك، وغيرها. وتتميز كذلك بحرية حركة وانتقال الزبائن للتسوق
              بين أقسامها المنوعة وبدون ازعاج من جانب القائمين على المحل من
              المساعدين وموظفي الأقسام وغيرهم. بالإضافة إلى مراعاة وجود مستوى
              مرتفع من خدمة العملاء والزبائن مما يسهم في إقبال الناس للشراء من
              هذه المجمعات التجارية
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
};
</script>

<style scoped></style>
