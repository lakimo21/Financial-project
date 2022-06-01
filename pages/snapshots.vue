<template>
  <div class="intro">
    <div class="container">
      <div class="row pt-5">
        <div class="col-lg-2 col-sm-12">
          <LoggedSidebar />
        </div>
          <!-- <SnapshotOrg />
          <SnapshotFirstStep /> -->
          <component :is="active_component" v-on:stepForm="activeForm"></component>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "HeaderFooter",
  data() {
    return {
      active_component: "SnapshotOrg"
    };
  },
  methods: {
    activeForm( value ) {
      if ('SnapshotFirstStep' === value) {
          this.active_component = 'SnapshotFirstStep'
      }else if('SnapshotSecondStep' === value){
          this.active_component = 'SnapshotSecondStep'
      }else if('SnapshotThirdStep' === value){
          this.active_component = 'SnapshotThirdStep'
      }else if('SnapshotLastStep' === value){
          this.active_component = 'SnapshotLastStep'
      }
    }
  },
};
</script>