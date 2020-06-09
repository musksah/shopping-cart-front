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
            <b-row style="display: flex; align-items: center; justify-content: center;">
              <b-col>
                <b-button href="#" variant="primary">
                  <font-awesome-icon :icon="['fas', 'minus-square']" />
                </b-button>
              </b-col>
              <b-col cols="4">
                <b-form-input :v-model="cards[`card${card.id}`]" :value="value_defect" :id="`1`" type="number"></b-form-input>
              </b-col>
              <b-col>
                <b-button href="#" variant="primary">
                  <font-awesome-icon :icon="['fas', 'plus-square']" @click="addValue()" />
                </b-button>
              </b-col>
            </b-row>
            <b-row style="display: flex; align-items: center; justify-content: center;" class="mt-2">
              <b-button href="#" variant="primary" style="text-align:center;">Agregar al carrito</b-button>
            </b-row>
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
      categories: {},
      value_defect:0,
      cards:{
      }
    };
  },
  mounted() {
    this.getItems();
    this.$root.$on("componentItems", newValue => {
      // your code goes here
      console.log("component1");
      console.log(newValue);
      this.getItems(newValue);
    });
  },
  methods: {
    getItems(data = []) {
      this.axios
        .get("http://localhost:8080/item-list", {
          params: { categories: data }
        })
        .then(response => {
          this.rows = response.data.total_items;
          this.pages = response.data.pages_number;
          this.gridLists = response.data.grid_list;
          console.log(response.data);
        });
    },
    addValue(cardnumber){
      console.log(this.cards);
      // this.cards[cardnumber] =this.cards.cardnumber+1;
    }
  }
};
</script>