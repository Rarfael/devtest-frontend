<script>
import { create as createProduct } from '../../services/products.js'
import { updateProduct } from '../../services/products.js'

export default {
    name: 'ProductForm',
    props: {
        product: {
            product_name: 'Nome asdsa',
            product_type: '',
            product_description: '',
        },
        toUpdate: false,
    },
    data: function () {
        return {
            requestStatus: '',
        }
    },
    methods: {
        submit () {
            if(this.toUpdate){
                this.update()
            } else {
                this.create()
            }
        },

        create() {
            this.requestStatus = 'Sending'
            createProduct({...this.product})
            .then(response => response.data)
            .then(data => { 
                this.cleanFormFields()
                this.requestStatus = 'Sended'
                return data
                })
            .catch(err => {
                this.requestStatus = 'Err'
                return err
            })
        },

        update() {
            this.requestStatus = 'Sending'
            updateProduct({...this.product})
        },

        cleanFormFields () {
            Object.keys(this.product).map((item) => {
                return this.product[item] = ''
            })
            return
        }
    }
    
}
</script>

<template>
<div class="card">
    <div class="card-body">
    <form @submit.prevent="submit">
      <div class="form-row">
        <div class="col-md-4 mb-3">
          <label>Nome do Produto</label>
          <input type="text" class="form-control" placeholder="Nome do Produto" v-model="product.product_name">
        </div>
        <div class="col-md-4 mb-3">
          <label>Tipo</label>
          <input type="text" class="form-control" placeholder="Tipo" v-model="product.product_type" >
        </div>
      </div>
      <div class="form-row">
        <div class="col-md-8 mb-3">
          <label>Descrição</label>
          <input type="text" class="form-control" placeholder="Descrição" v-model="product.product_description" >
        </div>
      </div>
        <div class="form-row">
        <div class="col-md-8 mb-3">
          <div v-if="requestStatus == 'Sending'">
            Enviando, por favor aguarde...
          </div>
          <div v-if="requestStatus == 'Sended'">
              Enviado!
          </div>
          <div v-if="requestStatus == 'Err'">
              Problema ao enviar! :\ Tente novamente
          </div>
        </div>
      </div>
      <button class="btn btn-primary" type="submit">Submit form</button>
    </form>
    </div>
</div>
</template>
