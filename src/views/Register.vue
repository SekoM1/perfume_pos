<template>
<div class="back">
  <form @submit.prevent="register" class="form neu-border">
    <h2 class="form-heading">Sign Up</h2>
    <input
      class="form-input neu-border-inset"
      type="text"
      v-model="name"
      placeholder="Name"
    />
    <input
      class="form-input neu-border-inset"
      type="email"
      v-model="email"
      placeholder="Email"
    />
    <input
      class="form-input neu-border-inset"
      type="text"
      v-model="contact"
      placeholder="Contact Number"
    />
    <input
      class="form-input neu-border-inset"
      type="password"
      v-model="password"
      placeholder="Password"
    />
    <button type="submit" class="form-btn neu-border">Sign up</button>
 

    <p>
      Already a user?
      <router-link :to="{ name: 'Login' }">Sign in</router-link>
    </p>
  </form></div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      contact: "",
      password: "",
    };
  },
 methods: {
    register() {
      fetch("https://pointofsale-api.herokuapp.com/users", {
        method: "POST",
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          contact: this.contact,
          password: this.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          alert("User registered");
          localStorage.setItem("jwt", json.jwt);
          this.$router.push({ name: "Perfumes" });
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};

</script>
<style scoped>

.back{
  background-image:url(https://images.unsplash.com/photo-1598121496628-9d8b7578e290?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);
  background-position: center;
  background-size: cover;
  height: 90vh;

  object-fit: cover;
  overflow-x: hidden;

}
p {
    margin-top: 0;
    margin-bottom: 1rem;
    color: beige;
}
.neu-border {
  border-radius: 10px;
  background: #f5f5f502;
  box-shadow: 8px 8px 15px #3f3f3f, -8px -8px 15px #5a5a5a;
}
.neu-border-inset {
  border-radius: 10px;
  background: #f5f5f502;
  box-shadow: inset 8px 8px 15px #797979, inset -8px -8px 15px #727171;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  gap: 20px;
  width: 100%;
  /* margin-inline: auto; */
  max-width: 600px;
  margin-top: 200px;
  margin-left: auto;
  margin-right: auto;
}

.form-heading {
  text-align: center;
  text-transform: uppercase;
}

.form-input,
.form-btn {
  border: none;
  outline: none;
  padding: 20px;
}

.form-btn {
  cursor: pointer;
  transition: all 0.1s linear;
  color: beige;
  font-size: 20px;
  font-weight: bold;

  
}

.form-btn:hover {
  transform: scale(1.05);
}


</style>
