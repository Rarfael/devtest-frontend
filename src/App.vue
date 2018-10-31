<template>
  <div id="app">
    <ProductList/>
  </div>
</template>

<script>
import ProductList from './components/product/ProductList.vue'

export default {
  name: 'app',
  components: {
    ProductList
  }
}
</script>

<style>
@import url("assets/style/bootstrap.min.css")
</style>
