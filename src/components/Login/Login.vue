<template>
  <div class="container">
    <div class="row bg-white my-4 rounded">
      <div class="col-lg-6 col-md-12 col-sm-12 p-3 my-3">
        <div class="log-form-user-notfound w-100 border-end py-4 rounded pe-4">
          <div class="text-login-form text-center">
            <h4 class="color-signup-email">{{ $t("signUp.signUp") }}</h4>
          </div>
          <div class="description-form-register p-5 mb-5 mt-3">
            {{ $t("signUp.description") }}
          </div>
          <router-link
            class="form-icon-register-parent my-4 align-items-center bg-signup-email p-3 text-white fw-bold shadow-lg m-auto d-flex flex-row justify-content-end rounded alins"
            :to="`/${$i18n.locale}/SignUp`"
          >
            <div
              class="form-icon-register w-100 d-flex flex-row align-items-center"
            >
              <span class="fs-6 formxxx">{{
                $t("signUp.signUpwithAccound")
              }}</span>
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
              <span class="fs-6 formxxx">{{
                $t("signUp.signUpwithFaceBook")
              }}</span>
              <span><i class="fa-brands fa-facebook-square fs-6"></i></span>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-lg-6 col-md-12 col-sm-12 p-3 my-3">
        <div class="log-form-user-notfound w-100 py-3 pe-4">
          <div class="text-login-form text-center">
            <h4 class="color-signup-email">{{ $t("signUp.signin") }}</h4>
          </div>
          <form>
            <div class="form-floating mb-3">
              <Transition name="fade">
                <div class="text-danger" v-if="$v.email.$error">
                  {{ $t("SignUp.EmailError") }}
                </div>
              </Transition>
              <input
                v-model="email"
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
              />
              <label for="floatingTextarea2">{{ $t("signUp.email") }}</label>
            </div>
            <div class="form-floating mb-3 position-relative">
              <Transition name="fade">
                <div class="text-danger" v-if="$v.email.$error">
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
              <label for="floatingTextarea2">
                {{ $t("signUp.password") }}
              </label>
              <div
                ref="icon"
                @click="passowrdtrigger()"
                class="password-trigger"
              >
                <i ref="specifc" class="fa-solid fa-eye-slash"></i>
              </div>
            </div>
            <div
              class="mb-3 d-flex flex-row justify-content-between align-items-center"
            >
              <div>
                <h6 class="color-signup-email">
                  {{ $t("signUp.forget") }}
                </h6>
              </div>
              <div>
                <span class="me-2">
                  {{ $t("signUp.rememberMe") }}
                </span>
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
                <span class="fs-6 formxxx">{{ $t("signUp.signin") }}</span>
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
                <span class="fs-6 formxxx">{{
                  $t("signUp.signUpwithFaceBook")
                }}</span>
                <span><i class="fa-brands fa-facebook-square fs-6"></i></span>
              </div>
            </router-link>
          </form>
          <div
            class="d-flex flex-row justify-content-center align-items-center"
          >
            <Transition name="fade">
              <div
                v-if="userNotExist"
                class="bg-danger p-4 rounded text-center text-white"
              >
                {{ $t("signUp.userNotExist") }}
              </div>
            </Transition>
          </div>
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
      userNotExist: false,
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
          this.userNotExist = true;
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

<style></style>
