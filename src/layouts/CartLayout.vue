<template>
  <div>
    <CartBHeader></CartBHeader>
    <CartBContent></CartBContent>
  </div>
</template>
<script>
import CartBHeader from "@/components/header/Header";
import CartBContent from "@/components/content/Content";
export default {
  components: {
    CartBHeader,
    CartBContent
  }
};
</script>