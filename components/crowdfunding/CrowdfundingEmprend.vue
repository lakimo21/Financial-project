<template>
  <div class="col-lg-10 col-sm-12">
    <h2 class="snapshot-title ps-4 mb-4">Mis Emprendimientos (TBD)</h2>
    <div class="row bg-gray same-height">
      <div class="col-lg-3">
        <div class="snap-card">
          <div>
            <h4 class="snap-title">
              Proyecto
              <br />
              <span class="color-primary">Nombre del proyecto</span>
            </h4>
          </div>
          <hr />
          <div class="d-flex justify-content-bewteen">
            <h4 class="snap-title">
              Postulación
              <br />
              <span class="color-primary">50% Completado</span>
            </h4>
            <span class="emprend-btn1">Completar</span>
          </div>
          <hr>
          <div>
            <h4 class="snap-title">
              Valuación MonE
              <br />
              <span class="color-primary">Pendiente</span>
            </h4>
          </div>
          <hr>
          <div>
            <h4 class="snap-title">
             Estatus
              <br />
              <span class="color-primary">Inactivo</span>
            </h4>
          </div>
          <hr>
          <div class="d-flex justify-content-between">
            <h4 class="snap-title">
             Interesados
              <br />
              <span class="color-primary">N/A</span>
            </h4>
             <span class="emprend-btn2">Ver</span>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="snap-card">
          <div>
            <h4 class="snap-title">
              Proyecto
              <br />
              <span class="color-primary">Nombre del proyecto</span>
            </h4>
          </div>
          <hr />
          <div class="d-flex justify-content-bewteen">
            <h4 class="snap-title">
              Postulación
              <br />
              <span class="color-primary">50% Completado</span>
            </h4>
            
          </div>
          <hr>
          <div class="d-flex justify-content-between">
            <h4 class="snap-title">
              Valuación MonE
              <br />
              <span class="color-primary">Pendiente</span>
            </h4>
            <span class="emprend-btn1">Solicitar</span>
          </div>
          <hr>
          <div>
            <h4 class="snap-title">
             Estatus
              <br />
              <span class="color-primary">Inactivo</span>
            </h4>
          </div>
          <hr>
          <div class="d-flex justify-content-between">
            <h4 class="snap-title">
             Interesados
              <br />
              <span class="color-primary">N/A</span>
            </h4>
             <span class="emprend-btn2">Ver</span>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="snap-card">
          <div>
            <h4 class="snap-title">
              Proyecto
              <br />
              <span class="color-primary">Nombre del proyecto</span>
            </h4>
          </div>
          <hr />
          <div class="d-flex justify-content-bewteen">
            <h4 class="snap-title">
              Postulación
              <br />
              <span class="color-primary">50% Completado</span>
            </h4>
            
          </div>
          <hr>
          <div class="d-flex justify-content-between">
            <h4 class="snap-title">
              Valuación MonE
              <br />
              <span class="color-primary">Pendiente</span>
            </h4>
          </div>
          <hr>
          <div>
            <h4 class="snap-title">
             Estatus
              <br />
              <span class="color-primary">Inactivo</span>
            </h4>
          </div>
          <hr>
          <div class="d-flex justify-content-between">
            <h4 class="snap-title">
             Interesados
              <br />
              <span class="color-primary">N/A</span>
            </h4>
             <span class="emprend-btn1">Ver</span>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="snap-card-last text-center">
          <div>
            <h4 class="color-green">Nuevo Emprendimiento</h4>
            <p>Postula tu proyecto o compañía. Avalúalo con MonE y accede al Pool de Inversionistas</p>
            <button type="button" class="snap-btn3" @click="crowdComponent">Crear</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    crowdComponent() {
      this.$emit('crowdComponent', 'CrowdfundingProyect')
    }
  },
  
};
</script>