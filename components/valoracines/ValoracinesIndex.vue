<template>
  <div class="col-lg-10 col-sm-12">
    <h2 class="snapshot-title ps-4 mb-4">Mis Proyectos (TBD)</h2>
    <div class="row bg-gray same-height">
      <div class="col-lg-3">
        <div class="snap-card">
          <div>
            <h4 class="snap-title">
              <img src="~/assets/images/case_icon.svg" class="pe-2" />Proyecto
              <br />
              <span class="color-primary ps-4">Aqua World</span>
            </h4>
          </div>
          <hr />
          <div>
            <h4 class="snap-title">
              <img src="~/assets/images/setting_icon.svg" class="pe-2" />Valuación: 5-Sep-2021
              <br />
              <span class="color-primary ps-4">Desde $300,000 a $550,000</span>
            </h4>
          </div>
          <div class="mt-3">
            <button type="button" class="snap-btn1">Ver Informe</button>
          </div>
          <div class="mt-3">
            <button type="button" class="snap-btn2">Solicitar Actualización</button>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="snap-card">
          <div>
            <h4 class="snap-title">
              <img src="~/assets/images/case_icon.svg" class="pe-2" />Proyecto
              <br />
              <span class="color-primary ps-4">Aqua World</span>
            </h4>
          </div>
          <hr />
          <div>
            <h4 class="snap-title">
              <img src="~/assets/images/setting_icon.svg" class="pe-2" />Valuación: 5-Sep-2021
              <br />
              <span class="color-primary ps-4">Desde $300,000 a $550,000</span>
            </h4>
          </div>
          <div class="mt-3">
            <button type="button" class="snap-btn1">Ver Informe</button>
          </div>
          <div class="mt-3">
            <button type="button" class="snap-btn2">Solicitar Actualización</button>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="snap-card-last text-center">
          <div>
            <h4 class="color-green">Nuevo Proyecto</h4>
            <p>Solicita la valoración de un nuevo proyecto. Si es un proyecto previamente valorado, solicita una actualización.</p>
            <button type="button" class="snap-btn3" @click="valoraForm">Crear</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
  methods: {
    valoraForm() {
      this.$emit('valoraForm', 'ValoracinesStepOne')
    }
  },
  
};
</script>