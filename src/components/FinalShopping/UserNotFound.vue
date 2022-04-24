<template>
  <div class="container">
    <div class="row bg-white my-4 rounded">
      <div class="col-lg-6 col-md-6 col-sm-12 p-3 my-3">
        <div class="log-form-user-notfound w-100 border-end py-4 rounded pe-4">
          <div class="text-login-form text-center">
            <h4 class="color-signup-email">إنشاء حساب جوميا</h4>
          </div>
          <div class="description-form-register p-5 mb-5 mt-3">
            قم بإنشاء حسابك الخاص علي جوميا بكل سهولة عن طريق الايميل او عن طريق
            الفيسبوك
          </div>
          <router-link
            class="form-icon-register-parent my-4 align-items-center bg-signup-email p-3 text-white fw-bold shadow-lg m-auto d-flex flex-row justify-content-end rounded alins"
            :to="`/${$i18n.locale}/SignUp`"
          >
            <div
              class="form-icon-register w-100 d-flex flex-row align-items-center"
            >
              <span class="fs-6 formxxx">تسجيل الدخول</span>
              <span><i class="fa-solid fa-envelope fs-6"></i></span>
            </div>
          </router-link>
          <router-link
            class="form-icon-register-parent my-4 align-items-center bg-signup-facebook p-3 text-white fw-bold shadow-lg m-auto d-flex flex-row justify-content-end rounded"
            :to="`/${$i18n.locale}/SignUp`"
          >
            <div
              class="form-icon-register w-100 d-flex flex-row align-items-center"
            >
              <span class="fs-6 formxxx">تسجيل الدخول عبر الفيس بوك</span>
              <span><i class="fa-brands fa-facebook-square fs-6"></i></span>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 p-3 my-3">
        <div class="log-form-user-notfound w-100 py-3 pe-4">
          <div class="text-login-form text-center">
            <h4 class="color-signup-email">تسجيل الدخول</h4>
          </div>
          <form>
            <div class="form-floating mb-3">
              <input
                v-model="email"
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
              />
              <label for="floatingTextarea2">البريد الالكتروني</label>
            </div>
            <div class="form-floating mb-3 position-relative">
              <input
                ref="passowrdtrigger"
                v-model="password"
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                type="password"
              />
              <label for="floatingTextarea2">الباسورد</label>
              <div @click="passowrdtrigger()" class="password-trigger">
                <i class="fa-solid fa-eye-slash"></i>
              </div>
            </div>
            <div
              class="mb-3 d-flex flex-row justify-content-between align-items-center"
            >
              <div>
                <h6 class="color-signup-email">هل نسيت كلمة المرور ؟</h6>
              </div>
              <div>
                <span class="me-2">تذكرني</span>
                <input
                  v-model="acceptTerms"
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
              </div>
            </div>
            <button
              @click.prevent="submit()"
              class="border-0 form-icon-register-parent my-4 align-items-center bg-signup-email p-3 text-white fw-bold shadow-lg m-auto d-flex flex-row justify-content-end rounded"
            >
              <div
                class="form-icon-register w-100 d-flex flex-row align-items-center"
              >
                <span class="fs-6 formxxx">تسجيل الدخول</span>
                <span><i class="fa-solid fa-envelope fs-6"></i></span>
              </div>
            </button>
            <router-link
              class="form-icon-register-parent my-4 align-items-center bg-signup-facebook p-3 text-white fw-bold shadow-lg m-auto d-flex flex-row justify-content-end rounded"
              :to="`/${$i18n.locale}/SignUp`"
            >
              <div
                class="form-icon-register w-100 d-flex flex-row align-items-center"
              >
                <span class="fs-6 formxxx">تسجيل الدخول عبر الفيس بوك</span>
                <span><i class="fa-brands fa-facebook-square fs-6"></i></span>
              </div>
            </router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
import axios from "axios";
import { mapActions } from "vuex";
export default {
  name: "Login-Notfound",
  data() {
    return {
      email: "",
      password: "",
      acceptTerms: "",
    };
  },
  components: {},
  validations: {
    email: { email, required, minLength: minLength(0, 10) },
    password: { required, minLength: minLength(0, 10) },
    acceptTerms: {
      required,
      sameAs: sameAs(() => true), // add this line in validation
    },
  },
  methods: {
    ...mapActions(["redirectTo"]),
    async submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        console.log("form validation success");
        let resullt = await axios.get(
          `users?email=${this.email}&password=${this.password}`
        );
        if (resullt.status == 200 && resullt.data.length > 0) {
          localStorage.setItem("user-info", JSON.stringify(resullt.data[0]));
          this.redirectTo({ val: "Home" });
          //   this.userError = "user found";
        } else {
          console.log("The User Is Not Exisit Please Register ");
        }
      } else {
        console.log("notvalid");
      }
    },
    passowrdtrigger() {
      let password = this.$refs.passowrdtrigger;
      if (password.type === "password") {
        password.type = "text";
      } else {
        password.type = "password";
      }
    },
  },
};
</script>

<style scoped>
.alins {
  margin-top: 4.2rem !important;
}
.form-icon-register-parent {
  width: 70%;
}
.formxxx {
  margin: 0 auto;
}

.bg-signup-email {
  background: #f68b1e;
}
.bg-signup-facebook {
  background: #40588a;
}
.color-signup-email {
  color: #f68b1e;
}
.form-floating > .form-control {
  padding-top: 3.625rem !important;
  padding-bottom: 1.105rem !important;
}
.form-floating > .form-control {
  background: none;
  border: none;
  box-shadow: none;
  border-bottom: 1px solid #c7c7cd;
  text-align: right !important;
}
.form-floating > label {
  right: -14px !important;
  top: 40% !important;
}
.form-floating > .form-control:focus {
  border-color: #f68b1e;
}
.form-floating > .form-control:focus ~ label {
  color: #f68b1e;
}
.form-floating > .form-control:focus ~ label,
.form-floating > .form-control:not(:placeholder-shown) ~ label,
.form-floating > .form-select ~ label {
  opacity: 1;
  transform: scale(0.85) translateY(-1.4rem) translateX(18%) !important;
}
.form-check-input {
  width: 20px !important;
  height: 20px !important;
  margin: 0;
}
.alins {
  margin-top: 4.1rem !important;
}
.password-trigger {
  position: absolute;
  left: 0;
  top: 60%;
}
</style>
