<template>
  <div>
    <CartBHeader></CartBHeader>
    <b-container fluid style="margin-top:2rem;">
        <RevContPay></RevContPay>
    </b-container>
  </div>
</template>
<script>
import CartBHeader from "@/components/header/Header";
import RevContPay from "@/components/content/RevContPay";
export default {
  components: {
    CartBHeader,
    RevContPay,
  }
};
</script>