<template>
<div>
<ProductCard v-bind="{product}"/>
</div>
</template>
<script>
    import ProductCard from './ProductCard.vue'
    export default {
        name: 'ProductList',
        components: {
            ProductCard
        },
        data: function () {
            return {
                product: {
                    product_name: 'Nome do Produto',
                    product_type: 'Tipo do produto',
                    product_description: 'Descrição do Produto'
                }
            }
        }
    }
</script>
<style>

</style>
