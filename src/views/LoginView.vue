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
            <div class="input-group mb-3">
              <input type="text" class="form-control" v-model="usuario" placeholder="Usuario" />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-user"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                v-model="password"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div class="social-auth-links text-center mb-3">
            <button type="submit" class="btn btn-block btn-success">
              Iniciar sesion
            </button>
          </div>
          </form>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

  export default{ 
    data:
      function(){
      return{
          usuario: "",
          password: ""
        }
      }
    ,
    methods:{
       login (){
       //para enviar como dataform 
          const formData =  new FormData();
          formData.append('username',this.usuario);
          formData.append('password',this.password); 
          //para enviar en formato JSON
          /*
          cosnt data = {
            username : 'admin',
            password : 'admin'
          }
          
          */


        axios.post( "/auth/login",formData).then((res) => {
          console.log(res.data)
        }).catch((e) => {
          console.log(e)
        })
      }
    }
    
  }

</script>