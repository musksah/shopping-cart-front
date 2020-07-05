<template>
  <div>
    <div class="d-none d-xl-block">
      <b-row class="ml-3 mr-3">
        <b-col class="box_pay_method">
          <h5 class="mt-1">Resumen Productos</h5>
          <hr />
          <div class="itemreview mb-2" v-for="item in items" :key="item.id">
            <div class="photo item">
              <img :src="`/img/${item.url}`" width="100%" alt />
            </div>
            <div class="item_info item">
              <div class="text-left ml-2">
                <p>{{ item.product }}</p>
                <p>{{ item.description }}</p>
                <p>Cantidad: {{ item.quantity }}</p>
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
          <b-form-group label class="mt-5 mb-5">
            <b-form-radio v-model="selected_pay" name="radio-pay" value="A">
              <font-awesome-icon icon="money-check-alt" class="mr-1" />Efectivo
            </b-form-radio>
          </b-form-group>
        </b-col>
      </b-row>
    </div>
    <div class="d-xl-none">
      <b-row>
        <b-col class="box_pay_method">
          <h5 class="mt-1">Resumen Productos</h5>
          <hr />
          <div class="itemreview mb-2" v-for="item in items" :key="item.id">
            <div class="photo item">
              <img :src="`/img/${item.url}`" width="100%" alt />
            </div>
            <div class="item_info item">
              <div class="text-left ml-2">
                <p class="p_mobile">{{ item.product }}</p>
                <p class="p_mobile">{{ item.description }}</p>
                <p class="p_mobile">Cantidad: {{ item.quantity }}</p>
              </div>
            </div>
            <div class="value_info item">
              <div class="text-left ml-2">
                <p style="font-weight:bold;" class="p_mobile">Precio</p>
                <p class="p_mobile">${{ item.price }}</p>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row class="ml-1 mr-1">
        <b-col class="box_cart_review">
          <h6 class="mt-1">Método de Pago</h6>
          <hr />
          <b-form-group label class="mt-5 mb-5">
            <b-form-radio v-model="selected_pay" name="radio-pay" value="A">
              <font-awesome-icon icon="money-check-alt" class="mr-1 p_mobile" />Efectivo
            </b-form-radio>
          </b-form-group>
        </b-col>
      </b-row>
    </div>
    <b-row>
      <b-col class="mt-4" style="margin-bottom:5rem;">
        <button class="btn btn-primary text-center" @click="registerSale">Hacer el Pago</button>
      </b-col>
    </b-row>
  </div>
</template>
<script>
// const host = "http://127.0.0.1:8080/";
const host = "https://shopping-cartb.herokuapp.com/public/";
import ShoppingCartLayout from "@/layouts/ShoppingCartLayout";
export default {
  name: `ListItems`,
  data() {
    return {
      items: [
        // {product:"Mouse",description:"Mouse gamer",price:80000,url_img:require('@/assets/mouse_logitech.jpg')},
        // {product:"Mouse",description:"Mouse gamer",price:80000,url_img:require('@/assets/mouse_logitech.jpg')},
      ],
      total_value: 0,
      total_products: 0,
      selected_pay: ""
    };
  },
  mounted() {
    console.log("Params");
    console.log(this.$route.params);
    if (typeof this.$route.params.items != "undefined") {
      this.items = this.$route.params.items;
      this.total_value = this.$route.params.total_value;
      this.total_products = this.$route.params.total_products;
    }
    this.$root.$on("reviewShooping", itemsL => {
      this.items = itemsL;
      console.log("items");
      console.log(itemsL);
    });
  },
  created() {
    this.$emit(`update:layout`, ShoppingCartLayout);
  },
  components: {},
  methods: {
    registerSale() {
      if (this.selected_pay != "") {
        this.axios
          .post(`${host}/register-sale`, this.axiosRegister)
          .then(response => {
            console.log(response);
            this.$root.$emit("resetItems");
            this.$swal("Compra registrada!");
            this.$router.push("/");
          });
      } else {
        this.$swal(
          "Selección Inválida!",
          "Debes seleccionar un método de pago",
          "warning"
        );
      }
    }
  },
  computed: {
    axiosRegister() {
      const params = new FormData();
      var json_arr_items = JSON.stringify(this.items);
      params.append("items", json_arr_items);
      params.append("total_value", this.total_value);
      params.append("total_products", this.total_products);
      return params;
    }
  }
};
</script>
<style lang="css">
.box_pay_method {
  padding: 16px;
  /*border-top: 1px solid #838383;
  /*border-left: 1px solid #838383;
  /*border-bottom: 1px solid #838383;
  /*border-radius: 5px 0 0 5px; */
}
.box_cart_review {
  padding: 16px;
  border-left: 1px solid #b1b1b1;
  background: #e9e9e9;
  max-height: 190px;
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

.p_mobile{
  font-size:0.8rem !important;
}
</style>