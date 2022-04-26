<template>
  <div>
    <!-- <div v-if="authState !== 'signedin'">You are signed out.</div> -->
    <amplify-authenticator
      v-if="authState !== 'signedin'"
      username-alias="email"
    >
      <amplify-sign-up
        slot="sign-up"
        username-alias="email"
        :formFields="formFields"
      ></amplify-sign-up>
      <!-- <amplify-sign-out></amplify-sign-out> -->
    </amplify-authenticator>
    <!-- <div v-if="authState === 'signedin' && user">Loading...</div> -->
  </div>
</template>

<script>
import { onAuthUIStateChange } from "@aws-amplify/ui-components";

export default {
  created() {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData;
      if (authState === 'signedin') {
      this.$router.push({ name: "Home" });
      }
    });
  },
  data() {
    return {
      user: undefined,
      authState: undefined,
      unsubscribeAuth: undefined,
      formFields: [
        {
          type: "email",
          label: "Email Address *",
          inputProps: { required: true, autocomplete: "email" },
        },
        {
          type: "username",
          label: "Username *",
          inputProps: { required: true, autocomplete: "name" },
        },
        {
          type: "password",
          label: "Password *",
          inputProps: { required: true, autocomplete: "new-password" },
        },
        {
          type: "password",
          label: "Confirm Password *",
          inputProps: { required: true },
        },
      ],
    };
  },
  beforeUnmount() {
    this.unsubscribeAuth();
  },
};
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
