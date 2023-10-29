<template>
  <div class="personal">
    <!-- Agregar margen superior al card para separarlo de la barra de navegación -->
    <div class="container mt-3 justify-content-center">
      <div class="d-flex justify-content-center">
        <div class="card " style="width: 40rem;">

          <div class="card-body">
            <h4 class="card-title mb-4 text-center"><strong>Lista de pacientes</strong></h4>
            <table class="table table-responsive">
              <thead>
                <tr>
                  <th style="text-align: center;">Documento</th>
                  <th style="text-align: center;">Nombre</th>
                  <th style="text-align: center;">Resultados</th>
                  <th style="text-align: center;">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="paciente in pacientes" :key="paciente.id">
                  <!-- <td scope="row">
                    <router-link :to="{ name: 'ListarUsuario', params: { id: paciente.id }}"  class="custom-link">{{ paciente.name }}</router-link>
                  </td> -->
                  <td scope="row">{{ paciente.documento }}</td>
                  <td> {{ paciente.nombre }} {{ paciente.apellidos }}</td>
                  <td> <router-link :to="{ name: 'VerResultados', params: { id: paciente.documento } }"
                      class="link-black">Ver resultados</router-link>
                    <!-- ACA PONER ROUTER LINK A PAGINA RESULTADOS POR PACIENTE CORREGIDO:  -->
                    <!-- <router-link :to="{ name: 'ListarUnPaciente', params: { id: paciente.documento }}"  class="custom-link">Resultado prueba de coagulación</router-link> -->
                  </td>
                  <td>
                    <!-- 
                    <router-link :to="{ name: 'EditarPaciente', params: { id: paciente.documento } }"
                      class="btn btn-outline-info">Editar</router-link> -->
                    <router-link :to="{ name: 'EditarPaciente', params: { id: paciente.documento } }"
                      style="border: none; background: none;"><span class="material-icons text-muted"
                        style="font-size: 24px;">edit</span></router-link>

                    <!-- <button type="button" v-on:click="borrarPaciente(paciente.id)" class="btn btn-outline-danger" style="margin-left: 10px;">Borrar</button> -->
                    <!-- Button trigger modal BOTON BORRAR CON CONFIRMACIÓN -->
                    <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                      style="margin-left: 10px; border: none; background: none;">
                      <span class="material-icons text-muted" style="font-size: 24px;">delete</span>
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                      tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Borrar usuario</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            Esta acción eliminará el usuario permanentemente
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary"
                              v-on:click="borrarPaciente(paciente.id)">Entendido</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
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
      pacientes: [], //Crea un arreglo pacientes que se va a ir llenando con lo que se retornó de la consulta dle link en DatosRespuesta
    };
  },
  created: function () {
    this.consultarPacientes();
  },
  methods: {
    consultarPacientes() {
      fetch('http://localhost/api/') // se conecta con api
        .then(respuesta => respuesta.json()) // promesas para recibir info: cuando ese fetch retorne algo entonces haga eso
        .then(datosRespuesta => {
          console.log(datosRespuesta)
          this.pacientes = [] // incializo arreglo vacio
          if (typeof datosRespuesta[0].success === 'undefined') { // api siempre me retorna un success, entonces si vuene vacio
            this.pacientes = datosRespuesta; // como estan vacios los datos entonces lo llenamos
          }
        })
        .catch(console.log) // si genera error entonces que muestre
    },

    borrarPaciente(id) {
      console.log(id)
      fetch('http://localhost/api/?borrar=' + id)
        .then(respuesta => respuesta.json())
        .then((datosRespuesta) => {
          console.log(datosRespuesta)
          window.location.href = "ListarPacientes"
        })
        .catch(console.log)
    }
  }
};
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
}
.container {
  background-color: #dae2eb;
  display: flex;
  margin-right: 20rem;
  margin-left: 20rem;
  margin-top: 0;
  margin-bottom: 0;

}

.card {
  background-color: #fdfdfd;
  display: flex;
  margin-right: 2rem;
  margin-left: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

}

.link-black {
  color: black;
  /* Color de texto inicial (negro) */
  text-decoration: underline;
  /* Quitar subrayado por defecto */

  &:hover {
    color: #a6cffd;
    /* Color de texto al pasar el cursor (azul) */
  }
}
</style>