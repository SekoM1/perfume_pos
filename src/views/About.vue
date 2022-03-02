<template>
  <div id="brands">
  <div class="container">
    <h1>Authentic Designer Branded Fragrances</h1>

    <div class="container">
  <div class="row">
    <div class="col">
      
<p> Dunhill</p>
<p>Amouage</p>
<p>Agatha Ruiz</p>
<p>Anna Sui</p>
<p>Annayake</p>
<p>Aramis</p>
    </div>
    <div class="col">
      <p>Alexander J</p>
<p>Azzaro</p>
<p>Balenciaga</p>
<p>Bond no 9</p>
<p>Burberry</p>
<p>Bvlgari</p>

    </div>
    <div class="col">
      <p>Cacharel</p>
<p>Calvin Klein</p>
<p>Carolina Herrera</p>
<p>Carven</p>
<p>Cerruti</p>
<p>Chanel</p>
    </div>
  </div>
</div>
  </div>
</div>
<Footer />
</template>

<script>
import Footer from "../components/Footer.vue"
export default {
  components:{Footer}

}
</script>

<style>
#brands{
  background-image:url(https://images.unsplash.com/photo-1598121496628-9d8b7578e290?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);
  background-position: center;
  background-size: cover;
  height: 73.5vh;

  object-fit: cover;
  overflow-x: hidden;
}

.row{
  padding: 60px;
}
</style>

