<template>
  <div>
    <b-row class="ml-3 mr-3">
      <b-col class="box_pay_method">
        <div class="itemreview">
          <div class="photo">Holas</div>
          <div class="photo item">
            <slot name="photo"></slot>
          </div>
          <div class="item_info item">
            <slot name="info"></slot>
          </div>
          <div class="value_info item">
            <slot name="value"></slot>
          </div>
        </div>
      </b-col>
      <b-col class="box_cart_review"></b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="css">
.box_pay_method {
  border-top: 1px solid #838383;
  border-left: 1px solid #838383;
  border-bottom: 1px solid #838383;
  border-radius: 5px 0 0 5px;
}
.box_cart_review {
  border: 1px solid #838383;
  border-radius: 0 5px 5px 0;
}
</style>