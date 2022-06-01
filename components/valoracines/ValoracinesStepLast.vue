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
            <img src="~/assets/images/valoralast_icon.svg" class="z-index"/>
        </div>
        <div class="row">
            <h2 class="step-content-title color-green mb-3">¡Listo!</h2>
            <hr>
            <p class="step-content z-index color-primary">Por favor revisa la información proporcionada. Si todo es correcto, haz clic en “ENVIAR” y dentro de 48 horas laborables tendrás disponible la valuación de tu proyecto en tu Portal. Si deseas realizar cambios, puedes usar la opción “Modificar”.
Una vez enviado, no se podrán realizar cambios.</p>
        </div>
      <div class="row mt-5">
        <div class="color-green">
          <img src="~/assets/images/file_icon.svg" class="pe-3" />
          <img src="~/assets/images/vertical_icon.svg" class="pe-3" />
          Ver Resumen
        </div>
      </div>
      <div class="row mt-lg-5">
        <div class="col-lg-3">
          <button type="button" class="snap-btn1">Modificar</button>
        </div>
        <div class="col-lg-3">
          <button type="button" class="snap-btn2">Enviar</button>
        </div>
      </div>
    </div>
</div>
</template>
<script>
export default {
  
}
</script>