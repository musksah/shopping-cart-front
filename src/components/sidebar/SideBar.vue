<template>
  <div>
    <b-form-group label="Categorías" class="text-left ml-5">
      <b-form-checkbox
        v-for="option in options"
        v-model="selected"
        :key="option.value"
        :value="option.value"
        name="flavour-3a"
      >{{ option.text }}</b-form-checkbox>
    </b-form-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: [], // Must be an array reference!
      options: [],
      checked_values:[]
    };
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    getCategories() {
      this.axios.get("http://localhost:8080/category-list",{params:{"Hola":"Holamundo"}}).then(response => {
        console.log(response.data);
        response.data.forEach(element => {
          this.options.push({ text: element.name, value: element.id });
        });
      });
    },
  },
  watch: {
    selected:function(newValue){
      // console.log("El valor ahora es: ");
      // console.log(newValue);
      this.$root.$emit('componentItems',newValue); 
    }
  },
};
</script>