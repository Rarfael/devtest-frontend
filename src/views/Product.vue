<template>
  <div>
    <header calss="container">
      <button type="button" class="btn btn-outline-primary">Adicionar Produto</button>
    </header>
    <section class="row">
      <ProductList/>
    </section>
  </div>
</template>

<script>
import ProductList from '../components/product/ProductList.vue'

export default {
  name: 'Product',
  components: {
    ProductList
  }
}
</script>

<style>
</style>