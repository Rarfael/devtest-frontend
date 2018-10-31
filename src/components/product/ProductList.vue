<script>
import { getAllProducts as getProducts } from '../../services/products.js'
import ProductCard from './ProductCard.vue'
export default {
    name: 'ProductList',
    components: {
        ProductCard
    },
    data: function () {
        return {
            products: {}
        }
    },
    methods: {
        fetchProducts() {
            getProducts()
            .then(response => response.data)
            .then(data => data.data)
            .then(data => data.map((product) => product.data))
            .then(products => {
                this.products = products
            })
        }
    },
    created: function () {
        this.fetchProducts();
    }
}
</script>

<template>
<div>
    <ProductCard 
        v-for="(product) in products"
        v-bind="{product}"
        v-bind:key="product.id"/> 
</div>
</template>

<style>

</style>
