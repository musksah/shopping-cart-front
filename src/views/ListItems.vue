<template>
  <div>
    <div class="d-none d-xl-block">
      <b-row>
        <b-col style="border-right:solid 1px #B9B9B9">
          <CartBSideBar></CartBSideBar>
        </b-col>
        <b-col cols="9">
          <CartBContent></CartBContent>
        </b-col>
      </b-row>
    </div>
    <div class="d-xl-none">
      <b-row>
        <b-col style="border-right:solid 1px #B9B9B9">
          <CartBSideBar></CartBSideBar>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <CartBContent></CartBContent>
        </b-col>
      </b-row>
    </div>
  </div>
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
  components: {
    CartBSideBar,
    CartBContent
  }
};
</script>