<template>
  <div id="app" class="container">
    <Product />
  </div>
</template>

<script>
import Product from './views/Product.vue'

export default {
  name: 'app',
  components: {
    Product
  }
}
</script>

<style>
@import url("assets/style/bootstrap.min.css")
</style>
