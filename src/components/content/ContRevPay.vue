<template>
  <div>
    <b-row class="ml-3 mr-3">
      <b-col class="box_pay_method">
        <h5 class="mt-1">Resumen Productos</h5>
        <hr />
        <div class="itemreview">
          <div class="photo item">
            <img :src="require('@/assets/mouse_logitech.jpg')" width="100%" alt />
          </div>
          <div class="item_info item">
            <div class="text-left ml-2">
              <p>Gucci</p>
              <p>Cartera de cuero</p>
            </div>
          </div>
          <div class="value_info item">
            <div class="text-left ml-2">
              <p style="font-weight:bold;">Precio</p>
              <p>$150000</p>
            </div>
          </div>
        </div>
      </b-col>
      <b-col cols="6" class="box_cart_review">
        <h5 class="mt-1">Método de Pago</h5>
        <hr />
      </b-col>
    </b-row>
    <b-row>
      <b-col class="mt-4">
        <button class="btn btn-primary text-center">Hacer el Pago</button>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items:[]
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="css">
.box_pay_method {
  padding: 16px;
  /*border-top: 1px solid #838383;
  /*border-left: 1px solid #838383;
  /*border-bottom: 1px solid #838383;
  /* border-radius: 5px 0 0 5px; */
}
.box_cart_review {
  padding: 16px;
  border-left: 1px solid #b1b1b1;
  background: #e9e9e9;
}

.itemreview {
  width: 100%;
  background: #d2daff;
  overflow: hidden;
  padding: 6px;
  border-radius: 5px;
}

.itemreview .item {
  float: left;
  height: 100px;
}

.itemreview .item p {
  margin: 0;
  font-size: 0.86rem;
}

.itemreview .photo {
  width: 30%;
  box-sizing: border-box;
}

.itemreview .photo img {
  height: 100%;
}
.itemreview .item_info {
  width: 50%;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.itemreview .value_info {
  width: 20%;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>