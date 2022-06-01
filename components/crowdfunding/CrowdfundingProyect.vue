<template>
<div class="col-lg-10 col-sm-12">
     <div class="row bg-gray same-height">
        <div class="row">
            <div class="col-lg-4 step-title color-green">Proyecto</div>
            <div class="col-lg-4 text-center step-title color-secondary">Equipo</div>
            <div class="col-lg-4 text-end step-title color-secondary">Finanzas</div>
        </div>
        <div class="row p-3">
            <img src="~/assets/images/stepone_icon.svg" class="z-index"/>
        </div>
        <div>
            <div class="row">
                <h2 class="step-content-title color-green mb-3">Nuevo Proyecto</h2>
                <hr>
                <p class="step-content color-primary">Para iniciar un nuevo proyecto, te solicitaremos que ingreses información general sobre el negocio, sobre el equipo directivo y sobre las finanzas o proyecciones. Con esta información MonE generará un rango de valuación probable para el pool de inversionistas de nuestro ecosistema.</p>
            </div>
            <div class="row">
                <div class="col-lg-6"><input type="text" placeholder="Nombre del Proyecto"/></div>
            </div>
            <div class="row mt-3">
                <div class="col-lg-12">
                    <textarea placeholder="Síntesis del Negocio"></textarea>
                </div>
            </div>
            <div class="row mt-4 ">
                <div class="d-flex justify-content-center z-index">
                    <img src="~/assets/images/belowarrow_icon.svg" class="z-index" @click="perfiModal"/>
                </div>
            </div>
        </div>
    </div>
    <!-- modal -->
    <div v-show="opened" class="perfi-modal">
        <div class="perfi-modal-content">
            <div class="row text-end">
                <span @click="hide" class="close-btn"></span>
            </div>
            <div class="row mb-2">
                <h4>Perfil del Inversionista</h4>
                <p class="perfi-sub-title">¡Alguien se ha interesado en tu negocio!</p>
            </div>
            <hr>
            <div class="row mt-2">
                <div class="col-lg-6">
                    <div class="perfi-content">
                        <h6>Tipo de Organización</h6>
                        <p>Experiencia como inversionista
                        Países en los que invierte
                        Industrias en las que invierte
                        Descripción</p>
                    </div>
                    <div class="perfi-content">
                        <span class="color-green">3 matches</span> previos en MonE
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="perfi-content perfi-vertical">
                        Incubadora de Startups
                        Entre 10 a 20 inversiones previas
                        Ecuador, Colombia, México, Perú
                        Fintech, Turismo, Economía Circular<br>
                        Somos una incubadora de startups tecnológicas
                        basados en Medellín, Colombia. Invertimos en 
                        compañías que ya están generando ventas y cuyos
                        ingresos superan $100,000.
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center mt-5">
                <div class="text-center p-3">
                    <img src="~/assets/images/missave.svg"/>
                    <div class="mis-icon-text">Guardar</div>
                </div>
                <div class="text-center p-3">
                    <img src="~/assets/images/mislike.svg"/>
                    <div class="mis-icon-text">Conversar</div>
                </div>
                <div class="text-center p-3">
                    <img src="~/assets/images/blackdislike_icon.svg"/>
                    <div class="mis-icon-text">Rechazar</div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            opened: false
        }
    },
    methods:{
        perfiModal(){
            this.opened = true
        },
        hide(){
            this.opened = false
        }
    }
}
</script>