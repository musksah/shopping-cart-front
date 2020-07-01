<template>
  <b-row>
    <b-col style="border-right:solid 1px #B9B9B9">
      <CartBSideBar class="d-none d-sm-block"></CartBSideBar>
    </b-col>
    <b-col cols="9">
      <CartBContent></CartBContent>
    </b-col>
  </b-row>
</template>
<script>
import ShoppingCartLayout from "@/layouts/ShoppingCartLayout";
import CartBSideBar from "@/components/sidebar/SideBar";
import CartBContent from "@/components/content/Content";
export default {
  name: `ListItems`,
  created() {
    this.$emit(`update:layout`, ShoppingCartLayout);
  },
  components:{
    CartBSideBar,
    CartBContent
  }
};
</script>