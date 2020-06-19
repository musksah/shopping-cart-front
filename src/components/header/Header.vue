<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Carrito de Compras</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" class="ml-4 mr-4" v-b-modal.modal-shopping_cart>
            <font-awesome-icon icon="shopping-cart" />
            <b-badge variant="light" v-if="products > 0">
              {{ products }}
              <span class="sr-only">unread messages</span>
            </b-badge>
          </b-nav-item>
          <!-- <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>-->
          <!-- <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>-->
        </b-navbar-nav>
        <b-modal id="modal-shopping_cart" title="Checkout" size="lg">
          <b-table
            :items="items"
            :fields="fields"
            head-variant="light"
            borderless="borderless"
            style="font-size:0.899em;"
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
          </b-table>
          <template v-slot:modal-footer>
            <p v-if="items.length == 0">Agrega un producto</p>
            <b-button variant="success" class="float-right" v-if="items.length > 0">{{ titlePay }} ${{ Totalshopping }}</b-button>
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
      products: 0,
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
      items: [
        // {
        //   product: "Macdonald",
        //   quantity: "Dickerson",
        //   total_product: 40,
        //   actions: "+"
        // },
        // {
        //   product: "Shaw",
        //   quantity: "Larsen",
        //   total_product: 21,
        //   actions: "+"
        // },
        // {
        //   product: "Wilson",
        //   quantity: "Geneva",
        //   total_product: 89,
        //   actions: "+"
        // },
        // {
        //   product: "Carney",
        //   quantity: "Jami",
        //   total_product: 38,
        //   actions: "+"
        // }
      ]
    };
  },
  mounted() {
    this.$root.$on("componentShooping", Newitem => {
      let item_product = {
        id: Newitem.id,
        price: Newitem.price,
        product: Newitem.name,
        quantity: Newitem.quantity_item,
        total_product: Newitem.quantity_item * Newitem.price
      };
      // item_product.product = Newitem.name;
      // console.log("componentShooping");
      // console.log(Newitem);
      if (this.findItem(item_product)) {
      } else {
        console.log("entra");
        this.items.push(item_product);
      }
    });
  },
  computed: {
    Totalshopping() {
      return this.items.reduce(function(val, val_act) {
        return val + val_act.total_product;
      }, 0);
    },
    titlePay(){
      return this.items.length == 1 ? "Pagar (1) producto" : `Pagar (${this.items.length}) productos`
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
    }
  }
};
</script>