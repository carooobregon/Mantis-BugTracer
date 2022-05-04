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
  <div class = "form-body">
    <form v-on:submit.prevent>
      <button @click='getMessages' class = 'button'> GET /messages</button>
      <button @click='getMessagesByID' class = 'button'> GET /messages/:id</button>
      <button @click='postMessages' class = 'button'> POST /messages</button>
      <button @click='putMessages' class = 'button'> PUT /messages</button>
      <button @click='deleteByID' class = 'button'> DELETE /messages/:id</button>
    </form>
  </div>
</template>

<script>
import { onAuthUIStateChange } from "@aws-amplify/ui-components";
import {API} from 'aws-amplify';

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
  methods: {
    getMessages:function() {
      console.log("get messages");
      API.get("mantisChatAPI", '/messages',{}).then(result =>{
        console.log(result)
      }).catch(err =>{
        console.log(err);
      })
    },
    getMessagesByID: function(){
    const id = this.lastMessageId;
    console.log("get messages by id");
      API.get("mantisChatAPI", '/messages/${id}',{}).then(result =>{
        console.log(result)
      }).catch(err =>{
        console.log(err);
      })
    },
    postMessages:function(){
      console.log("post message");
      API.post("mantisChatAPI", '/messages',{
      body:{
          text:"message1"
        }
      }).then(result =>{
        this.lastMessageId = JSON.parse(result.body).id;
        console.log(result)
      }).catch(err =>{
        console.log(err);
      })
    },
    putMessages:function(){
    console.log("put messages");
    const id =  this.lastMessageId;
    if(!id) return;
      API.put("mantisChatAPI", '/messages',{
        body: {
          id: id,
          text: "message2"
        }
      }).then(result =>{
        console.log(result)
      }).catch(err =>{
        console.log(err);
      })
    },
    deleteByID:function(){
    console.log("get messages");
      const id =  this.lastMessageId;
      API.delete("mantisChatAPI", '/messages/${id}',{}).then(result =>{
        console.log(result)
        this.lastMessageId = ""
      }).catch(err =>{
        console.log(err);
      })
    }
  },
  data() {
    return {
      user: undefined,
      authState: undefined,
      unsubscribeAuth: undefined,
      lastMessageId: "",
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
