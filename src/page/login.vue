<template>
  <div class="p-login">
    <div class="c-login-form">
      <div class="c-login-form_header"></div>
      <div class="c-login-form_body">
        <div class="c-label-input">
          <span class="c-label-input_label">账号</span>
          <input class="c-label-input_input" type="text" v-model="username" />
        </div>
        <div class="c-label-input">
          <span class="c-label-input_label">密码</span>
          <input
            class="c-label-input_input"
            type="password"
            v-model="password"
          />
        </div>
        <div class="c-login-form_login-btn" @click="handleLogin">登录</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapActions } from "vuex";

export default Vue.extend({
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions("user", ["login"]),
    async handleLogin() {
      try {
        await this.login({ username: this.username, password: this.password });

        const { redirect = { path: "/" } } = this.$route.query;

        this.$router.replace(redirect);
      } catch (e) {
        console.error(e);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.p-login {
  .c-login-form {
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    right: 0;
    top: 20.208333rem /* 388/19.2 */;
    margin: 0 auto;
    width: 28.645833rem /* 550/19.2 */;
    height: 15.885417rem /* 305/19.2 */;
    background: rgba(41, 68, 42, 0.4);
    border: 0.104167rem /* 2/19.2 */ solid #62c977;

    &_header {
      height: 2.083333rem /* 40/19.2 */;
      background: url("~@/assets/img/login-header.svg") no-repeat center;
    }

    &_body {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }

    &_login-btn {
      cursor: pointer;
      text-align: center;
      color: #fff;
      font-size: 0.9375rem /* 18/19.2 */;
      width: 6.25rem /* 120/19.2 */;
      line-height: 2.083333rem /* 40/19.2 */;
      background: rgba(103, 189, 122, 0.39);
      border: 0.104167rem /* 2/19.2 */ solid #62c977;
    }

    .c-label-input {
      color: #fff;
      font-size: 0.9375rem /* 18/19.2 */;
      display: flex;
      align-items: center;
      justify-content: center;

      &_label {
        margin-right: 1.25rem /* 24/19.2 */;
      }

      &_input {
        padding: 0 0.520833rem /* 10/19.2 */;
        box-sizing: border-box;
        font-size: inherit;
        color: inherit;
        outline: none;
        width: 13.229167rem /* 254/19.2 */;
        height: 2.1875rem /* 42/19.2 */;
        background: rgba(0, 0, 0, 0.08);
        border: 0.104167rem /* 2/19.2 */ solid #62c977;
      }
    }
  }
}
</style>