<template>
  <div>
    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" first-number></b-pagination>
    <div v-for="page in pages" :key="page.id">
      <div v-if="currentPage == page">
        <!-- <div > -->
        <b-card-group deck v-for="gridlist in gridLists[page-1]" :key="gridlist.id">
          <!-- <div v-for=""> </div> -->
          <b-card
            v-for="card in gridlist"
            :key="card.id"
            :title="card.name"
            :img-src="require('@/assets/mouse_logitech.jpg')"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>{{ card.description }}</b-card-text>

            <b-button href="#" variant="primary">Agregar al carrito</b-button>
          </b-card>
        </b-card-group>
        <!-- </div> -->
      </div>
    </div>
    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" first-number></b-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rows: 0,
      perPage: 30,
      currentPage: 1,
      pages: 0,
      gridLists: [],
      foto: "@/assets/img/mouse_logitech.jpg",
      categories: {}
    };
  },
  mounted() {
    this.getItems();
    this.$root.$on("componentItems", (newValue) => {
      // your code goes here
      console.log("component1");
      console.log(newValue);
      this.getItems(newValue);
    });
  },
  methods: {
    getItems(data=[]) {
      this.axios.get("http://localhost:8080/item-list",{params:{'categories':data}}).then(response => {
        this.rows = response.data.total_items;
        this.pages = response.data.pages_number;
        this.gridLists = response.data.grid_list;
        console.log(response.data);
      });
    }
  }
};
</script>