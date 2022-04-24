<template>
  <div class="container">
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
              <img :src="item.img" alt="" />
            </div>
            <div class="d-flex mt-2 w-100 flex-row justify-content-between">
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
                  class="d-flex align-self-start flex-row justify-content-between gap-3"
                >
                  <li class="incr">-</li>
                  <li class="quantity">0</li>
                  <li class="decr">+</li>
                </ul>
              </div>
              <div>
                <button class="btn btn-primary">Add To Cart</button>
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
              class="img-fluid"
              src="../../assets/Makret/market2.jpg"
              alt=""
            />
          </div>
          <div class="market-body">
            <h5 class="fw-bold text-black">
              اسواق عمرو افندي تتميز دائما بالتنوع في المنتجات الاوربية والشرق
              الاوسط استطلع عل المنتجات
            </h5>
            <p class="market-descr text-muted">
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
              هذه المجمعات التجارية.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Meats-Vue",
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
        .get(`meats`)
        .then((response) => {
          this.items = response.data;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style></style>
