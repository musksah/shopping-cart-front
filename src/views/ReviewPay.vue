<template>
  <div>
    <b-row class="ml-3 mr-3">
      <b-col class="box_pay_method">
        <h5 class="mt-1">Resumen Productos</h5>
        <hr />
        <div class="itemreview mb-2" v-for="item in items" :key="item.id">
          <div class="photo item">
            <img :src="require('@/assets/mouse_logitech.jpg')" width="100%" alt />
          </div>
          <div class="item_info item">
            <div class="text-left ml-2">
              <p>{{ item.product }}</p>
              <p>{{ item.description }}</p>
            </div>
          </div>
          <div class="value_info item">
            <div class="text-left ml-2">
              <p style="font-weight:bold;">Precio</p>
              <p>${{ item.price }}</p>
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
import ShoppingCartLayout from "@/layouts/ShoppingCartLayout";
import CartBSideBar from "@/components/sidebar/SideBar";
export default {
  name: `ListItems`,
  data() {
    return {
      items:[
        // {product:"Mouse",description:"Mouse gamer",price:80000,url_img:require('@/assets/mouse_logitech.jpg')},
        // {product:"Mouse",description:"Mouse gamer",price:80000,url_img:require('@/assets/mouse_logitech.jpg')},
      ]
    };
  },
  mounted() {
    console.log("Params")
    console.log(this.$router.params.items)
    this.$root.$on("reviewShooping", itemsL => {
      // let item_product = {
      //   id: Newitem.id,
      //   price: Newitem.price,
      //   product: Newitem.name,
      //   quantity: Newitem.quantity_item,
      //   total_product: Newitem.quantity_item * Newitem.price
      // };
      // item_product.product = Newitem.name;
      this.items = itemsL
      console.log("items");
      console.log(this.items);
      console.log("reviewShooping");
      console.log(itemsL);
      // if (this.findItem(item_product)) {
      // } else {
      //   console.log("entra");
      //   this.items.push(item_product);
      // }
    });
  },
  created() {
    this.$emit(`update:layout`, ShoppingCartLayout);
  },
  components: {
    CartBSideBar
  }
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