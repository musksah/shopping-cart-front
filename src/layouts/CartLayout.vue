<template>
  <div>
    <CartBHeader></CartBHeader>
    <b-container fluid style="margin-top:2rem;">
      <CartBSideBar></CartBSideBar>
      <CartBContent></CartBContent>
    </b-container>
  </div>
</template>
<script>
import CartBHeader from "@/components/header/Header";
import CartBContent from "@/components/content/Content";
import CartBSideBar from "@/components/sidebar/SideBar";
export default {
  components: {
    CartBHeader,
    CartBContent,
    CartBSideBar
  }
};
</script>