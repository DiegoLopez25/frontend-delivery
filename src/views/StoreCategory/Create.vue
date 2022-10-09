<template>
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>Crear categoría de tienda</h1>
        </div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item">
              <router-link to="/dashboard">Dashboard</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link :to="{name: 'StoreCategoryIndex'}">Categorías de Tienda</router-link>
            </li>
            <li class="breadcrumb-item active">Crear Categoría de Tienda</li>
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
                <h3 class="card-title">Nueva Categoria</h3>
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
  name: "Create",
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
  computed: {
    ...mapGetters({
      category: 'storeCategory/storeCategory',
      vErrors: 'errors'
    })
  },
  methods: {
    ...mapActions('storeCategory', ['store', 'resetState']),
    submitForm() {
      this.sending = true;
      this.store()
          .then(res => {
            if (res.status === 201) {
              this.openAlert = true;
              this.notification.type = 'success';
              this.notification.message = res.data.message
            }
            this.sending = false;

            this.resetState();

          })
          .catch(e => {
            this.sending = false;
            if (e.response.status === 500) {
              this.openAlert = true;
              this.notification.type = 'danger';
              this.notification.message = 'Ocurrió un error al intentar guardar el registro';
            }
          })

    }
  },
  beforeUnmount() {
    this.resetState();
  }
}
</script>

<style scoped>

</style>
