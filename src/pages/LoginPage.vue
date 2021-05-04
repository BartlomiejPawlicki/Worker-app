<template>
  <div class="page">
    <form @submit.prevent="login">
      <div class="page-container">
        <h1 class="page-header">Login</h1>
        <div class="page-content">
          <div>
            <label>
              <input type="email" placeholder="email" v-model="email" />
            </label>
          </div>
          <div>
            <label>
              <input
                type="password"
                placeholder="password"
                v-model="password"
              />
            </label>
          </div>
          <button class="page-button">Submit</button>
          <div class="validation-alert" v-if="response.status === 404">
            {{ response.data.error }}
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { getUserByEmail } from "../api/workers.js";

export default {
  name: "LoginPage",
  data: () => ({
    email: "",
    password: "",
    response: {},
  }),
  methods: {
    login() {
      this.response = getUserByEmail(this.email, this.password);
      if (this.response.status === 200) {
        localStorage.setItem("user", JSON.stringify(this.response.data));
        this.$router.push({ path: "home" });
      }
    },
  },
};
</script>

<style scoped>
.page {
  background: radial-gradient(#003, #000);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.page-container {
  background-color: white;
  width: 450px;
  height: 280px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
  padding: 50px;
}
.page-header {
  margin-bottom: 20px;
  color: black;
  font-weight: lighter;
  font-family: Georgia, "Times New Roman", Times, serif;
}
.page-header::after {
  margin-top: 15px;
  display: block;
  border-bottom: 2px solid grey;
  content: " ";
}
.page-button {
  background-color: rgb(48, 117, 245);
  margin-top: 10px;
  width: 150px;
  text-decoration: none;
  color: #ffffff;
  border-radius: 4px;
  display: inline-block;
  font-weight: 600;
  padding: 5px 15px;
  border: none;
}
.page-button:hover {
  background-color: #1c0c6e;
  border-radius: 4px;
}
.validation-alert {
  padding-top: 5px;
  color: red;
}

input[type="email"] {
  padding-left: 5px;
  border-radius: 6px;
  border: 1px solid gray;
  padding: 8px 12px;
}
input[type="password"] {
  padding-left: 5px;
  border-radius: 6px;
  border: 1px solid gray;
  padding: 8px 12px;
}

input[type="email"]:focus {
  box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  border: 1px solid rgba(81, 203, 238, 1);
  outline: none;
}
input[type="password"]:focus {
  box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  border: 1px solid rgba(81, 203, 238, 1);
  outline: none;
}
</style>
