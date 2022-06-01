<template>
  <div class="intro">
    <div class="container">
      <div class="row pt-5">
        <div class="col-lg-2 col-sm-12">
          <LoggedSidebar />
        </div>
        <component :is="active_component" v-on:valoraForm="activeValoraForm"></component>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "HeaderFooter",
  data() {
    return {
      active_component: "ValoracinesIndex"
    };
  },
  methods: {
    activeValoraForm(value) {
      if ("ValoracinesStepOne" === value) {
        this.active_component = "ValoracinesStepOne";
      } else if ("ValoracinesStepTwo" === value) {
        this.active_component = "ValoracinesStepTwo";
      } else if ("ValoracinesStepLast" === value) {
        this.active_component = "ValoracinesStepLast";
      }
    }
  }
};
</script>