<template>
  <div class="intro">
    <div class="container">
      <div class="row pt-5">
        <div class="col-lg-2 col-sm-12">
            <LoggedSidebar />
        </div>
            <component :is="active_component" v-on:crowdComponent="replaceComponent"></component>
      </div>
    </div>
  </div>
</template>
<script>

export default {
    
    layout: "HeaderFooter",
    data() {
        return {
            active_component: "CrowdfundingIndex"
        }
    },
    methods:{
        replaceComponent(componentname){
            console.log(componentname);
            if(componentname === 'CrowdfundingMis'){
                this.active_component = 'CrowdfundingMis'
            }else if(componentname === 'CrowdfundingProfile'){
                this.active_component = 'CrowdfundingProfile'
            }
        }
    }

};
</script>