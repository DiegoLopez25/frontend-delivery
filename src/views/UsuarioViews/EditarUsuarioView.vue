<template>
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>Editar Usuario</h1>
        </div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="breadcrumb-item">
                <router-link to="/usuarios">Lista Usuarios</router-link> 
            </li>
            <li class="breadcrumb-item active">Editar Usuario</li>
          </ol>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <form action="#" method="post" id="frmCategoria">
            <div class="card card-outline card-warning">
                <div class="card-header">
                    <h3 class="card-title">Editar Usuario</h3>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="">Nombres:</label>
                                <input type="text" name="nombre" id="txtNombre" class="form-control">
                            </div>
                             <div class="form-group">
                                <label for="">Apellidos:</label>
                                <input type="text" name="nombre" id="txtApellido" class="form-control">
                            </div>
                             <div class="form-group">
                                <label for="">Telefono:</label>
                                <input type="text" name="nombre" id="txtTelefono" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="">Estado:</label>
                                <input type="text" name="nombre" id="txtEstado" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="">e-mail:</label>
                                <input type="text" name="nombre" id="txtEmail" class="form-control">
                            </div>
                             <div class="form-group">
                                <label for="">Usuario:</label>
                                <input type="text" name="nombre" id="txtUsuario" class="form-control">
                            </div>
                             <div class="form-group">
                                <label for="">Password:</label>
                                <input type="text" name="nombre" id="txtPass" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="">Rol:</label>
                                <input type="text" name="nombre" id="txtRol" class="form-control">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <button id="btnEditar" class=" btn btn-warning">
                        <i class="fas fa-save"></i> Editar
                    </button>
			          </div>
            </div>
          </form>
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