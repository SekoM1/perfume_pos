<template>
  <div class="container">
    <header
      class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"
    >
      <router-link class="navbar-logo" to="/">EAU DE PERFUME </router-link>
      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        
        <li><a href="#" class="nav-link px-2 link-dark">Home</a></li>
        
        <li>
          <router-link class="nav-link px-2 link-dark" to="/about">
            Brands</router-link
          >
        </li>
        <li>
          <router-link class="nav-link px-2 link-dark" to="/perfumes">
            All Perfumes</router-link
          >
        </li>
      </ul>

      <div class="col-md-3 text-end">
        <!-- <a class="text-reset me-3" href="#">
          <i class="fas fa-shopping-cart"></i>
        </a> -->
        <router-link
          type="button"
          class="btn btn-outline-primary me-2"
          to="/login"
        >
          Login
        </router-link>
        <router-link type="button" class="btn btn-primary" to="/register"
          >Sign-up</router-link
        >
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  background-image: url(https://i.pinimg.com/564x/1c/8b/5f/1c8b5f0a8de3fcad48960df8a025769d.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

a {
  text-decoration: none;
  color: #070707;
  /* text-shadow: 2px 1px rgb(253, 192, 240); */
  font-size: 23px;
}
a:hover {
  color: rgb(224, 115, 192);
  /* text-shadow: 1px 1px rgba(0, 0, 0, 0.336); */
  transform: scale(1.05);
}

.btn-primary {
  color: rgb(5, 5, 5);
  background-color: #b626aa;
  /* box-shadow: 1px 1px #53070dc2; */
  border: none;
}
.btn-primary:hover {
  background-color: #3f000500;
  border: 1px #b626aa;
  transform: scale(1.05);
}
.btn-outline-primary {
  color: #b626aa !important;
  border-color: #b626aa!important;
  /* box-shadow: 1px 1px#53070dc2; */
}
.btn-outline-primary:hover {
  background-color: #b626aa;
  color: rgb(8, 8, 8);
  transform: scale(1.05);
}
</style>
