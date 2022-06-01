<template>
  <div class="col-lg-10 col-sm-12">
    <div class="row bg-gray same-height">
      <div class="row">
        <div class="col-lg-4 step-title color-green">Periodo</div>
        <div class="col-lg-4 text-center step-title color-green">Data Financiera</div>
        <div class="col-lg-4 text-end step-title color-secondary">Finanzas</div>
      </div>
      <div class="row p-3">
        <img src="~/assets/images/steptwo_icon.svg" />
      </div>
      <div class="row">
        <h2 class="step-content-title color-green mb-3">Carga de Estados Financieros</h2>
        <hr />
        <p
          class="step-content color-primary"
        >Por favor descarga la plantilla modelo, complétala y guarda el archivo en formato CSV.</p>
      </div>
      <div class="row mt-2">
        <a href="javascript:void(0)" class="download-btn">
          <img src="~/assets/images/download_icon.svg" class="pe-3" />Descargar plantilla ejemplo
        </a>
      </div>
      <div class="row mt-5">
        <div>
          <img src="~/assets/images/csv_icon.svg" class="pe-3" />
          <img src="~/assets/images/virtical_icon.svg" class="pe-3" />
          <button type="button" class="snap-btn4">Cargar Plantilla Llena</button>
        </div>
      </div>
      <div class="row mt-lg-5">
        <div class="col-lg-3">
          <button type="button" class="snap-btn1">Volver</button>
        </div>
        <div class="col-lg-3">
          <button type="button" class="snap-btn2" @click="stepForm">Continuar</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    stepForm() {
      this.$emit("stepForm", "SnapshotThirdStep");
    }
  }
};
</script>