<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Carrito de Compras</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- <b-navbar-nav>
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>-->
        <b-navbar-nav>
          <b-nav-item to="/">Productos</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" class="ml-4 mr-4" v-b-modal.modal-shopping_cart>
            <font-awesome-icon icon="shopping-cart" class="mr-1" />
            <b-badge variant="light" v-if="items.length > 0">
              {{ items.length }}
              <span class="sr-only">unread messages</span>
            </b-badge>
          </b-nav-item>
        </b-navbar-nav>
        <b-modal id="modal-shopping_cart" title="Checkout" size="lg">
          <b-table
            ref="table_sh"
            :items="items"
            :fields="fields"
            head-variant="light"
            borderless="borderless"
            style="font-size:0.899em;"
            small
            stacked="md"
          >
            <template v-slot:custom-foot variant="light">
              <b-tr>
                <b-td></b-td>
                <b-td class="text-right">
                  <span style="font-weight:600;">Valor Total:</span>
                </b-td>
                <b-td class="text-left">
                  <span style="font-weight:600;">{{ Totalshopping }}</span>
                </b-td>
                <b-td></b-td>
              </b-tr>
            </template>
            <template v-slot:cell(actions)="row">
              <b-button
                size="sm"
                @click="decrease(row)"
                class="mr-1"
                variant="danger"
              >
                <font-awesome-icon icon="minus-square" />
              </b-button>
              <b-button
                size="sm"
                @click="increase(row)"
                class="mr-1"
                variant="danger"
              >
                <font-awesome-icon icon="plus-square" />
              </b-button>
            </template>
          </b-table>
          <template v-slot:modal-footer>
            <p v-if="items.length == 0">Agrega un producto</p>
            <b-button
              variant="success"
              class="float-right"
              v-if="items.length > 0"
              @click="goPay"
            >{{ titlePay }} ${{ Totalshopping }}</b-button>
          </template>
        </b-modal>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "CartHeader",
  components: {},
  data() {
    return {
      fields: [
        {
          key: "product",
          label: "Producto"
        },
        {
          key: "quantity",
          label: "Cantidad"
        },
        {
          key: "total_product",
          label: "Total Producto"
        },
        {
          key: "actions",
          label: ""
        }
      ],
      items: []
    };
  },
  mounted() {
    this.$root.$on("componentShooping", Newitem => {
      let item_product = {
        id: Newitem.id,
        price: Newitem.price,
        product: Newitem.name,
        quantity: Newitem.quantity_item,
        url: Newitem.url,
        description: Newitem.description,
        total_product: Newitem.quantity_item * Newitem.price
      };
      // console.log("componentShooping");
      // console.log(Newitem);
      if (!this.findItem(item_product)) {
        this.items.push(item_product);
      }
    });
    this.$root.$on("resetItems",()=>{
      this.items = [];
    });
  },
  computed: {
    Totalshopping() {
      return this.items.reduce(function(val, val_act) {
        return val + val_act.total_product;
      }, 0);
    },
    titlePay() {
      return this.items.length == 1
        ? "Pagar (1) producto"
        : `Pagar (${this.items.length}) productos`;
    }
  },
  methods: {
    findItem(item) {
      let exist = false;
      this.items.forEach(function(val, index, arrsrc) {
        if (val.id == item.id) {
          arrsrc[index].quantity += item.quantity;
          arrsrc[index].total_product = arrsrc[index].quantity * item.price;
          exist = true;
        }
      });
      return exist;
    },
    increase(row) {
      let new_quantity = (row.item.quantity += 1);
      let new_total_p = new_quantity * row.item.price;
      this.$set(this.items[row.index], "quantity", new_quantity);
      // debugger
      this.$set(this.items[row.index], "total_product", new_total_p);
    },
    decrease(row) {
      if (row.item.quantity == 1) {
        this.$delete(this.items, row.index);
      } else {
        let new_quantity = (row.item.quantity -= 1);
        let new_total_p = new_quantity * row.item.price;
        this.$set(this.items[row.index], "quantity", new_quantity);
        this.$set(this.items[row.index], "total_product", new_total_p);
      }
    },
    goPay() {
      console.log("Entra ");
      //this.$root.$emit('reviewShooping',this.items);
      this.$bvModal.hide("modal-shopping_cart");
      this.$router.push({
        name: "pay-review",
        params: {
          items: this.items,
          total_products: this.items.length,
          total_value: this.Totalshopping
        }
      });
    }
  }
};
</script>