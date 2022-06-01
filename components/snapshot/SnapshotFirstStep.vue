<template>
<div class="col-lg-10 col-sm-12">
     <div class="row bg-gray same-height">
        <div class="row">
            <div class="col-lg-4 step-title color-green">Periodo</div>
            <div class="col-lg-4 text-center step-title color-secondary">Data Financiera</div>
            <div class="col-lg-4 text-end step-title color-secondary">Finanzas</div>
        </div>
        <div class="row p-3">
            <img src="~/assets/images/stepone_icon.svg"/>
        </div>
        <div v-if="first_step">
            <div class="row">
                <h2 class="step-content-title color-green mb-3">Nueva Organización</h2>
                <hr>
                <p class="step-content color-primary">Para iniciar un nuevo Snapshot te solicitaremos que cargues los balances de tu compañía bajo un formato estándar que te lo proporcionaremos.</p>
            </div>
            <div class="row">
                <div class="col-lg-6"><input type="text" placeholder="Nombre de la Organización"/></div>
                <div class="col-lg-6"><select><option>Industria</option></select></div>
            </div>
            <div class="row mt-3">
                <div class="col-lg-6"><input type="text" placeholder="Nombre del Fundador o Director"/></div>
                <div class="col-lg-6"><select><option>Tipo de Organización</option></select></div>
            </div>
            <div class="row mt-3">
                <div class="col-lg-6"><select><option>Fecha de Inicio</option></select></div>
                <div class="col-lg-6"><select><option>País</option></select></div>
            </div>
            <div class="row mt-4 ">
                <div class="d-flex justify-content-center z-index">
                    <img src="~/assets/images/belowarrow_icon.svg" @click="extendsStep" class="z-index"/>
                </div>
            </div>
        </div>
        <div v-if="!first_step">
            <div class="row">
                <h2 class="step-content-title color-green mb-3">Ingreso de Datos Financieros</h2>
                <hr>
                <p class="step-content color-primary">Para iniciar un nuevo Snapshot te solicitaremos que cargues los balances de tu compañía bajo un formato estándar que te lo proporcionaremos.</p>
            </div>
            <div class="row">
                <div class="col-lg-6"><select><option>Tipo de Datos a Usar</option></select></div>
                <div class="col-lg-6"><select><option>Período de los Estados Financieros</option></select></div>
            </div>
            <div class="row mt-3">
                <div class="col-lg-6"><select><option>Cantidad de períodos</option></select></div>
                <div class="col-lg-6"><select><option>Fecha de inicio del período</option></select></div>
            </div>
            <div class="row mt-4 ">
                <div class="d-flex justify-content-center z-index">
                    <img src="~/assets/images/belowarrow_icon.svg" @click="stepForm" class="z-index"/>
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
    stepForm() {
      this.$emit('stepForm', 'SnapshotSecondStep')
    },
    extendsStep(){
        this.first_step = false
    }
  }
}
</script>