<template>
  <div>
    <nav class="navbar navbar-expand navbar-light bg-light">

    </nav>

    <!-- Agregar margen superior al card para separarlo de la barra de navegación -->
    <div class="container mt-3">
      <div class="d-flex justify-content-center">
        <div class="card">
          <div class="card-header">
            Paciente
          </div>
          <div class="card-body">
            <table class="table table-responsive">
              <tbody>
                <tr>
                  <td></td>
                  <td colspan="2" style="text-align: center;">
                    <strong>Documento:</strong> {{ paciente.documento }}
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td colspan="2" style="text-align: center;">
                    <strong>Nombre:</strong> {{ paciente.nombre }} {{ paciente.apellidos }}
                  </td>
                  <td></td>
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
            <div class="regresar"><router-link :to="{ name: 'home' }"
                class="btn btn-primary">Regresar</router-link></div>
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
</style>