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
        <h2 class="step-content-title color-green mb-3">Ingreso de datos Financieros</h2>
        <hr />
      </div>
      <div class="row">
        <div class="table-responsive">
          <table class="table">
            <tr>
              <th></th>
              <th><input type="checkbox"/></th>
              <th>Rubro/periodo</th>
              <th>Jan</th>
              <th>Feb</th>
              <th>Mar</th>
              <th>Apr</th>
              <th>May</th>
            </tr>
            <tr v-for="(item, index) in items" :key="item.id">
              <td>{{ index }}</td>
              <td><input type="checkbox"/></td>
              <td>Activo corriente</td>
              <td>{{ item}}</td>
              <td>721</td>
              <td>132</td>
              <td>4210</td>
              <td>2141</td>
            </tr>
          </table>
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
    data(){
      return{
        items:15
      }
    },
    methods:{
      stepForm(){
        this.$emit('stepForm', 'SnapshotLastStep')
      }
    }
}
</script>