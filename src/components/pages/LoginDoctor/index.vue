<script setup>
import AOS from "aos";
import { onMounted } from "vue";
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <div class="login-doctor">
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <div class="account-content">
              <div class="row align-items-center justify-content-center">
                <div class="col-md-7 col-lg-6 login-left">
                  <img
                    src="../../../assets/images/loginDoctor.png"
                    class="img-fluid"
                    alt="Doccure Login"
                  />
                </div>
                <div class="col-md-12 col-lg-6 login-right">
                  <div class="login-header" data-aos="fade-up">
                    <h3>Login <span>Doctor</span></h3>
                  </div>
                  <form>
                    <div class="form-group form-focus mb-4">
                      <input
                        class="form-control floating"
                        type="tel"
                        autocomplete="false"
                        value=""
                      /><label class="focus-label">Mobile</label
                      ><small class="text-danger"></small>
                    </div>
                    <div class="form-group form-focus mb-4">
                      <input
                        type="password"
                        class="form-control floating"
                        autocomplete="false"
                        value=""
                      /><label class="focus-label">Password</label
                      ><small class="text-danger"></small>
                    </div>
                    <button
                      class="btn btn-primary w-100 btn-lg login-btn"
                      type="submit"
                    >
                      Login
                    </button>
                  </form>
                  <div class="text-start">
                    <a class="forgot-link" href="/doctor/forgot-password"
                      >Forgot Password ?</a
                    >
                  </div>
                  <div class="text-center dont-have">
                    Don’t have an account?
                    <a href="/medical/register">Register</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "./StylingLogin.scss";
</style>
