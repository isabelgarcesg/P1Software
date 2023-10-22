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
                                    <th>Tiempo Protrombina</th>
                                    <th>Tiempo Tromboplatina P</th>
                                    <th>Antitrombina III</th>
                                    <th>Tiempo Trombina</th>
                                    <th>Fibrinógeno</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row">{{ paciente.documento }}</td>
                                    <td> {{ paciente.nombre }} {{ paciente.apellidos }}</td>
                                    <td>   {{ paciente.tp}}</td>
                                    <td>  {{ paciente.ptt }}   </td>    
                                    <td>  {{ paciente.at}}   </td>   
                                    <td>  {{ paciente.tt }}   </td>   
                                    <td>  {{ paciente.fibrinogeno }}   </td>                       

                                   
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
                console.log(datosRespuesta,)
                this.paciente=datosRespuesta[0];
                console.log(this.paciente.documento)
                
            })
            .catch(console.log) //es como try except

  },


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
</style>