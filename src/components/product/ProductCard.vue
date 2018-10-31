<template>
    <div id="wrap">
      <div class="card">
        <div class="option">
            <h3>{{product.product_name}}</h3>
        </div>
        <hr/>
        <p class="tipo">{{product.product_type}}</p>
        <hr/>
        <p class="desc">{{product.product_description}}</p>
        <div class="add"><a href="#">Excluir</a></div>
        <div class="buy"> <a href="#">Editar</a></div>
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
@import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700");
::-webkit-scrollbar {
  display: none;
}

.center, #wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}

* {
  box-sizing: border-box;
  text-align: center;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
}


#wrap {
  width: 85%;
  height: auto;
}
#wrap .card {
  width: 32%;
  height: auto;
  background: #fff;
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.3);
  float: left;
  position: relative;
  border-radius: 5px;
  padding: 0 10px;
}
#wrap .card:nth-child(2) {
  margin: 0 2%;
}

#wrap .card .option {
  width: 60%;
  height: 10px;
  margin: 50px auto 0 auto;
}
#wrap .card i {
  font-size: 18px;
  line-height: 30px;
  padding: 0 5%;
  color: #e63d3a;
  opacity: 0.6;
  position: relative;
}
#wrap .card i:hover {
  cursor: pointer;
}
#wrap .card h3 {
  font-size: 18px;
  font-weight: 700;
  margin-top: 20px;
  color: #009688;
  opacity: 0.6;
}
#wrap .card hr {
  width: 10%;
  opacity: 0.5;
  margin: 10px auto;
}
#wrap .card .tipo {
  font-size: 14px;
  font-weight: 700;
  color: #4d4d4d;
}
#wrap .card .desc {
  margin: 15px 0;
  font-size: 13px;
  line-height: 20px;
  opacity: 0.8;
}
#wrap .card .add,
#wrap .card .buy {
  width: 48%;
  height: 30px;
  border-radius: 4px;
  margin-bottom: 10px;
  transition: 0.3s linear;
}
#wrap .card .add a,
#wrap .card .buy a {
  line-height: 30px;
  font-size: 13px;
  color: #fff;
}
#wrap .card .add {
  float: left;
  background: #FF5722;
}
#wrap .card .add:hover {
  background: #cc7f00;
}
#wrap .card .buy {
  float: right;
  background: #00796B;
}
#wrap .card .buy:hover {
  background: #B2DFDB;
}

@media screen and (max-width: 480px) {
  #wrap {
    top: 10%;
    -webkit-transform: translate(-50%, 0);
            transform: translate(-50%, 0);
  }
  #wrap .card {
    width: 100%;
  }
  #wrap .card:nth-child(2) {
    margin: 50px 0;
  }
  #wrap .card:nth-child(3) {
    margin-bottom: 20px;
  }
}
</style>
