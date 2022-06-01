<template>
  <div class="col-lg-10 col-sm-12">
    <h2 class="snapshot-title ps-4 mb-4">Mis Organizaciones</h2>
    <div class="row bg-gray same-height">
      <div class="col-lg-3">
        <div class="snap-card">
          <div>
            <h4 class="snap-title">
              <img src="~/assets/images/case_icon.svg" class="pe-2" />Compañía
              <br />
              <span class="color-primary ps-4">Empresa Demo S.A.</span>
            </h4>
          </div>
          <hr />
          <div>
            <h4 class="snap-title">
              <img src="~/assets/images/setting_icon.svg" class="pe-2" />Último Snapshot
              <br />
              <span class="color-primary ps-4">06-2018 - Mensual</span>
            </h4>
          </div>
          <div class="mt-3">
            <button type="button" class="snap-btn1">Reportes Previos</button>
          </div>
          <div class="mt-3">
            <button type="button" class="snap-btn2">Nuevo Snapshot</button>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="snap-card">
          <div>
            <h4 class="snap-title">
              <img src="~/assets/images/case_icon.svg" class="pe-2" />StartUp
              <br />
              <span class="color-primary ps-4">Franquicia Dr. Pet</span>
            </h4>
          </div>
          <hr />
          <div>
            <h4 class="snap-title">
              <img src="~/assets/images/setting_icon.svg" class="pe-2" />Último Snapshot
              <br />
              <span class="color-primary ps-4">Pendiente</span>
            </h4>
          </div>
          <div class="mt-3">
            <button type="button" class="snap-btn1">Reportes Previos</button>
          </div>
          <div class="mt-3">
            <button type="button" class="snap-btn2">Nuevo Snapshot</button>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="snap-card-last text-center">
          <div>
            <h4 class="color-green">Nueva Organización</h4>
            <p>Crea una nueva organización para empezar a generar reportes financieros</p>
            <button type="button" class="snap-btn3" @click="stepForm">Crear</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
  methods: {
    stepForm() {
      this.$emit('stepForm', 'SnapshotFirstStep')
    }
  },
  
};
</script>