<template>
  <div class="col-lg-10 col-sm-12">
    <div class="row">
        <div class="col-lg-4">
            <h2 class="snapshot-title ps-4 mb-4">Mis Inversiones</h2>
        </div>
        <div class="col-lg-2">
            <button type="button" class="crowd-btn1" 
                @click="ezs">Explorar<br></button>
        </div>
        <div class="col-lg-3">
            <button type="button" class="crowd-btn2 text-right" @click="crowdMis">Mi perfil de<br > Inversionista</button>
        </div>
        <div class="col-lg-3">
            <button type="button" class="crowd-btn3" @click="crowdProfile">Mis<br> Emprendimientos</button>
        </div>
    </div>
    <div class="row bg-gray same-height crowd-scroll">
      <div class="row"  >
          <div class="col-lg-3">
              <input type="text"  placeholder="Match Declinado"/>
          </div>
          <div class="col-lg-3">
              <select><option>Todos los Estados</option></select>
          </div>
          <div class="col-lg-3">
              <select><option>Todas las Industrias</option></select>
          </div>
          <div class="col-lg-3">
              <select><option>Rango de Valuación</option></select>
          </div>
      </div>
      <div class="row">
      <div class="col-lg-3 p-2">
        <div class="crowd-card z-index">
        <div class='text-end'>
            <dropdown-menu :overlay="false">
                <button slot="trigger" class="dropdown-btn">
                <img src='~/assets/images/dot_icon.svg'/>
                </button>
                <ul slot="body" class="dropdown_menu">
                    <li><NuxtLink to="#">Olvidar</NuxtLink></li>
                    <li><NuxtLink to="#">Ver Detalles</NuxtLink></li>
                </ul>
            </dropdown-menu>
        </div>
        <div>
        <h4 class="snap-title">
            <img src="~/assets/images/case_icon.svg" class="pe-2" />Empresa
            <br />
            <span class="color-primary ps-4">Empresa Demo S.A.</span>
        </h4>
        </div>
        <hr />
        <div>
        <h4 class="snap-title">
            <img src="~/assets/images/dollar_icon.svg" class="pe-2" />Rango Valuación:
            <br />
            <span class="color-primary ps-4">$200,000 a $350,000</span>
        </h4>
        </div>
        <hr />
        <div class="mt-3">
        <h4 class="snap-title">
            <img src="~/assets/images/favorite_icon.svg" class="pe-2" />CEO:
            <br />
            <span class="color-primary ps-4">Andrea Moreno H.</span>
        </h4>
        </div>
        <hr>
        <div class="mt-3">
        <h4 class="snap-title">
            <img src="~/assets/images/equipt_icon.svg" class="pe-2" />Equipo:
            <br />
            <span class="color-primary ps-4">Experimentado</span>
        </h4>
        </div>
        <hr>
        <div class="mt-3">
        <h4 class="snap-title">
            <img src="~/assets/images/setting_icon.svg" class="pe-2" />Industria
            <br />
            <span class="color-primary ps-4">Fintech</span>
        </h4>
        </div>
        <hr>
        <div class="mt-3">
        <h4 class="snap-title">
            <img src="~/assets/images/description_icon.svg" class="pe-2" />Descipción:
            <br />
            <span class="color-primary ps-4">Fintech, Ecommerce</span>
        </h4>
        </div>
        <div class="mt-3 text-center">
            <img src="~/assets/images/blacklike_icon.svg"/>
            <p class="crowd-p">No contactado</p>
        </div>
        </div>
      </div>
      <div class="col-lg-3 p-2">
        <div class="crowd-card z-index">
            <div class='text-end'>
                <dropdown-menu :overlay="false">
                    <button slot="trigger" class="dropdown-btn">
                    <img src='~/assets/images/dot_icon.svg'/>
                    </button>
                    <ul slot="body" class="dropdown_menu">
                        <li><NuxtLink to="#">Olvidar</NuxtLink></li>
                        <li><NuxtLink to="#">Ver Detalles</NuxtLink></li>
                    </ul>
                </dropdown-menu>
            </div>
          <div>
            <h4 class="snap-title">
              <img src="~/assets/images/case_icon.svg" class="pe-2" />Empresa
              <br />
              <span class="color-primary ps-4">Empresa Demo S.A.</span>
            </h4>
          </div>
          <hr />
          <div>
            <h4 class="snap-title">
              <img src="~/assets/images/dollar_icon.svg" class="pe-2" />Rango Valuación:
              <br />
              <span class="color-primary ps-4">$200,000 a $350,000</span>
            </h4>
          </div>
           <hr />
          <div class="mt-3">
            <h4 class="snap-title">
              <img src="~/assets/images/favorite_icon.svg" class="pe-2" />CEO:
              <br />
              <span class="color-primary ps-4">Andrea Moreno H.</span>
            </h4>
          </div>
          <hr>
          <div class="mt-3">
            <h4 class="snap-title">
              <img src="~/assets/images/equipt_icon.svg" class="pe-2" />Equipo:
              <br />
              <span class="color-primary ps-4">Experimentado</span>
            </h4>
          </div>
          <hr>
          <div class="mt-3">
            <h4 class="snap-title">
              <img src="~/assets/images/setting_icon.svg" class="pe-2" />Industria
              <br />
              <span class="color-primary ps-4">Fintech</span>
            </h4>
          </div>
          <hr>
          <div class="mt-3">
            <h4 class="snap-title">
              <img src="~/assets/images/description_icon.svg" class="pe-2" />Descipción:
              <br />
              <span class="color-primary ps-4">Fintech, Ecommerce</span>
            </h4>
          </div>
          <div class="mt-3 text-center">
              <img src="~/assets/images/bluelike_icon.svg"/>
              <p class="crowd-blue">Solicitaste Match</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 p-2">
        <div class="crowd-card z-index">
        <div class='text-end'>
            <dropdown-menu :overlay="false">
                <button slot="trigger" class="dropdown-btn">
                <img src='~/assets/images/dot_icon.svg'/>
                </button>
                <ul slot="body" class="dropdown_menu">
                    <li><NuxtLink to="#">Olvidar</NuxtLink></li>
                    <li><NuxtLink to="#">Ver Detalles</NuxtLink></li>
                </ul>
            </dropdown-menu>
        </div>
          <div>
            <h4 class="snap-title">
              <img src="~/assets/images/case_icon.svg" class="pe-2" />Empresa
              <br />
              <span class="color-primary ps-4">Empresa Demo S.A.</span>
            </h4>
          </div>
          <hr />
          <div>
            <h4 class="snap-title">
              <img src="~/assets/images/dollar_icon.svg" class="pe-2" />Rango Valuación:
              <br />
              <span class="color-primary ps-4">$200,000 a $350,000</span>
            </h4>
          </div>
           <hr />
          <div class="mt-3">
            <h4 class="snap-title">
              <img src="~/assets/images/favorite_icon.svg" class="pe-2" />CEO:
              <br />
              <span class="color-primary ps-4">Andrea Moreno H.</span>
            </h4>
          </div>
          <hr>
          <div class="mt-3">
            <h4 class="snap-title">
              <img src="~/assets/images/equipt_icon.svg" class="pe-2" />Equipo:
              <br />
              <span class="color-primary ps-4">Experimentado</span>
            </h4>
          </div>
          <hr>
          <div class="mt-3">
            <h4 class="snap-title">
              <img src="~/assets/images/setting_icon.svg" class="pe-2" />Industria
              <br />
              <span class="color-primary ps-4">Fintech</span>
            </h4>
          </div>
          <hr>
          <div class="mt-3">
            <h4 class="snap-title">
              <img src="~/assets/images/description_icon.svg" class="pe-2" />Descipción:
              <br />
              <span class="color-primary ps-4">Fintech, Ecommerce</span>
            </h4>
          </div>
          <div class="mt-3 text-center">
              <img src="~/assets/images/tweenblue_icon.svg"/>
              <p class="crowd-blue">¡Match!</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 p-2">
        <div class="crowd-card z-index">
            <div class='text-end'>
                <dropdown-menu :overlay="false">
                    <button slot="trigger" class="dropdown-btn">
                    <img src='~/assets/images/dot_icon.svg'/>
                    </button>
                    <ul slot="body" class="dropdown_menu">
                        <li><NuxtLink to="#">Olvidar</NuxtLink></li>
                        <li><NuxtLink to="#">Ver Detalles</NuxtLink></li>
                    </ul>
                </dropdown-menu>
            </div>
          <div>
            <h4 class="snap-title">
              <img src="~/assets/images/case_icon.svg" class="pe-2" />Empresa
              <br />
              <span class="color-primary ps-4">Empresa Demo S.A.</span>
            </h4>
          </div>
          <hr />
          <div>
            <h4 class="snap-title">
              <img src="~/assets/images/dollar_icon.svg" class="pe-2" />Rango Valuación:
              <br />
              <span class="color-primary ps-4">$200,000 a $350,000</span>
            </h4>
          </div>
           <hr />
          <div class="mt-3">
            <h4 class="snap-title">
              <img src="~/assets/images/favorite_icon.svg" class="pe-2" />CEO:
              <br />
              <span class="color-primary ps-4">Andrea Moreno H.</span>
            </h4>
          </div>
          <hr>
          <div class="mt-3">
            <h4 class="snap-title">
              <img src="~/assets/images/equipt_icon.svg" class="pe-2" />Equipo:
              <br />
              <span class="color-primary ps-4">Experimentado</span>
            </h4>
          </div>
          <hr>
          <div class="mt-3">
            <h4 class="snap-title">
              <img src="~/assets/images/setting_icon.svg" class="pe-2" />Industria
              <br />
              <span class="color-primary ps-4">Fintech</span>
            </h4>
          </div>
          <hr>
          <div class="mt-3">
            <h4 class="snap-title">
              <img src="~/assets/images/description_icon.svg" class="pe-2" />Descipción:
              <br />
              <span class="color-primary ps-4">Fintech, Ecommerce</span>
            </h4>
          </div>
          <div class="mt-3 text-center">
              <img src="~/assets/images/tweenblack_icon.svg"/>
              <p class="crowd-p">Match Declinado</p>
          </div>
        </div>
      </div>
      </div>
    </div> 
    <!-- modal -->
    <div v-show="opened" class="ezs-modal">
        <div class="ezs-modal-content">
          <div class="row text-end">
            <span @click="hide" class="close-btn"></span>
          </div>
          <form>
              <div class="row mb-2">
                 <h4><img src="~/assets/images/ez_icon.svg" class="pe-2"/>EZSOFWARE S.A.</h4>
              </div>
              <div class="row ez">
                  <h6>Síntesis del Negocio</h6>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliqui</p>
              </div>
              <hr>
              <div class="row ez">
                  <h6>Problema que resuelve</h6>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>
              </div>
              <hr>
              <div class="row ez">
                  <h6>Solución</h6>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,.</p>
              </div>
              <div class="row">
                  <div class="col-lg-6 ez">
                      <h6><img src="~/assets/images/ezfile_icon.svg" class="pe-2"/>Valoración MonE</h6>
                  </div>
                  <div class="col-lg-6 ez">
                        <h6><img src="~/assets/images/ezfile_icon.svg" class="pe-2"/>Pitch Deck</h6>
                  </div>
              </div>
              <div class="row ez">
                  <h6>Para acceder a la data del proyecto dale like.</h6>
                  <p>Se enviará una solicitud de match a los fundadores</p>
              </div>
          </form>
        </div>
    </div>
  </div>
</template>
<script>
import DropdownMenu from "v-dropdown-menu";
export default {
    components: {
        DropdownMenu
    },
    data(){
        return{
            opened:false,
            replace_component:''
        }
    },
    methods:{
        ezs(){
            this.opened = true
        },
        hide(){
            this.opened = false
        },
        crowdComponent(replace_component){
            this.$emit('crowdComponent', this.replace_component)
        },
        crowdMis(){
            this.replace_component = "CrowdfundingMis"
            this.crowdComponent()
        },
        crowdProfile(){
            this.replace_component = "CrowdfundingProfile"
            this.crowdComponent()
        }
    },
    
};
</script>