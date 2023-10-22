<template>
    
      <div class="container">
        <div class="card" style="width: 40rem;">
          
          <div class="card-body">
            <h4 class="card-title mb-4 text-center"><strong>Creación de paciente</strong></h4>
            <form v-on:submit.prevent="createPacient">
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
                <div class="col-md-6 mb-4">
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

                <div class="col-md-6 mb-4">
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

                <div class="col-md-6">
                  <label for="eps" class="form-label">EPS</label>
                  <select class="form-select" id="eps" v-model="paciente.eps" required>
                    <option selected disabled value=""></option>
                    <option value="SURA">SURA</option>
                    <option value="Comeva">Comeva</option>
                    <option value="Sabia salud">Savia salud</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>

                <div class="col-md-6 mb-4">
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
                <div class="col-md-6 mb-4">
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
                <div class="col-md-6 mb-4">
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
            return{
                paciente:{}
            }
        },
        methods: {   
            //  SI QUIERE VERIFICAR QUE SE CREO LA ENTIDAD PONGA EL SIGUIENTE LINK EN EL NAVEGADOR:
            // https://redb.qsystems.co/QS3100/QServlet?operation=queryEntityByTenancy&tna=6&key=11e2e476-717b-4898-ac02-693abdecdc9b
            createPacient(){
              console.log(this.paciente)
              console.log(this.paciente.eps)
            let datosEnviar={id:null , documento:this.paciente.documento , nombre:this.paciente.nombre , apellidos:this.paciente.apellidos , genero:this.paciente.genero , edad:this.paciente.edad , eps:this.paciente.eps , tp:this.paciente.tp , ptt:this.paciente.ptt , at:this.paciente.at , tt:this.paciente.tt , fibrinogeno:this.paciente.fibrinogeno}
            fetch('http://localhost/api/?insertar',{
                method:"POST",
                body:JSON.stringify(datosEnviar)
            })
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta=>{
                console.log(datosRespuesta);
                window.location.href='/ListarPacientes' //Redirecciona a la ruta listar
            }))
            }
        }
    }
</script>


<style lang="scss" scoped>

//import '@/public/style.css';

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







