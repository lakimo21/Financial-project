<template>
  <div class="col-lg-10 col-sm-12">
    <div class="row bg-gray same-height">
      <div class="row">
        <div class="col-lg-4 step-title color-green">Periodo</div>
        <div class="col-lg-4 text-center step-title color-green">Data Financiera</div>
        <div class="col-lg-4 text-end step-title color-green">Finanzas</div>
      </div>
      <div class="row p-3">
        <img src="~/assets/images/stepthird_icon.svg" />
      </div>
      <div class="row">
        <h2 class="step-content-title color-green mb-3">¡Eso es todo! Puedes descargar tu reporte</h2>
        <hr />
      </div>
      <div class="row d-flex align-items-center">
          <div class="col-lg-3">
              <img src="~/assets/images/laststep_icon.svg"/>
          </div>
          <div class="col-lg-3 offset-1">
              <div>
                <button type="button" class="laststep-btn1">Ver Reporte</button>
              </div>
              <div class="pt-3">
                <button type="button" class="laststep-btn2">Realizar Correcciones</button>
              </div>
              <div class="pt-3"><button type="button" class="laststep-btn3">Descargar / Imprimir</button></div>
              <div class="pt-3"><button type="button" class="laststep-btn4">Volver al Tablero</button></div>
          </div>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
}
</script>