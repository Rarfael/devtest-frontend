<script>
export default {
    
    name: 'ProductCard',
    props:{
        product: {}
    },
    methods: {
        deleteProduct(productId) {
            if(this.confirmRemoveAction()){
                this.$emit('removeProduct', productId)
            }
        },

        confirmRemoveAction() {
            return confirm(`Tem certeza que deseja remover esse produto?`)
        }
    }
}
</script>

<template>
    <div class="col-md-3 col-sm-6">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">{{product.product_name}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{product.product_type}}</h6>
            <p class="card-text">{{product.product_description}}</p>
            <a href="#" class="card-link">Editar</a>
            <a href="#" v-on:click="deleteProduct(product.id)" class="card-link">Remover</a>
          </div>
        </div>
    </div>
</template>


<style>

</style>
