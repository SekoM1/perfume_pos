<template>
   <div class="card">
          <img src="${product.img}" class="card-img-top" alt="${product.title}">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-title">Qty:${product.qty}</p>

            <p class="card-text">R${product.price * product.qty}</p>
            
            <button type="button" class="btn btn-danger" onclick="deleteCart(${position})" >
            <i class="material-icons">remove_shopping_cart</i>
            </button>
            <button type="button" class="btn btn-warning" onclick="addToCart(${position})" >
            UPDATE
            </button>
            </div>
            </div>
</template>

<script>
export default {
   
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Product 1',
          description: 'This is an incredibly awesome product',
          quantity: 0,
        },
        {
          id: 2,
          name: 'Product 2',
          description: 'This is an incredibly awesome product',
          quantity: 0,
        },
        {
          id: 3,
          name: 'Product 3',
          description: 'This is an incredibly awesome product',
          quantity: 0,
        }
      ],
      showCart: false
    };
  },
  
  // https://vuejs.org/v2/guide/computed.html
  computed: {
    cart() {
      return this.products.filter(product => product.quantity > 0);
    },
    totalQuantity() {
      return this.products.reduce(
        (total, product) => total + product.quantity,
        0
      );
    }
  },
    
    // https://vuejs.org/v2/guide/events.html#Methods-in-Inline-Handlers
    methods: {
      updateCart(product, updateType) {      
        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].id === product.id) {
            if (updateType === 'subtract') {
              if (this.products[i].quantity !== 0) {
                this.products[i].quantity--;
              }
            } else {
              this.products[i].quantity++;
            }
            
            break;
          }
        }
      }
    }
  };
  


</script>

<style>

</style>