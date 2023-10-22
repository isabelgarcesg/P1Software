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
            </div>
        </div>
        <div class="cuerpo">
            <div class="parrafo-background">
                <p class="parrafo-azul">
                    <br> <br>Somos un laboratorio, con más de una década de experiencia, nos enorgullece servir a la comunidad con compromiso y dedicación. 
                    <br> <br>Nuestra pasión por la salud y la calidad nos ha convertido en un referente confiable para pruebas diagnósticas precisas. 
                    <br> <br>Cada día, trabajamos incansablemente para ofrecer resultados confiables que marcan la diferencia en la vida de las personas
                </p>
            </div>
            <img class="tamano2" :src="require('@/assets/fondo.jpg')" alt="Fondo">
        </div>
    </main>
</template>
<style lang="scss" scoped>
.top-bar {
    background-color: var(--dark-alt);
    display: flex;
    align-items: center;
    padding: 10px;
    max-height: 180px; /* Ajusta el alto máximo de la barra superior */
}

.logo-section {
    flex: 1;
}

.tamano {
    max-height: 50%; /* Ajusta la altura máxima del logo al de la barra superior */
    width: 150px; /* Ancho automático para mantener la proporción */
}

.text-section {
    flex: 5;
    color: white;
}

.cuerpo {
    display: flex;
    flex-direction: row; /* Mantén la alineación horizontal */
    color: white;
}

.parrafo-background {
    background: var(--primary);
    padding: 20px;
    text-align: justify;
    flex: 1;
}

.parrafo-azul {
    color: black;
    font-size: 1rem;
}

.tamano2 {
    max-width: 100%;
    height: 600px;
 /* Espacio entre el párrafo y la imagen */
}

@media (max-width: 768px) {
    .cuerpo {
        flex-direction: column; /* Cambia a alineación vertical en pantallas más pequeñas */
    }
    .top-bar {
        max-height: auto; /* Restaura el alto máximo predeterminado en pantallas más pequeñas */
    }
}
</style>
