<template>
    <main class="home-page home-page-responsive">
        <div class="top-bar">
            <!-- Contenido del encabezado aquí -->
            <div class="logo-section">
                <img class="tamano" :src="require('@/assets/logo.png')" alt="Logo">
            </div>
            <div class="text-section">
                <h1>LabMed Diagnostics</h1>
                <p>Sistema de gestión de la información del laboratorio</p>
                <div class="search-section">
                    <form v-on:submit.prevent="listarPaciente" class="input-group input-group-sm">
                        <input type="text" class="form-control form-control-lm" v-model="paciente.documento"
                            placeholder="Ingrese su número de documento " aria-label="Recipient's username"
                            aria-describedby="button-addon2">
                        <button class="btn btn-outline-secondary" type="submit" id="button-addon2"><span
                                class="material-icons">
                                search
                            </span></button>
                    </form>
                </div>
            </div>
        </div>
        <div class="cuerpo">
            <div class="parrafo-background">
                <p class="parrafo-azul">
                    <br> <br>Somos un laboratorio, con más de una década de experiencia, nos enorgullece servir a la
                    comunidad con compromiso y dedicación.
                    <br> <br>Nuestra pasión por la salud y la calidad nos ha convertido en un referente confiable para
                    pruebas diagnósticas precisas.
                    <br> <br>Cada día, trabajamos incansablemente para ofrecer resultados confiables que marcan la
                    diferencia en la vida de las personas
                </p>
            </div>
            <img class="tamano2" :src="require('@/assets/fondo.jpg')" alt="Fondo">
        </div>
    </main>
</template>


<script>
export default {

    data() {
        return {
            paciente: {}
        }
    },
    methods: {
        //  SI QUIERE VERIFICAR QUE SE CREO LA ENTIDAD PONGA EL SIGUIENTE LINK EN EL NAVEGADOR:
        // https://redb.qsystems.co/QS3100/QServlet?operation=queryEntityByTenancy&tna=6&key=11e2e476-717b-4898-ac02-693abdecdc9b
        listarPaciente() {
            console.log(this.paciente)
            console.log(this.paciente.documento)
            window.location.href = "/ListarUnPaciente/" + this.paciente.documento //Redirecciona a la ruta listar
        }
    }
}
</script>


<style lang="scss" scoped>
.top-bar {
    background-color: var(--dark-alt);
    display: flex;
    align-items: center;
    padding: 10px;
    max-height: 180px;

    .search-section {
        display: flex;
        width: 280px;   
        margin-left: auto; /* Mover el bloque de búsqueda a la derecha */
        button {
            background-color: var(--primary);
            border-color: var(--primary);
            color: var(--dark-alt);
            border-radius: 20px;
        }

        button:hover {
            background-color: #d8d8d8;
            border-color: #d8d8d8;
        }

        input {
            border-radius: 20px;
        }
    }

}

.logo-section {
    flex: 1;
}

.tamano {
    max-height: 50%;
    width: 150px;
}

.text-section {
    flex: 5;
    color: white;
}

.cuerpo {
    display: grid;
    grid-template-columns: 1fr 2fr; /* Divide el cuerpo en dos columnas */
    // grid-gap: 20px; /* Espacio entre las dos columnas */
    color: white;
}

.parrafo-background {
    background: var(--primary);
    padding: 20px;
    text-align: justify;
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* El párrafo ocupa el espacio vertical */
}

.parrafo-azul {
    color: black;
    font-size: 1rem;
    margin: 2rem;
}

.tamano2 {
    max-width: 100%;
    height: auto; /* Ajustar la altura de la imagen automáticamente */
}

@media (max-width: 768px) {
    .cuerpo {
        grid-template-columns: 1fr; /* Una sola columna en pantallas pequeñas */
    }
    .top-bar {
        max-height: auto;
    }
}
</style>