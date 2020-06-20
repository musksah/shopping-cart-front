<template>
  <div>
    <CartBHeader></CartBHeader>
    <b-container fluid style="margin-top:2rem;">
      <b-row>
        <b-col style="border-right:solid 1px #B9B9B9">
          <CartBSideBar class="d-none d-sm-block"></CartBSideBar>
        </b-col>
        <b-col cols="9">
          <CartBContent></CartBContent>
        </b-col>
      </b-row>
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
    CartBSideBar,
  }
};
</script>