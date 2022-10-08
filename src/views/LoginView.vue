<template>
  <div class="hold-transition login-page">
    <div class="login-box">
      <div class="login-logo">
        <a href="../../index2.html"><b>Delivery</b></a>
      </div>
      <div class="card">
        <div class="card-body login-card-body">
          <p class="login-box-msg">
            Por favor ingrese su usuario y contrase&ntilde;a
          </p>
          <form v-on:submit.prevent="login">
            <div class="form-group">
              <div class="input-group">
                <input
                    type="text"
                    class="form-control"
                    :class="{'is-invalid': vErrors.username}"
                    v-model="data.username"
                    placeholder="Usuario"
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-user"></span>
                  </div>
                </div>
              </div>
              <span class="text-danger text-sm" v-if="vErrors.username">
                {{ vErrors.username }}
              </span>
            </div>

            <div class="form-group">
              <div class="input-group">
                <input
                    type="password"
                    class="form-control"
                    :class="{'is-invalid':vErrors.password}"
                    placeholder="Password"
                    v-model="data.password"
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                  </div>
                </div>
              </div>

              <span class="text-danger text-sm" v-if="vErrors.password">
                {{ vErrors.password }}
              </span>

            </div>

            <div class="text-center mb-3">
              <button type="submit" class="btn btn-block btn-success">
                {{ sending ? 'Espere por favor' : 'Iniciar sesion' }}
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {

  data() {
    return {
      data: {
        username: null,
        password: null
      },
      sending: false
    }
  },
  computed: {
    ...mapGetters({
      vErrors: 'errors'
    })
  },

  methods: {
    ...mapActions('auth', ['sendLoginRequest']),

    login() {

      this.sending = true;

      this.sendLoginRequest(this.data)
          .then(() => {
            this.sending = false;
            this.$router.push('/dashboard')
          })
          .catch(() => {
            this.sending = false;
          })


    }

  }

}

</script>
