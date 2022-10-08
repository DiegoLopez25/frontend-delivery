<template>
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Tiendas</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <router-link to="/">Home</router-link>
                        </li>
                        <li class="breadcrumb-item active">Lista Tienda</li>
                    </ol>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-md-3 offset-md-9">
                    <router-link to="/tiendas/nueva-tienda" class="btn btn-success float-right"><i
                            class="fas fa-plus"></i>Nueva Tienda</router-link>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Lista Tienda</h3>
                            <div class="card-tools">
                                <div class="input-group input-group-sm" style="width: 225px">
                                    <select name="opciones" class="form-control float-left" id="filtro">
                                        <option selected value="nombre">Nombre</option>
                                        <option value="dui">dui</option>
                                    </select>
                                    <input type="text" name="table_search" class="form-control float-right"
                                        placeholder="Search" />
                                    <div class="input-group-append">
                                        <span class="input-group-text"><i class="fas fa-search"></i></span>
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
                                        <th>NIC</th>
                                        <th>nrc</th>
                                        <th>Banco</th>
                                        <th>NumCuenta</th>
                                        <th>Usuario</th>
                                        <th>Password</th>
                                        <th>Estado</th>
                                        <th>Local</th>
                                        <th>Categoria</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Tienda</td>
                                        <td>9876532-736</td>
                                        <td>78436273</td>
                                        <td>Banco Cuscatlan</td>
                                        <td>1233749937</td>
                                        <td>Admin</td>
                                        <td>1234</td>
                                        <td>Activo</td>
                                        <td>numero 1</td>
                                        <td>Ropa</td>
                                        <td class="project-actions ">
                                            <router-link to="/tiendas/editar-tienda" class="btn btn-info btn-sm mr-3">
                                                <i class="fa fa-pencil-alt"></i>
                                            </router-link>
                                            <a data-toggle="modal" data-target="#modal-delete"
                                                onclick="seleccionarClienteParaBorrar(1)" class="btn btn-danger btn-sm">
                                                <i class="text-white fa fa-trash"></i></a>
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