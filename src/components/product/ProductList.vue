<script>
import { getAllProducts as getProducts } from '../../services/products.js'
import { deleteProduct as deleteProduct } from '../../services/products.js'
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
        },

        removeProduct(productId) {
            deleteProduct(productId)
            .then(response => response.data)
            .then(productData => productData.data)
            .then(product => this.products.filter(item => item.id != product.id))
            .then(newProducts => this.products = newProducts)
            .catch(error => { 
                alert("Ocorreu erro ao remover! Por favor tente novamente")
                return error
            })
        },
        updateProduct (product) {
            this.$emit('updateProduct', product)
        }
    },
    created: function () {
        this.fetchProducts();
    }
}
</script>

<template>
<div class="row">
        <ProductCard 
        v-for="(product) in products"
        v-bind="{product}"
        v-bind:key="product.id" 
        v-on:removeProduct="removeProduct" 
        v-on:updateProduct="updateProduct" />
</div>
</template>

<style>

</style>
