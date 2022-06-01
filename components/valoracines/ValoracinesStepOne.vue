<template>
<div class="col-lg-10 col-sm-12">
     <div class="row bg-gray same-height">
        <div class="step-header">
            <span class="step-title color-green">General</span>
            <span class="step-title color-secondary">Mercado</span>
            <span class="step-title color-secondary">Equipo</span>
            <span class="step-title color-secondary">Financiero</span>
            <span class="step-title color-secondary">Confirmar</span>
        </div>
        <div class="row p-3">
            <img v-if="first_step" src="~/assets/images/valoracines_stepone.svg" class="z-index"/>
            <img v-if="!first_step" src="~/assets/images/valoracines_steptwo.svg" class="z-index"/>
        </div>
        <div v-if="first_step">
            <div class="row">
                <h2 class="step-content-title color-green mb-3">Nuevo Proyecto</h2>
                <hr>
                <p class="step-content z-index color-primary">A continuación te solicitaremos información general del proyecto. De acuerdo a la etapa de madurez  que se encuentre, consultaremos información clave para proyectar un rango de valoración adecuado.</p>
            </div>
            <div class="row">
                <div class="col-lg-6"><input type="text" placeholder="Nombre del Proyecto"/></div>
                <div class="col-lg-6"><select><option>Industria</option></select></div>
            </div>
            <div class="row mt-3">
                <div class="col-lg-6"><input type="text" placeholder="¿En qué etapa se encuentra?"/></div>
                <div class="col-lg-6"><select><option>País</option></select></div>
            </div>
            <div class="row mt-3">
                <div class="col-lg-6"><select><option>Tipo de Reporte</option></select></div>
            </div>
            <div class="row mt-4 ">
                <div class="d-flex justify-content-center z-index">
                    <img src="~/assets/images/belowarrow_icon.svg" @click="extendsStep" class="z-index"/>
                </div>
            </div>
        </div>
        <div v-if="!first_step">
            <div class="row">
                <h2 class="step-content-title color-green mb-3">Nueva Organización</h2>
                <hr>
                <p class="step-content color-primary">Para iniciar un nuevo Snapshot te solicitaremos que cargues los balances de tu compañía bajo un formato estándar que te lo proporcionaremos.</p>
            </div>
            <div class="row mt-3 text-center">
                <div class="valora-question">¿Cómo deseas cargar la información?</div>
            </div>
            <div class="row mt-2 text-center">
                <div class="d-flex justify-content-center">
                    <div class="p-2">
                        <img src="~/assets/images/digital.svg"/>
                        <div class="valora-p pt-3">Digitar<br> Manualmente</div>
                    </div>
                    <div class="p-2">
                        <img src="~/assets/images/wechat.svg"/>
                        <div class="valora-p pt-3"> Carga<br>Plantilla</div>
                    </div>
                </div>
            </div>
            <div class="row mt-4 ">
                <div class="d-flex justify-content-center z-index">
                    <img src="~/assets/images/aboveicon.svg" @click="valoraForm" class="z-index"/>
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
            first_step:true
        }
    },
    methods: {
    valoraForm() {
      this.$emit('valoraForm', 'ValoracinesStepTwo')
    },
    extendsStep(){
        this.first_step = false
    }
  }
}
</script>