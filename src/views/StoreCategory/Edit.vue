<template>
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>Editar categoría de tienda</h1>
        </div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item">
              <router-link to="/dashboard">Dashboard</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link :to="{name: 'StoreCategoryIndex'}">Categorías de Tienda</router-link>
            </li>
            <li class="breadcrumb-item active">Editar Categoría de Tienda</li>
          </ol>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-3 offset-md-9">
          <router-link
              :to="{name: 'StoreCategoryIndex'}"
              class="btn btn-secondary float-right"
          >
            <i class="fas fa-arrow-circle-left"></i>
            Regresar
          </router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <form v-on:submit.prevent="submitForm">
            <div class="card card-outline card-success">
              <div class="card-header">
                <h3 class="card-title">Editar Categoria</h3>
              </div>
              <div class="card-body">

                <div class="form-group">
                  <label for="">Nombre:</label>
                  <input
                      type="text"
                      class="form-control"
                      :class="{'is-invalid': vErrors.nombre}"
                      v-model="category.nombre"
                      placeholder="Ingrese el nombre de la categoría"
                  >
                  <span class="text-danger text-sm" v-if="vErrors.nombre">
                    {{ vErrors.nombre }}
                  </span>
                </div>

                <div :class="`alert alert-${notification.type} mt-5`" v-if="openAlert">
                  <button type="button" class="close" @click="openAlert = false">×</button>
                  {{ notification.message }}
                </div>

              </div>
              <div class="card-footer">
                <button type="submit" class="btn btn-success">
                  <i class="fas fa-save"></i> {{ sending ? 'Guardando...' : 'Guardar' }}
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

import {mapActions, mapGetters} from "vuex";

export default {
  name: "Edit",
  data() {
    return {
      sending: false,
      openAlert: false,
      notification: {
        type: 'success',
        message: ''
      }
    }
  },
  watch: {
    '$router.params.id': {
      handler(){
        this.edit(this.$route.params.id);
      },
      immediate: true
    }
  },
  computed: {
    ...mapGetters({
      category: 'storeCategory/storeCategory',
      vErrors: 'errors'
    })
  },
  methods: {
    ...mapActions('storeCategory', ['edit', 'update', 'resetState']),
    submitForm() {
      this.sending = true;
      this.update()
          .then(res => {
            if (res.status === 202) {
              this.openAlert = true;
              this.notification.type = 'success';
              this.notification.message = res.data.message
            }
            this.sending = false;

            //recargar el contenido editado
            this.edit(this.$route.params.id);

          })
          .catch(e => {
            this.sending = false;
            if (e.response.status === 500) {
              this.openAlert = true;
              this.notification.type = 'danger';
              this.notification.message = 'Ocurrió un error al intentar actualizar el registro';
            }
          })

    }
  },
  beforeUnmount() {
    this.resetState();
  }
}
</script>
