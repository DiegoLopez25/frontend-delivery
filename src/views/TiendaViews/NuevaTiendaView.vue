<template>
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Nueva Tienda</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <router-link to="/">Home</router-link>
                        </li>
                        <li class="breadcrumb-item">
                            <router-link to="/tiendas">Lista Tiendas</router-link>
                        </li>
                        <li class="breadcrumb-item active">Nueva Tienda</li>
                    </ol>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <form action="#" method="post" id="frmCategoria">
                        <div class="card card-outline card-success">
                            <div class="card-header">
                                <h3 class="card-title">Nueva Tienda</h3>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="">Nombre:</label>
                                            <input type="text" name="nombre" id="txtNombre" class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <label for="">Nit:</label>
                                            <input type="text" name="nombre" id="txtNit" class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <label for="">ncr</label>
                                            <input type="text" name="nombre" id="txtncr" class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <label for="">Giro:</label>
                                            <input type="text" name="nombre" id="txtGiro" class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <label for="">Banco:</label>
                                            <input type="text" name="nombre" id="txtBanco" class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <label for="">Numero de cuenta:</label>
                                            <input type="text" name="nombre" id="txtNumeroCuenta" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="">Usuario:</label>
                                            <input type="text" name="nombre" id="txtUsuario" class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <label for="">Password:</label>
                                            <input type="text" name="nombre" id="txtPass" class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <label for="">Estado:</label>
                                            <input type="text" name="nombre" id="txtEstado" class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <label for="">Local:</label>
                                            <input type="text" name="nombre" id="txt" class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <label for="">Categoria:</label>
                                            <input type="text" name="nombre" id="txtCategoria" class="form-control">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <button id="btnGuardar" class=" btn btn-success">
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