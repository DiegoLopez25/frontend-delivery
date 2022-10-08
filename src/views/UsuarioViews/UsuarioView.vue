<template>
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>Usuarios</h1>
        </div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="breadcrumb-item active">Lista Usuario</li>
          </ol>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-3 offset-md-9">
          <router-link
            to="/usuarios/nuevo-usuario"
            class="btn btn-success float-right"
            ><i class="fas fa-plus"></i>Nuevo Usuario</router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Lista Usuario</h3>
              <div class="card-tools">
                <div class="input-group input-group-sm" style="width: 225px">
                  <select
                    name="opciones"
                    class="form-control float-left"
                    id="filtro"
                  >
                    <option selected value="nombre">Nombre</option>
                    <option value="dui">dui</option>
                  </select>
                  <input
                    type="text"
                    name="table_search"
                    class="form-control float-right"
                    placeholder="Search"
                  />
                  <div class="input-group-append">
                    <span class="input-group-text"
                      ><i class="fas fa-search"></i
                    ></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body table-responsive p-0">
              <table class="table table-hover text-nowrap">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>prueba</th>
                    <th>Telefono</th>
                    <th>e-mail</th>
                    <th>Usuario</th>
                    <th>Password</th>
                    <th>Estado</th>
                    <th>Rol</th>
                    <th>Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Juan</td>
                    <td>Pollo</td>
                    <td>78436273</td>
                    <td>jpollo@gmail.com</td>
                    <td>jpollo007</td>
                    <td>123456</td>
                    <td>Activo</td>
                    <td>Admin</td>
                    <td class="project-actions ">
                      <router-link
                        to="/usuarios/editar-usuario" class="btn btn-info btn-sm mr-3"
                        ><i class="fa fa-pencil-alt"></i
                      ></router-link>
                      <a
                        data-toggle="modal"
                        data-target="#modal-delete"
                        onclick="seleccionarClienteParaBorrar(1)"
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
import Content from "../../components/Content.vue";

export default {
  components: { Content },
};
</script>

<style>
</style>