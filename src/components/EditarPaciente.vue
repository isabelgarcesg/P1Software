<template>
    
  <div class="container">
    <div class="card" style="width: 40rem;">
      <div class="card-body">
        <h4 class="card-title mb-4 text-center"><strong>Editar paciente</strong></h4>

        <form v-on:submit.prevent="editPacient">
          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label for="nombre">Nombre del paciente</label>
                <input
                  type="text"
                  class="form-control"
                  name="nombre"
                  v-model="paciente.nombre"
                  id="nombre"
                  aria-describedby="helpId"
                  placeholder="Nombre"
                  required
                >
                <small id="helpId" class="form-text text-muted"></small>
              </div>
            </div>
            <div>
                <br>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="apellidos">Apellidos</label>
                <input
                  type="text"
                  class="form-control"
                  name="apellidos"
                  v-model="paciente.apellidos"
                  id="apellidos"
                  aria-describedby="helpId"
                  placeholder="apellidos"
                  required
                >
                <small id="helpId" class="form-text text-muted"></small>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="documento">Documento de identidad</label>
                <input
                  type="text"
                  class="form-control"
                  name="documento"
                  v-model="paciente.documento"
                  id="documento"
                  aria-describedby="helpId"
                  placeholder="documento"
                  required
                >
                <small id="helpId" class="form-text text-muted"></small>
              </div>
            </div>
            <div>
                <br>
            </div>
            <div class="col-md-6">
              <label for="genero" class="form-label">Genero</label>
              <select class="form-select" id="genero" v-model="paciente.genero" required>
                <option selected disabled value=""></option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="Indefinido">Indefinido</option>
              </select>
              <div class="invalid-feedback">
                Please select a valid state.
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label for="edad">Edad</label>
                <input
                  type="text"
                  class="form-control"
                  name="edad"
                  v-model="paciente.edad"
                  id="edad"
                  aria-describedby="helpId"
                  placeholder="edad"
                  required
                >
                <small id="helpId" class="form-text text-muted"></small>
              </div>
            </div>
            <div>
                <br>
            </div>
            <div class="col-md-6">
              <label for="eps" class="form-label">EPS</label>
              <select class="form-select" id="eps" v-model="paciente.eps" required>
                <option selected disabled value=""></option>
                <option value="SURA">SURA</option>
                <option value="Comeva">Comeva</option>
                <option value="Sabia salud">Savia salud</option>
              </select>
              <div class="invalid-feedback">
                Por favor seleccione.
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label for="tp">Tp</label>
                <input
                  type="text"
                  class="form-control"
                  name="tp"
                  v-model="paciente.tp"
                  id="tp"
                  aria-describedby="helpId"
                  placeholder="tp"
                  required
                >
                <small id="helpId" class="form-text text-muted"></small>
              </div>
            </div>
            <div>
                <br>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label for="ptt">Ptt</label>
                <input
                  type="text"
                  class="form-control"
                  name="ptt"
                  v-model="paciente.ptt"
                  id="ptt"
                  aria-describedby="helpId"
                  placeholder="ptt"
                  required
                >
                <small id="helpId" class="form-text text-muted"></small>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="at">At</label>
                <input
                  type="text"
                  class="form-control"
                  name="at"
                  v-model="paciente.at"
                  id="at"
                  aria-describedby="helpId"
                  placeholder="at"
                  required
                >
                <small id="helpId" class="form-text text-muted"></small>
              </div>
            </div>

            <div>
                <br>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="tt">tt</label>
                <input
                  type="text"
                  class="form-control"
                  name="tt"
                  v-model="paciente.tt"
                  id="tt"
                  aria-describedby="helpId"
                  placeholder="tt"
                  required
                >
                <small id="helpId" class="form-text text-muted"></small>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="fibrinogeno">Fibrinogeno</label>
                <input
                  type="text"
                  class="form-control"
                  name="fibrinogeno"
                  v-model="paciente.fibrinogeno"
                  id="fibrinogeno"
                  aria-describedby="helpId"
                  placeholder="fibrinogeno"
                  required
                >
                <small id="helpId" class="form-text text-muted"></small>
              </div>
            </div>
          </div>
          <div>
                <br>
            </div>
          <div>
            <button type="submit" class="btn btn-primary">Enviar</button>
            <router-link :to="{ name: 'ListarPacientes'}" class="btn btn-danger" style="margin-left: 30px;">Cancelar</router-link> <!--Cambiar por un router link que solo se devuelva-->

          </div>
        </form>
      </div>
      <!-- <div class="card-footer text-muted">
        Copyright: LifeTech Solutions 2023
      </div> -->
    </div>
  </div>

</template>

<script>
export default {
    data(){
        return {
            paciente:{}
        }
    },
    created:function(){  // porque necesito que se cargue información!!
        this.obtenerInformacionID()
    },
    methods:{
        obtenerInformacionID(){
            fetch('http://localhost/api/?consultar='+ this.$route.params.id)
            .then(respuesta=>respuesta.json()) //es como un return y también hago una función arrow para volver la respuesta un json
            .then((datosRespuesta)=>{
                console.log(datosRespuesta)
                this.paciente=datosRespuesta[0];
                
            })
            .catch(console.log) //es como try except

  },

  editPacient(){
            let datosEnviar={id:this.paciente.id , documento:this.$route.params.id , nombre:this.paciente.nombre , apellidos:this.paciente.apellidos , genero:this.paciente.genero , edad:this.paciente.edad , eps:this.paciente.eps , tp:this.paciente.tp , ptt:this.paciente.ptt , at:this.paciente.at , tt:this.paciente.tt , fibrinogeno:this.paciente.fibrinogeno} //como lo llamé en el campo se lo asigno a la instancia, es un arreglo json, clave valor
            fetch('http://localhost/api/?actualizar=' + this.paciente.id, {
                method:"POST", //usa el metodo post en la URL dada y decodifique el json
                body:JSON.stringify(datosEnviar)
            }) //es la URL, la saco de POSTMAN
            //se usan los varbos pata insertar (post)
            .then(respuesta=>respuesta.json) //promesa o respuesta
            .then((datosRespuesta=>{
                console.log(datosRespuesta)
                window.location.href='../ListarPacientes'  //Redirecciona a la URL de listar, los dos puntoss es para que se salga
            }))
        }
    }

}


</script >


<style lang="scss" scoped>
div{
    
    .card{
      background-color: #fdfdfd;
    display: flex;
    margin-right: 10rem;
    margin-left: 15rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
    }
  }
input{
    border-radius:10px;
}


select{
    border-radius:10px;
}
</style>