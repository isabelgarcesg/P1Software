<template>
  <div class="personal">
    <div class="container mt-3 justify-content-center">
      <div class="d-flex justify-content-center">
        <div class="card">

          <div class="card-body">
            <h4 class="card-title mb-4 text-center"><strong>Resultado prueba de coagulación</strong></h4>
            <router-link :to="{ name: 'home' }"
                                ><span class="material-icons text-muted" style="font-size: 24px;">arrow_back</span></router-link>
            <table class="table table-responsive">
              <tbody>
                <tr>
                  
                  <td colspan="5" style="text-align: center ">
                    <strong>Documento:</strong> {{ paciente.documento }}
                  </td>
                  
                </tr>
                <tr>
               
                  <td colspan="5" style="text-align: center;">
                    <strong>Nombre:</strong> {{ paciente.nombre }} {{ paciente.apellidos }}
                  </td>
               
                </tr>
                <tr>
                  <td colspan="2" style="text-align: center;">
                    <strong>Género:</strong> {{ paciente.genero }}
                  </td>
                  <td colspan="2" style="text-align: center;">
                    <strong>Edad:</strong> {{ paciente.edad }}
                  </td>
                  <td colspan="2" style="text-align: center;">
                    <strong>EPS:</strong> {{ paciente.eps }}
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="table table-responsive">
              <thead>
                <tr>
                  <th>Tiempo Protrombina</th>
                  <th>Tiempo Tromboplastina P</th>
                  <th>Antitrombina III</th>
                  <th>Tiempo Trombina</th>
                  <th>Fibrinógeno</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">{{ paciente.tp }}</td>
                  <td class="text-center">{{ paciente.ptt }}</td>
                  <td class="text-center">{{ paciente.at }}</td>
                  <td class="text-center">{{ paciente.tt }}</td>
                  <td class="text-center">{{ paciente.fibrinogeno }}</td>
                </tr>
              </tbody>
            </table>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      paciente: {} //Crea un arreglo servicios que se va a ir llenando con lo que se retornó de la consulta del link en DatosRespuesta
    }
  },
  created: function () {
    this.consultarPaciente();
  },
  methods: {
    //http://localhost/api/


    consultarPaciente() {
      let userPacienteId = this.$route.params.documento
      fetch(
        "http://localhost/api/?consultar=" + userPacienteId
      )
        .then(respuesta => respuesta.json()) //es como un return y también hago una función arrow para volver la respuesta un json
        .then((datosRespuesta) => {
          console.log(datosRespuesta,)
          this.paciente = datosRespuesta[0];
          console.log(this.paciente.documento)


        })
        .catch(console.log) //es como try except


    },
  }
}
</script>


<style lang="scss" scoped>
.custom-link {
  text-decoration: underline;
  /* Añade un subrayado */
  color: black;
  /* Cambia el color del subrayado a negro */
}


.custom-link:hover {


  color: var(--primary); //Al pasar por encima se ve azul


}
.personal {
    background-color: #ffffff;
    display: flex;
    margin-right: 0;
    margin-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    width: 100%;
    align-items: center;
}

.container {
    background-color: #dae2eb;
    display: flex;
    width: 60%;
    height: 80%;
    // margin-right: 10rem;
    // margin-left: 10rem;
    // margin-top: 0;
    // margin-bottom: 0;
    align-items: center;

}

.card {
    background-color: #fdfdfd;
    display: flex;
    width: 85%;
    height: 90%;
    
    // margin-right: 2rem;
    // margin-left: 2rem;
    // margin-top: 2rem;
    // margin-bottom: 2rem;

    .regresar{
        background-color: #fdfdfd;
        display: flex;
        margin-right: 2rem;
    margin-left: 40rem;
    margin-top: 13rem;
    margin-bottom:0;

    }
  }
</style>