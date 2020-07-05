<template>
  <div>
    <CartBHeader></CartBHeader>
    <b-container fluid style="margin-top:2rem;margin-bottom:2rem;">
      <slot class="LayoutDefault__main" />
    </b-container>
    <CartBFooter></CartBFooter>
  </div>
</template>
<script>
import CartBHeader from "@/components/header/Header";
import CartBFooter from "@/components/footer/Footer";
export default {
  name: `ShoppingCartLayout`,
  components: {
    CartBHeader,
    CartBFooter
  }
};
</script>