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
          <b-nav-item href="#" class="ml-4 mr-4">
            <font-awesome-icon icon="shopping-cart" v-b-modal.modal-shopping_cart />
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
            <template v-slot:custom-foot>
              <b-tr>
                <b-td></b-td>
                <b-td><span class="text-danger">hello</span></b-td>
                <b-td></b-td>
                <b-td></b-td>
              </b-tr>
            </template>
          </b-table>
          <template v-slot:modal-footer>
            <b-button variant="success" class="float-right">Hacer el pago</b-button>
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
          key: "Producto",
          label: "Producto"
        },
        {
          key: "cantidad",
          label: "Cantidad"
        },
        {
          key: "age",
          label: "total"
          // Variant applies to the whole column, including the header and footer
        },
        {
          key: "actions",
          label: ""
        }
      ],
      items: [
        {
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald",
          actions: "+"
        },
        {
          isActive: false,
          age: 21,
          first_name: "Larsen",
          last_name: "Shaw",
          actions: "+"
        },
        {
          isActive: false,
          age: 89,
          first_name: "Geneva",
          last_name: "Wilson",
          actions: "+"
        },
        {
          isActive: true,
          age: 38,
          first_name: "Jami",
          last_name: "Carney",
          actions: "+"
        }
      ]
    };
  }
};
</script>