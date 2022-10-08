<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <a href="#" class="brand-link">
      <img src="../../../node_modules/admin-lte/dist/img/AdminLTELogo.png" alt="AdminLTE Logo"
        class="brand-image img-circle elevation-3" style="opacity: 0.8" />
      <span class="brand-text font-weight-light">Delivery App</span>
    </a>

    <div class="sidebar">
      <div class="user-panel mt-3 pb-3 mb-3 d-flex align-items-center">
        <div class="image">
          <img src="../../../node_modules/admin-lte/dist/img/user2-160x160.jpg" class="img-circle elevation-2"
            alt="User Image" />
        </div>
        <div class="info">
          <a href="#" class="d-block">{{ user.nombre + ' ' + user.apellido }}</a>
          <span class="text-sm d-block text-secondary">{{ user.role }}</span>
        </div>
      </div>

      <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
        <div class="sidebar-search-results">
          <div class="list-group">
            <a href="#" class="list-group-item">
              <div class="search-title">
                <strong class="text-light"></strong>N<strong class="text-light"></strong>o<strong
                  class="text-light"></strong>
                <strong class="text-light"></strong>e<strong class="text-light"></strong>l<strong
                  class="text-light"></strong>e<strong class="text-light"></strong>m<strong
                  class="text-light"></strong>e<strong class="text-light"></strong>n<strong
                  class="text-light"></strong>t<strong class="text-light"></strong>
                <strong class="text-light"></strong>f<strong class="text-light"></strong>o<strong
                  class="text-light"></strong>u<strong class="text-light"></strong>n<strong
                  class="text-light"></strong>d<strong class="text-light"></strong>!<strong class="text-light"></strong>
              </div>
              <div class="search-path"></div>
            </a>
          </div>
        </div>
      </div>

      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <nav-item icon="fas fa-home" link="/">
            Inicio
          </nav-item>
          <nav-item icon="fas fa-home" link="/categoria-tienda">
            Categoria Tiendas
          </nav-item>
          <nav-item icon="fas fa-user" link="/usuarios">
            Usuarios
          </nav-item>
          <nav-item icon="fas fa-store" link="/tiendas">
            Tiendas
          </nav-item>
          <nav-item icon="fas fa-store" link="/tiendas">
            Clientes
          </nav-item>
          <nav-item icon="fas fa-store" link="/tiendas">
            Pedidos
          </nav-item>
        </ul>
      </nav>
    </div>
  </aside>
</template>
<script>
import NavItem from './NavItem.vue';
import {mapGetters} from "vuex";
export default {
    components:{
        NavItem
    },
  computed: {
      ...mapGetters('auth', ['user'])
  }
};
</script>

<style>
</style>
