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
            img-src="/img/hogar1.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>{{ card.description }}</b-card-text>
            <b-card-text style="color:#000EE3;font-weight:600;">${{ card.price }} COP</b-card-text>
            <b-row style="display: flex; align-items: center; justify-content: center;">
              <b-col style="display:inline;">
                <label>cantidad</label>
              </b-col>
              <b-col style="display:inline;">
                <b-form-input
                  v-model="quantity_cards[card.id]"
                  :value="value_defect"
                  type="number"
                  min="1"
                  max="99"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row
              style="display: flex; align-items: center; justify-content: center;"
              class="mt-2"
            >
              <b-button
                href="#"
                variant="primary"
                style="text-align:center;"
                @click="addValue(card)"
              >Agregar al carrito</b-button>
            </b-row>
          </b-card>
        </b-card-group>
      </div>
    </div>
    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" first-number></b-pagination>
  </div>
</template>
<script>
const host = "http://127.0.0.1:8080/";
// const host = "https://shopping-cartb.herokuapp.com/public/"
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
      value_defect: 1,
      cards: {},
      quantity_cards: []
    };
  },
  mounted() {
    this.getItems();
    this.$root.$on("componentItems", newValue => {
      // your code goes here
      this.getItems(newValue);
    });
  },
  methods: {
    getItems(data = []) {
      this.axios
        .get(`${host}item-list`, {
          params: { categories: data }
        })
        .then(response => {
          console.log(response);
          this.rows = response.data.total_items;
          this.pages = response.data.pages_number;
          // this.addUrl(response.data.grid_list);
          this.gridLists = response.data.grid_list;
        });
    },
    addValue(card) {
      let quantity = this.quantity_cards[card.id];
      card.quantity_item = typeof quantity != "undefined" ? quantity : 1;
      this.$root.$emit("componentShooping", card);
    }
    // addUrl(gridList){
    //   gridList.forEach((elePaginate,indexPag,sourceArr)=>{
    //     elePaginate.forEach((eleDeck,indexDeck)=>{
    //       eleDeck.forEach((card,indexCard)=>{
    //         let url_item = sourceArr[indexPag][indexDeck][indexCard].url;
    //         // sourceArr[indexPag][indexDeck][indexCard].url = require(url_item);
    //         console.log(url_item)
    //       });
    //     });
    //   });
    // }
  },
  computed: {
    getImgUrl(pet) {
      return require(pet);
      // return images('./' + pet + ".jpg")
    }
  }
};
</script>