<template>
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>Categorías de Tienda</h1>
        </div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item">
              <router-link to="/dashboard">Dashboard</router-link>
            </li>
            <li class="breadcrumb-item active">Categorías de Tienda</li>
          </ol>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-3 offset-md-9">
          <router-link
              to="/categoria-tienda/crear"
              class="btn btn-success float-right"
          ><i class="fas fa-plus"></i> Nueva Categoria</router-link
          >
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body table-responsive p-0">
              <table class="table table-hover text-nowrap">
                <thead>
                <tr>
                  <th>Id</th>
                  <th>Nombre</th>
                  <th>Opciones</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1</td>
                  <td>restaurante</td>
                  <td class="project-actions ">
                    <a href="#" class="btn btn-info btn-sm mr-3"
                    ><i class="fa fa-pencil-alt"></i
                    ></a>
                    <a
                        data-toggle="modal"
                        data-target="#modal-delete"
                        class="btn btn-danger btn-sm"
                    >
                      <i class="text-white fa fa-trash"></i
                      ></a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Index",
  methods: {
    ...mapActions('storeCategory', ['index']),
  },
  mounted() {
    this.index();
  }
}
</script>

<style scoped>

</style>
