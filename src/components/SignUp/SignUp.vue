<template>
  <div class="container">
    <div class="row">
      <div class="col-12 p-lg-5 p-md-5 pt-sm-3 pe-sm-3 bg-white my-3">
        <h1 class="color-signup-email">{{ $t("signUp.signUp") }}</h1>
        <div class="form-validation-signUp">
          <div
            class="form-validate-flex d-flex flex-lg-row flex-md-column-reverse flex-sm-column-reverse justify-content-between"
          >
            <div
              class="log-form-user-notfound w-100 py-lg-3 pe-lg-4 py-md-0 pe-md-0 py-sm-0 pe-sm-0"
            >
              <form class="pe-lg-1 pe-md-0">
                <div class="form-floating mb-3">
                  <Transition name="fade">
                    <div class="text-danger" v-if="$v.lastname.$error">
                      {{ $t("SignUp.UserNameError") }}
                    </div>
                  </Transition>
                  <input
                    v-model="lastname"
                    class="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                  />
                  <label for="floatingTextarea2">{{
                    $t("signUp.lastName")
                  }}</label>
                </div>
                <div class="form-floating mb-3 position-relative">
                  <Transition name="fade">
                    <div class="text-danger" v-if="$v.lastname.$error">
                      {{ $t("SignUp.ConfirmPassword") }}
                    </div>
                  </Transition>
                  <input
                    ref="passowrdtrigger"
                    v-model="password"
                    class="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    type="password"
                  />
                  <label for="floatingTextarea2">{{
                    $t("signUp.password")
                  }}</label>
                  <div
                    ref="icon"
                    @click="passowrdtrigger()"
                    class="password-trigger"
                  >
                    <i ref="specifc" class="fa-solid fa-eye-slash"></i>
                  </div>
                </div>
              </form>
            </div>
            <div
              class="log-form-user-notfound w-100 py-lg-3 pe-lg-4 py-md-0 pe-md-0 py-sm-0 pe-sm-0"
            >
              <form class="pe-lg-1 pe-md-0">
                <div class="form-floating mb-3">
                  <Transition name="fade">
                    <div class="text-danger" v-if="$v.userName.$error">
                      {{ $t("SignUp.UserNameError") }}
                    </div>
                  </Transition>
                  <input
                    v-model="userName"
                    class="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                  />
                  <label for="floatingTextarea2">{{
                    $t("signUp.userName")
                  }}</label>
                </div>
                <div class="form-floating mb-3 position-relative">
                  <Transition name="fade">
                    <div class="text-danger error" v-if="$v.email.$error">
                      {{ $t("SignUp.EmailError") }}
                    </div>
                  </Transition>
                  <input
                    v-model="email"
                    class="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    type="email"
                  />
                  <label for="floatingTextarea2">{{
                    $t("signUp.email")
                  }}</label>
                </div>
                <Transition name="fade">
                  <div class="text-danger" v-if="$v.phone.$error">
                    {{ $t("SignUp.enterPhone") }}
                  </div>
                </Transition>
                <div class="my-4">
                  <VuePhoneNumberInput
                    v-model="phone"
                    v-bind="vuePhone.props"
                  />
                </div>
                <div class="my-3">
                  <div class="terms d-flex flex-row justify-content-end">
                    <span class="me-2">
                      {{ $t("signUp.aggree") }}
                      <span class="color-signup-email">{{
                        $t("signUp.terms")
                      }}</span>
                      <br />
                      {{ $t("signUp.afterBr") }}
                    </span>
                    <input
                      v-model="acceptTerms"
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <button
          @click="submit()"
          class="border-0 form-icon-register-parent my-4 align-items-center bg-signup-email p-3 text-white fw-bold shadow-lg m-auto d-flex w-50 flex-row justify-content-end rounded"
        >
          <div
            class="form-icon-register w-100 d-flex flex-row align-items-center"
          >
            <span class="fs-6 formxxx">
              {{ $t("signUp.signUpToForm") }}
            </span>
            <span><i class="fa-solid fa-envelope fs-6"></i></span>
          </div>
        </button>
        <div
          class="w-50 position-relative m-auto d-flex flex-row align-items-center"
        >
          <span class="or text-center text-black w-100">{{
            $t("signUp.or")
          }}</span>
        </div>
        <router-link
          class="form-icon-register-parent my-4 w-50 align-items-center bg-signup-facebook p-3 text-white fw-bold shadow-lg m-auto d-flex flex-row justify-content-end rounded"
          :to="`/${$i18n.locale}/SignUp`"
        >
          <div
            class="form-icon-register w-100 d-flex flex-row align-items-center"
          >
            <span class="fs-6 formxxx">
              {{ $t("signUp.SignUpFaceBook") }}
            </span>
            <span><i class="fa-brands fa-facebook-square fs-6"></i></span>
          </div>
        </router-link>
        <div
          class="m-auto w-50 d-flex flex-column align-items-center justify-content-center"
        >
          <div class="">
            <span>{{ $t("signUp.haveAccount") }}</span>
          </div>
          <div>
            <router-link
              class="color-signup-email"
              :to="`/${$i18n.locale}/login`"
              >{{ $t("signUp.signin") }}</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, sameAs, email } from "vuelidate/lib/validators";
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import axios from "axios";
import { mapActions } from "vuex";
export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
      userName: "",
      lastname: "",
      phone: "",
      vuePhone: {
        props: {
          color: "black",
          clearable: true,
          preferredCountries: ["US", "GB"],
          noExample: true,
          translations: {
            countrySelectorLabel: this.$t("SignUp.country"),
            countrySelectorError: "Error",
            phoneNumberLabel: this.$t("SignUp.enterPhone"),
            example: "Example:",
          },
        },
      },
      acceptTerms: "",
    };
  },
  components: {
    VuePhoneNumberInput,
  },
  validations: {
    email: { email, required, minLength: minLength(0, 10) },
    userName: { required, minLength: minLength(0, 10) },
    lastname: { required, minLength: minLength(0, 10) },
    password: { required, minLength: minLength(0, 10) },
    phone: { required, minLength: minLength(0, 11) },
    acceptTerms: { required, sameAs: sameAs(() => true) },
  },
  methods: {
    ...mapActions(["redirectTo"]),
    async submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        console.log("valid");
        let resullt = await axios.post("users", {
          email: this.email,
          password: this.password,
          userName: this.userName,
          lastname: this.lastname,
          phone: this.phone,
        });
        if (resullt.status == 201) {
          console.log(resullt);
          localStorage.setItem("user-info", JSON.stringify(resullt.data));
          this.redirectTo({ val: "Home" });
          window.location.reload();
        }
      } else {
        console.log("notvalid");
      }
    },
    passowrdtrigger() {
      let password = this.$refs.passowrdtrigger;
      let icon = this.$refs.icon;
      let spec = this.$refs.specifc;
      if (password.type === "password") {
        password.type = "text";
        icon.classList.toggle("active");
        spec.classList = "";
        spec.className = "fa-solid fa-eye";
      } else {
        icon.classList.toggle("active");
        password.type = "password";
        spec.classList = "";
        spec.className = "fa-solid fa-eye-slash";
      }
    },
  },
};
</script>

<style>
.box {
  width: 700px;
  background: white;
  padding: 15px;
}
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
  transform: translateX(0%);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  position: absolute;
  transform: translateX(20%);
}
.error {
  color: red;
}
input#MazPhoneNumberInput-13_phone_number {
  border: none !important;
  outline: none;
  border-bottom: 1px solid #c7c7cd !important;
}
>>> .input-tel.is-focused {
  outline: none !important;
  border: none !important;
  box-shadow: none !important;
}
div#MazPhoneNumberInput {
  flex-direction: row-reverse !important;
}
input#MazPhoneNumberInput-13_country_selector {
  border: none;
  box-shadow: none !important;
}
.or::before {
  content: "";
  position: absolute;
  left: 1%;
  width: 47%;
  background: #ededed;
  top: 50%;
  height: 3px;
}
.or::after {
  content: "";
  position: absolute;
  right: 1%;
  width: 47%;
  background: #ededed;
  top: 50%;
  height: 3px;
}
.form-floating > .form-control {
  box-shadow: none !important;
}
</style>
