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
          openProductForm: false
      }
  }
}
</script>

<template>
  <div>
    <header class="container">
      <button type="button" class="btn btn-outline-primary" v-on:click="openProductForm = !openProductForm" >Adicionar Produto</button>
    </header>
    <div v-if="openProductForm">
        <ProductForm/>
    </div>
    <section class="row">
      <ProductList/>
    </section>
  </div>
</template>

<style>
</style>