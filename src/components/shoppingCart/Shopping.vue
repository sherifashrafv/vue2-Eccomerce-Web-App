<template>
  <!-- <div class="mt-5" v-if="basketCart.length > 0">
    <perfect-scrollbar>
      <div class="basket-table">
        <div class="container">
          <div class="float-end">
            <button @click="deleteAll()" class="btn btn-danger">
              {{ $t("Delete.All") }}
            </button>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">الرقم</th>
                <th scope="col">الكمية</th>
                <th scope="col">السعر</th>
                <th scope="col">الاسم</th>
                <th scope="col">الخصائص</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in basketCart" :key="row.id">
                <th scope="row">{{ i + 1 }}</th>
                <td>
                  <ul
                    class="d-flex align-self-start flex-row justify-content-between gap-3"
                  >
                    <li @click="rQuantity(row.id, i)" class="incr">-</li>
                    <li @click="aQuantity(row.id)" class="quantity">
                      {{ row.quantity }}
                    </li>
                    <li class="decr">+</li>
                  </ul>
                </td>

                <td scope="row">{{ row.price }}</td>
                <td scope="row">{{ row.title }}</td>
                <td role="button" scope="row">
                  <button
                    @click="deletex(row)"
                    class="btn btn-dark w-100 text-center"
                  >
                    {{ $t("Delete.once") }}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </perfect-scrollbar>
  </div>
  <div v-else class="m-5">
    <div class="d-flex flex-column justify-content-center align-items-center">
      <div>
        <h2>{{ $t("shopping-empty") }}</h2>
      </div>
      <div>
        <img src="../../assets/Cart/68b7acd6.png" alt="" />
      </div>
    </div>
  </div> -->
  <!--  -->
  <div v-if="basketCart.length > 0" class="container mb-5">
    <div class="row">
      <div class="col-3 mt-3">
        <div
          class="full-price bg-white w-100 shadow-sm d-flex flex-column justify-content-between"
        >
          <div class="w-100">
            <h6 class="border-bottom pb-3 fw-bold">ملخص سلة التسوق</h6>
          </div>
          <div class="mt-2 d-flex flex-row justify-content-between">
            <div class="">
              <h4>
                {{ $t("currency") + Number(totalCount).toLocaleString() }}
              </h4>
            </div>
            <div>الاجمالي</div>
          </div>
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-dark mt-4"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            هل تريد اكمال الشراء ؟
          </button>
          <div
            class="my-3 d-flex flex-row justify-content-between align-items-center"
          >
            <div>
              <h6>اجمالي عدد المنتجات</h6>
            </div>
            <div>
              <h6>{{ basketCart.length }}</h6>
            </div>
          </div>
          <!-- Modal -->
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    هل تريد شراء المنتجات
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  اذا ضغط علي نعم سيتم تحويلك الي صفحة اكمال االبيانتات الخاصة
                  بك
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    لا
                  </button>
                  <button
                    @click="redirectTo()"
                    type="button"
                    class="btn btn-primary"
                  >
                    نعم
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-9 mt-3">
        <div
          class="basket-box p-3 d-flex flex-column justify-content-end rounded bg-white"
        >
          <div class="basket-title">
            <h1 class="border-bottom pb-3">سلة التسوق</h1>
          </div>

          <div
            v-for="row in basketCart"
            :key="row.id"
            class="basket-card mb-3 border-top p-2"
          >
            <div class="my-3 d-flex flex-row justify-content-between">
              <div class="price-product">
                <h5>{{ $t("currency") }} {{ row.price }}</h5>
              </div>
              <div class="title-product-basket">
                <h6>{{ row.title }}</h6>
              </div>
              <div class="image-product-and-title align-self-end">
                <img :src="row.image" alt="" />
              </div>
            </div>
            <div class="d-flex flex-row justify-content-between">
              <!-- incr-decrement -->
              <div>
                <ul
                  class="d-flex align-self-start flex-row justify-content-between gap-3"
                >
                  <li
                    id="decr"
                    @click="decrement(row.id, row.quantity)"
                    class="decr"
                  >
                    -
                  </li>

                  <li class="quantity">{{ row.quantity }}</li>
                  <li @click="increment(row.id, row.quantity)" class="incr">
                    +
                  </li>
                </ul>
              </div>
              <!-- end-incr & decrement -->

              <!-- remove-product-->
              <div
                class="action-delete d-flex flex-row align-items-center gap-2"
              >
                <span @click="deletem(row, row.quantity)">ازالة</span>
                <div class="delete-img">
                  <img src="../../assets/Cart/delete.png" alt="" />
                </div>
              </div>
              <!-- end-remove -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="m-5">
    <div class="d-flex flex-column justify-content-center align-items-center">
      <div>
        <h2>{{ $t("shopping-empty") }}</h2>
      </div>
      <div>
        <img src="../../assets/Cart/68b7acd6.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";

// import { PerfectScrollbar } from "vue2-perfect-scrollbar";
export default {
  name: "shopping-Cart",
  methods: {
    ...mapActions(["delete", "addQuantity", "removeQuantity,", "redirectTo"]),
    deleteAll() {
      localStorage.removeItem("dataBasketCart");
      window.location.reload();
    },
    deletem(prod) {
      this.delete(prod);
    },
    increment(row) {
      let filter = this.basketCart.find((item) => item.id == row);
      // this.code for edit on localstorge the value of quantity
      var items = JSON.parse(localStorage.getItem("dataBasketCart")) || [];
      // add to it, only if it's empty
      var item = items.find((item) => item.id === row);
      if (filter) {
        filter.quantity += 1;
        item.quantity += 1;
        console.log(item.quantity);
        if (filter.quantity >= 0) {
          document
            .getElementById("decr")
            .removeAttribute("disabled", "disabled");
        }
      } else {
        alert("I CANT DO THIS");
        items.push({
          quantity: item.quantity,
        });
      }
      // then put it back.
      localStorage.setItem("dataBasketCart", JSON.stringify(items));
    },

    decrement(row, quantity) {
      // get the item to localstorge finder
      let filter = this.basketCart.find((item) => item.id == row);
      // initial localstorge begin
      var items = JSON.parse(localStorage.getItem("dataBasketCart")) || [];
      // to edit on localstorge by calling variable and edit on
      var item = items.find((item) => item.id === row);
      console.log(quantity);
      if (filter) {
        filter.quantity -= 1;
        item.quantity -= 1;
        if (filter.quantity <= 0) {
          document.getElementById("decr").setAttribute("disabled", "disabled");
          filter.quantity = 0;
        }
      } else {
        items.push({
          quantity: item.quantity,
        });
      }
      localStorage.setItem("dataBasketCart", JSON.stringify(items));
    },
    redirectTo() {
      this.$router.push({ name: "shoppingFinal" });
      let model = document.querySelector(".modal-backdrop.fade.show");
      model.classList.remove("show");
    },
  },
  data() {
    return {
      basketCart: [],
      inBasket: false,
    };
  },

  components: {
    // PerfectScrollbar,
  },
  computed: {
    ...mapState(["basketCart"]),
    totalCount() {
      let totalPrice = 0;
      this.basketCart.forEach((pr) => {
        totalPrice += parseInt(pr.price) * parseInt(pr.quantity);
      });
      return totalPrice;
    },
  },
  mounted() {
    let datacart = localStorage.getItem("dataBasketCart");
    if (datacart) {
      this.basketCart = JSON.parse(datacart);
    }
  },
};
</script>

<style>
.ps {
  height: 600px;
}
.full-price {
  height: fit-content;
  padding: 15px;
}
.image-product-and-title {
  width: 70px;
}
.image-product-and-title img {
  width: 100%;
}
.title-product-basket {
  width: 80%;
}
.delete-img {
  width: 20px;
}
.delete-img img {
  width: 100%;
}
</style>
