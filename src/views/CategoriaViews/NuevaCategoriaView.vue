<template>
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>Nueva Categoria</h1>
        </div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="breadcrumb-item">
                <router-link to="/categoria-tienda">Lista categoria</router-link> 
            </li>
            <li class="breadcrumb-item active">Nueva Categoria</li>
          </ol>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <form action="#" method="post" id="frmCategoria">
            <div class="card card-outline card-success">
                <div class="card-header">
                    <h3 class="card-title">Nueva Categoria</h3>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="">Nombres:</label>
                                <input type="text" name="nombre" id="txtNombre" class="form-control">
                            </div>
                             <div class="form-group">
                                <label for="">Nombres:</label>
                                <input type="text" name="nombre" id="txtNombre" class="form-control">
                            </div>
                             <div class="form-group">
                                <label for="">Nombres:</label>
                                <input type="text" name="nombre" id="txtNombre" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="">Nombres:</label>
                                <input type="text" name="nombre" id="txtNombre" class="form-control">
                            </div>
                             <div class="form-group">
                                <label for="">Nombres:</label>
                                <input type="text" name="nombre" id="txtNombre" class="form-control">
                            </div>
                             <div class="form-group">
                                <label for="">Nombres:</label>
                                <input type="text" name="nombre" id="txtNombre" class="form-control">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <button id="btnGuardar" onclick="sendForm()" class=" btn btn-success">
                       <i class="fas fa-save"></i> Guardar
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