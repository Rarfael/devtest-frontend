<script>
import ProductList from '../components/product/ProductList.vue'
import ProductForm from '../components/product/ProductForm.vue'

export default {
  name: 'Product',
  components: {
    ProductList,
    ProductForm
  },
  data: function () {
      return {
          openProductForm: false,
          toUpdate: false,
          product: {}
      }
  },
  methods:{
    updateProduct(product){
        this.product = product
        this.toUpdate = true
        this.openProductForm = !this.openProductForm
    },
    manageProductForm() {
        this.toUpdate = false
        this.openProductForm = !this.openProductForm
      }
  }
}
</script>

<template>
  <div>
    <header class="container">
      <button type="button" class="btn btn-outline-primary" 
      v-on:click="manageProductForm" 
       >Adicionar Produto</button>
    </header>
    <div v-if="openProductForm">
        <ProductForm  
            v-bind="{product}"
            v-bind:toUpdate="toUpdate"/>
    </div>
    <section class="row">
      <ProductList
        v-on:updateProduct="updateProduct"/>
    </section>
  </div>
</template>

<style>
</style>