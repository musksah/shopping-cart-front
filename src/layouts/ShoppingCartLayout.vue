<template>
  <div>
    <CartBHeader></CartBHeader>
    <b-container fluid style="margin-top:2rem;">
      <slot class="LayoutDefault__main" />
    </b-container>
  </div>
</template>
<script>
import CartBHeader from "@/components/header/Header";
export default {
  name: `ShoppingCartLayout`,
  components: {
    CartBHeader
  }
};
</script>