<template>
  <div id="home">
    <h1>WELCOME TO EAU DE PERFUME</h1>
    <h2>The Biggetst Reseller of Perfumes in South Africa</h2>
    <p>Available at you fingertips. . .</p>
  <router-link class="btn btn-outline" to="/login">Shop Now</router-link>


  </div>

 


</template>

<script>



</script>

<style scoped>
#home{
  background-image: url(https://images.unsplash.com/photo-1616640045164-deb3b104c4b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80);
background-size:cover ;
height: 90vh;
padding-top: 300px

}
h1, h2, p{
  color: rgba(240, 127, 255, 0.856);
  padding: 10px;
  /* text-shadow: 1px 1px rgb(92, 92, 92); */

}
.btn-outline {
    color: #f6f8fa;
    border-color:  #878788;
    margin-top: 45px;
}
.btn-outline:hover{
transform: scale(1.05);;
}

</style>