<template>
  <div>
    <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="nav navbar-nav">
        <!-- <router-link :to="{ name: 'Crearpaciente' }" class="btn btn-info" style="margin-left: 30px;">Nuevo</router-link> -->
      </div>
    </nav>

    <!-- Agregar margen superior al card para separarlo de la barra de navegación -->
    <div class="container mt-3">
      <div class="d-flex justify-content-center">
        <div class="card">
          <div class="card-header">
            Consulta de pacientes
          </div>
          <div class="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th>Documento</th>
                  <th>Nombre</th>                  
                  <th>Resultados</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody> 
                <tr v-for="paciente in pacientes" :key="paciente.id">
                  <!-- <td scope="row">
                    <router-link :to="{ name: 'ListarUsuario', params: { id: paciente.id }}"  class="custom-link">{{ paciente.name }}</router-link>
                  </td> -->
                  <td scope="row">{{ paciente.documento }}</td>
                  <td> {{paciente.nombre}} {{paciente.apellidos}}</td>
                  <td> "link resultados"  <!-- ACA PONER ROUTER LINK A PAGINA RESULTADOS POR PACIENTE CORREGIDO:  -->
                    <!-- <router-link :to="{ name: 'ListarUnPaciente', params: { id: paciente.documento }}"  class="custom-link">Resultado prueba de coagulación</router-link> -->
                  </td>
                  <td>
                    <div class="btn-group" role="group" aria-label="">
                      <router-link :to="{ name: 'EditarPaciente', params: { id: paciente.id } }" class="btn btn-info">Editar</router-link>
                      <button type="button" v-on:click="borrarPaciente(paciente.id)" class="btn btn-danger">Borrar</button>
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
      .then(respuesta=>respuesta.json()) // promesas para recibir info: cuando ese fetch retorne algo entonces haga eso
            .then(datosRespuesta=>{
                console.log(datosRespuesta)
                this.pacientes=[] // incializo arreglo vacio
                if(typeof datosRespuesta[0].success==='undefined'){ // api siempre me retorna un success, entonces si vuene vacio
                    this.pacientes = datosRespuesta; // como estan vacios los datos entonces lo llenamos
                } 
            })
            .catch(console.log) // si genera error entonces que muestre
        },

    borrarPaciente(id){
            console.log(id)
            fetch('http://localhost/api/?borrar='+id)
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta)=>{
                console.log(datosRespuesta)
                window.location.href="ListarPacientes"
            })
            .catch(console.log)
    }
  }
};
</script>

<style lang="scss" scoped>
.custom-link{
  text-decoration: underline;/* Añade un subrayado */
  color:black; /* Cambia el color del subrayado a negro */
}
.custom-link:hover {

  color:var(--primary); //Al pasar por encima se ve azul

  }
</style>