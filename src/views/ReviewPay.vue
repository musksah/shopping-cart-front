<template>
  <b-row>
      <ContRevPay></ContRevPay>
  </b-row>
</template>
<script>
import ShoppingCartLayout from "@/layouts/ShoppingCartLayout";
import CartBSideBar from "@/components/sidebar/SideBar";
import ContRevPay from "@/components/content/ContRevPay";
export default {
  name: `ListItems`,
  created() {
    this.$emit(`update:layout`, ShoppingCartLayout);
  },
  components:{
    CartBSideBar,
    ContRevPay
  }
};
</script>