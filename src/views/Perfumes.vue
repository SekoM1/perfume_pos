<template>
  <div id="perfumes" class="contaier">
    <!-- SORT ITEMS -->
    <div
      class="container d-flex justify-content-center mb-3 mt-5 pt-4 pb-4 p-4"
    >
      <div class="d-flex w-25 ms-3">
        <label for="" class="form-label">Sort by category</label>
        <select
          class="form-select"
          name=""
          id="sortCategory"
          onchange="sortCategory()"
        >
          <option value="All">All</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
        </select>
      </div>

      <div class="d-flex w-25 ms-3">
        <label for="" class="form-label">Sort name</label>
        <select class="form-select" name="" id="sortName" onchange="sortName()">
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
      <div class="d-flex w-25 ms-3">
        <label for="" class="form-label">Sort price</label>
        <select
          class="form-select"
          name=""
          id="sortPrice"
          onchange="sortPrice()"
        >
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
      <!-- ADD PROD BUTTON -->
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addProductModal"
      >
        Add Product
      </button>
      <!-- cart -->

      <button
        type="button"
        class="btn btn-primary"
        @click="showCart = !showCart"
      >
        <img
          src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-bag-charity-kiranshastry-lineal-kiranshastry.png"
        />
      </button>
      <span class="total-quantity">{{ totalQuantity }}</span>
      <div v-if="showCart" class="cart-dropdown">
        <ul class="cart-dropdown__list">
          <li v-for="product in cart" :key="product.id">
            {{ product.name }} ({{ product.quantity }})
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- ADD PRODUCT MODAL -->
  <div
    class="modal fade"
    id="addProductModal"
    tabindex="-1"
    aria-labelledby="#addProductModal"
    aria-hidden="true"
   >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="#addProductModal">Add product</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="modal-content">
            <div class="modal-body">
              <div class="mb-3">
                <label for="addTitle" class="form-label">Title</label>
                <input
                  class="form-control"
                  type="text"
                  name="addTitle"
                  id="addTitle"
                />
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Category</label>
                <select class="form-select" name="addCategory" id="addCategory">
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="addPrice" class="form-label">Price</label>
                <input
                  class="form-control"
                  type="text"
                  name="addPrice"
                  id="addPrice"
                />
              </div>
              <div class="mb-3">
                <label for="addImg" class="form-label">Image URL</label>
                <input
                  class="form-control"
                  type="text"
                  name="addImg"
                  id="addImg"
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                onclick="createProduct()"
              >
                Create Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- PRODUCT CARD -->
  <div class="container">
    
      <div v-for="(product, index) in products" :key="index" class="card">
        <img :src="product.img" class="card-img-top" :alt="product.title" />
        <div class="card-body">
          <h5 class="card-title">{{ product.title }}</h5>
          <p class="card-text">R{{ product.price }}</p>
          <p>Qty:</p>
          <input
            class="quantity"
            type="number"
            min="1"
            value="1"
            id="addToCart"
          />
          <button type="button" class="card-btn" onclick="addToCartProduct()">
            <img
              src="https://img.icons8.com/external-bartama-outline-64-bartama-graphic/25/000000/external-Cart-e-commerce-outline-bartama-outline-64-bartama-graphic.png"
            />
          </button>

          <button
            type="button"
            class="card-btn"
            data-bs-toggle="modal"
            data-bs-target="#editProduct"
            @submit="deleteProduct"
          >
            <img
              src="https://img.icons8.com/external-tanah-basah-detailed-outline-tanah-basah/25/000000/external-edit-user-interface-tanah-basah-detailed-outline-tanah-basah.png"
            />
          </button>
          <button type="button" class="card-btn" onclick="deleteProduct()">
            <img
              src="https://img.icons8.com/dotty/25/000000/filled-trash.png"
            />
          </button>
        </div>
      </div>
      <!-- UPDATE PRODUCT MODAL -->
    <div
      class="modal fade"
      id="editProduct"
      tabindex="-1"
      aria-labelledby="#editProduct"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="#editProduct">Edit</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="editTitle" class="form-label">Title</label>
              <input
                class="form-control"
                type="text"
                name="editTitle"
                id="editTitle"
                value=""
              />
            </div>
            <div class="mb-3">
              <label for="editCategory" class="form-label">Category</label>
              <select class="form-select" name="editCategory" id="editCategory">
                <option value="men">Men</option>
                <option value="women">Women</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="editPrice" class="form-label">Price</label>
              <input
                class="form-control"
                type="text"
                name="editPrice"
                id="editPrice"
                value=""
              />
            </div>
            <div class="mb-3">
              <label for="editImg" class="form-label">Image URL</label>
              <input
                class="form-control"
                type="text"
                name="editImg"
                id="editImg"
                value=""
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              onclick="updateProduct()"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  ;
  <Footer/>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
  components: { Footer },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    deleteProduct(position) {
  let confirmation = confirm(
    "Are you sure you want to delete the selected product?"
  );

  if (confirmation) {
    products.splice(position, 1);
    localStorage.setItem("products", JSON.stringify(products));
    readProducts(products);
  }
}
  },
  mounted() {
    if (localStorage.getItem("jwt")) {
      fetch("https://pointofsale-api.herokuapp.com/products", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          this.products = json;
          this.products.forEach(async (product) => {
            await fetch(
              "https://pointofsale-api.herokuapp.com/products" +
                product.created_by,
              {
                method: "GET",
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                  Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                },
              }
            )
              .then((response) => response.json())
              .then((json) => {
                product.created_by = json.title;
              });
          });
        })
        .catch((err) => {
          alert("User not logged in");
        });
    } else {
      alert("User not logged in");
      this.$router.push({ name: "Login" });
    }
  },
};
</script>

<style scoped>

h1 {
  text-align: center;
}
#products {
  flex-wrap: wrap;
  gap: 30px;
}
.quantity {
  width: 255px;
  margin-right: 20px;
}


#products img {
  height: 270px;
  object-fit: scale-down;
}

.card {
  width: 30%;
  -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  transform: scale(2s);
}
.card-img-top{
  width: 100%;
}
* {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
}
.container{
    display: inline-flex;
    align-content: stretch;
    justify-content: space-around;
    row-gap: 50px;
}
.nav-link {
  display: inline-block;
  padding: 5rem 5rem;
}
.button.btn.btn-primary {
  margin-top: 90px;
}

.item {
  position: relative;

  width: 240px;
  height: 340px;
  background: #fff;
  -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  overflow: hidden;
  transition: 1s;
  margin: 10px;
}

.item .img-box {
  height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  transition: 1s;
}

.item .img-box img {
  display: block;
  width: 100%;
  margin: 0 auto 0;
  transition: 1s;
}

.details {
  position: absolute;
  bottom: -135px;
  width: 100%;
  background: #fff;
  padding: 10px;
  padding-top: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  transition: 1s;
}

.details h2 {
  margin: 0;
  padding: 0;
  padding-bottom: 25px;
  width: 100%;
  font-size: 16px;
}

.details h2 span {
  font-size: 12px;
  color: #bbb;
  font-weight: normal;
}

.details .price {
  /* position: absolute; */
  top: 0;
  right: 2px;
  font-weight: bold;
  font-size: 20px;
}

label {
  display: block;
  margin-top: 5px;
  font-weight: bold;
  font-size: 14px;
}

ul {
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  margin: 0;
  padding: 0;
}

ul li {
  list-style: none;
  margin: 5px 5px 0;
  font-size: 12px;
  font-weight: normal;
  color: #bbb;
  transition: 0.7s;
}

ul li:hover {
  cursor: pointer;
  color: #333;
  transition: 0.7s;
}

ul li:first-child {
  margin-left: 0;
}

ul.colors li {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  cursor: pointer;
}

ul.colors li:hover {
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}

ul.colors li:nth-child(1) {
  background: #9f8a42;
}

ul.colors li:nth-child(2) {
  background: #acaea9;
}

ul.colors li:nth-child(3) {
  background: #cd7f32;
}

a {
  display: block;
  padding: 5px;
  color: #fff;
  margin: 15px 0 0;
  background: #333;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  transition: 1s;
}

a:hover {
  background: #666;
  transition: 1s;
}

.item:hover .details {
  overflow: visible;
  bottom: 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  transition: 1s;
}

.item:hover .img-box {
  position: absolute;
  bottom: 60px;
  transition: 3s;
}

.item:hover h2,
.item:hover .price {
  padding-top: 20px;
  padding-bottom: 0;
}

/* add product */
.btn-primary {
  background-color: #b626aa;
  border: none;
  margin-left: 20px;
  color: black;
}
.btn-primary:hover {
  background-color: #faf9f9;
  color: #b626aa;
  transform: scale(1.05);
  box-shadow: 1px 1px rgba(0, 0, 0, 0.158);
}

/* media queries */

@media  (min-width: 1000px) {
  .container{
  display: flex;
  flex-direction: column;
    align-content: stretch;
    justify-content: space-around;
    row-gap: 50px;
  }
  }

</style>
