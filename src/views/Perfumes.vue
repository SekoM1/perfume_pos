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

@media  (max-width: 800px) {
  .container{
  display: flex;
  flex-direction: column;
    align-content: stretch;
    justify-content: space-around;
    row-gap: 50px;
  }
  }

</style>
