import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUp from "../components/SignUp/SignUp.vue";
import Login from "../components/Login/Login.vue";
import Settings from "../components/Settings/Setting.vue";
import Edit from "../components/Edit/Edit.vue";
import Search from "../components/Search/ser.vue";
import ProductId from "../components/Products/Products.vue";
import ShoppingCart from "../components/shoppingCart/Shopping.vue";
import SuperMarket from "../components/SuperMarket/SuperMarket.vue";
import Fruits from "../components/SuperMarket/Fruits.vue";
import Meats from "../components/SuperMarket/Meats.vue";
import FastFoods from "../components/SuperMarket/FastFoods.vue";
import DairyProducts from "../components/SuperMarket/Dairy-products.vue";
import Drinks from "../components/SuperMarket/Drinks.vue";
import Laptops from "../components/Laptops/Laptops-v.vue";
import Electro from "../components/HomeElctorinecs/Electro.vue";
import HealthBueaty from "../components/Health&Bueaty/Health&Bueaty.vue";
import Kids from "../components/Kids/Kids.vue";
import MobileTablets from "../components/Mobile&Tablets/Mobile-Tablets.vue";
import shoppingFinal from "../components/FinalShopping/FinalShopping.vue";
import AllProducts from "../components/AllProducts/SeeAll.vue";
import Others from "../components/Others/AllProducts.vue";
import TabletProduct from "../components/Mobile&Tablets/tablet-product.vue";
import MobileProduct from "../components/Mobile&Tablets/mobileProduct.vue";
import ElectroId from "../components/HomeElctorinecs/ELctro-id.vue";
import LaptopsId from "../components/Laptops/laptopProduct.vue";
import KidsId from "../components/Kids/KidsProducts.vue";
import AllProductId from "../components/AllProducts/SeeProductId.vue";
import Error from "../views/Error.vue";
import i18n from "../i18n";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: `/${i18n.locale}`,
  },

  {
    path: "/:lang",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    children: [
      {
        path: "",
        name: "Home",
        component: HomeView,
      },
      {
        path: "Search",
        name: "Search",
        component: Search,
      },
      {
        path: "AllProducts",
        name: "AllProducts",
        component: AllProducts,
      },
      {
        path: "seeAll/:id",
        name: "AllProductId",
        component: AllProductId,
      },
      {
        name: "SuperMarkets",
        path: "SuperMarkets",
        component: SuperMarket,
        children: [
          { path: "", name: "fruits", component: Fruits },
          { path: "meats", component: Meats, name: "meats" },
          { path: "Drinks", component: Drinks, name: "Drinks" },
          { path: "FastFoods", component: FastFoods, name: "FastFoods" },
          {
            path: "DairyProducts",
            component: DairyProducts,
            name: "DairyProducts",
          },
        ],
      },
      {
        name: "Laptops&Elctorinecs",
        path: "Laptops&Elctorinecs",
        component: Laptops,
      },
      {
        name: "Others",
        path: "Others",
        component: Others,
      },

      {
        name: "HomeElctorinecs",
        path: "HomeElctorinecs",
        component: Electro,
      },
      {
        name: "shoppingFinal",
        path: "shoppingFinal",
        component: shoppingFinal,
      },
      {
        name: "Health&Bueaty",
        path: "Health&Bueaty",
        component: HealthBueaty,
      },
      {
        name: "Mobiles&Tabalets",
        path: "Mobiles&Tabalets",
        component: MobileTablets,
      },
      {
        path: "tablet/:id",
        name: "tablet",
        component: TabletProduct,
      },
      {
        path: "mobile/:id",
        name: "mobile",
        component: MobileProduct,
      },
      {
        path: "elctro/:id",
        name: "elctro",
        component: ElectroId,
      },
      {
        path: "laptop/:id",
        name: "laptop",
        component: LaptopsId,
      },
      {
        path: "elctro/:id",
        name: "elctro",
        component: ElectroId,
      },
      {
        path: "kids/:id",
        name: "kids",
        component: KidsId,
      },
      {
        path: "HomeElctorinecs/:id",
        name: "mobile",
        component: MobileProduct,
      },

      {
        name: "Kids",
        path: "Kids",
        component: Kids,
      },
      {
        path: "SignUp",
        name: "SignUp",
        component: SignUp,
      },
      {
        path: "login",
        name: "login",
        component: Login,
      },
      {
        name: "Settings",
        component: Settings,
        path: "Settings",
        meta: {
          layout: "custome-layout",
        },
        children: [
          {
            name: "default",
            path: "",
            component: Edit,
            meta: {
              layout: "custome-layout",
            },
          },
          {
            name: "login",
            path: `login`,
            component: Login,
            meta: {
              layout: "custome-layout",
            },
          },
        ],
      },

      {
        path: `product/:id`,
        name: "ProductId",
        component: ProductId,
      },
      {
        path: `ShoppingCart`,
        name: "ShoppingCart",
        component: ShoppingCart,
      },
      {
        name: "Error",
        path: "/:pathMatch(.*)*",
        component: Error,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
