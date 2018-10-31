<template>
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{product.product_name}}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{{product.product_type}}</h6>
    <p class="card-text">{{product.product_description}}</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
</template>
<script>
    export default {
        name: 'ProductCard',
        props:{
            product: {}
        }
    }
</script>
<style>

</style>
