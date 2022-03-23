<template>
  <div>
    <div class="container">
      <div class="log_in">
        <div><img src="/src/assets/pic.png" alt="" /></div>
        <label for="email">Email or Username</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Input email or username"
          v-model="email"
        />
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Input password"
          v-model="password"
          @keyup.enter="created()"
        />
        <button type="submit" @click="created()" id="btn_login">Log In</button>
        <div v-text="msg" v-bind:style="{ backgroundColor: input_color }"></div>
      </div>
      <div style="margin: 10px 0 0 18vw">
        Forget <a href="http://#">password?</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      msg: "",
      input_color: "",
    };
  },
  methods: {
    async created() {
      // POST request using fetch with async/await
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: this.email, password: this.password }),
      };

      //post data to api
      const response = await fetch(
        "http://localhost:3001/login",
        requestOptions
      );

      const data = await response.json();
      console.log("data: ", data);

      //check password and email matched or correct
      if (data.status == "true") {
        location.href = "./home";
      } else {
        this.msg = data.message;
        this.input_color = "rgba(240,0,0,.8)";
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50vw;
  height: 90vh;
}

.log_in {
  background-color: rgba(170, 170, 170, 0.8);
  width: 50%;
  padding: 1rem;
  border-radius: 2%;
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 6px;
}

.log_in > div {
  text-align: center;
}

.log_in > label {
  color: rgb(255, 255, 255);
}

.log_in > div > img {
  width: 13rem;
  margin-bottom: 0.78rem;
}

.log_in > input {
  background-color: #fafafa;
  width: 20.56rem;
  border: 2px solid #aaa;
  border-radius: 4px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
}

.log_in > input:focus {
  border-color: dodgerBlue;
  box-shadow: 0 0 8px 0 dodgerBlue;
}

.container2 {
  margin: -45rem 0 0 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 93vw;
  height: 93vh;
}

#btn_login,
#btn_logout {
  cursor: pointer;
  background-color: rgb(61, 133, 198);
  color: white;
  border-style: outset;
  border-color: #0066a2;
  height: 2rem;
  width: 4rem;
  font: sans-serif;
  text-shadow: none;
  margin-top: 0.645rem;
  border-radius: 0.165rem;
  margin: 0.5rem 0 0.67rem 0;
}

#btn_logout {
  background-color: rgba(239, 54, 54);
}
</style>
