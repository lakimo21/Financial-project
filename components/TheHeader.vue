<template>
  <div class="header-bg" id="navbar">
    <div class="container">
      <nav class="navbar-expand-lg">
        <div class="py-3">
          <div class="row align-items-center">
            <div class="col-lg-2 col-sm-12">
              <NuxtLink class="navbar-brand" to="/">
                <img v-if="!sticky" src="~/assets/logo.svg" />
                <img v-if="sticky" src="~/assets/images/stickylogo.svg" />
              </NuxtLink>
            </div>
            <div v-if="logged" class="col-lg-10 col-sm-12 text-end">
              <a
                href="javascript:void(0)"
                class="primary-btn"
                v-click-outside="hide"
                @click="subscribe_toggle"
              >CUENTA GRATIS</a>
              <a
                href="javascript:void(0)"
                class="second-btn"
                v-click-outside="hide"
                @click="toggle"
              >INGRESAR</a>
            </div>
            <div v-if="!logged" class="col-lg-5 col-sm-12">
              <h1 class="logged-h1">
                <img src="~/assets/images/tableroicon.svg" />Tablero Maestro
              </h1>
            </div>
            <div v-if="!logged" class="col-lg-5 col-sm-12 text-end d-flex justify-content-end align-items-center">
              <div class="user-name">
                <div>
                  <span class="user-greeting">Hola</span> Juan López
                </div>
                <div class="user-subname">PLAN PROFESIONAL</div>
              </div>
              <dropdown-menu :overlay="false" @closed="dispatchEvent">
                <button slot="trigger" class="dropdown-btn">
                  <img src="~/assets/images/hambergicon.svg" />
                  <!-- <img v-if="isOpen" src="~/assets/images/activehamberg.svg"/> -->
                </button>
                <div slot="header" class="dropdown_title">Configuración</div>
                  <ul slot="body" class="dropdown_menu">
                    <li><NuxtLink to="/cuenta">Mi Cuenta</NuxtLink></li>
                    <li><NuxtLink to="/planes">Planes</NuxtLink></li>
                    <li><NuxtLink to="">Soporte</NuxtLink></li>
                  </ul>
              </dropdown-menu>
            </div>
          </div>
        </div>
      </nav>
      <!-- free account modal -->
      <div v-show="opened" class="free-account-modal">
        <div class="free-account-modal-content">
          <div class="row text-end">
            <span @click="hide" class="close-btn"></span>
          </div>
          <form>
            <div class="row">
              <div class="mb-5 text-center">
                <h1 class="login-h1">Ingresar</h1>
              </div>
              <div class="mb-3">
                <input type="email" class="form-control" placeholder="demo@moneboard.com" />
              </div>
              <div class="mb-3 d-flex align-items-center">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Contraseña"
                  id="id_password"
                />
                <i
                  class="far fa-eye"
                  id="togglePassword"
                  style="margin-left: -30px; cursor: pointer;"
                ></i>
              </div>
              <div class="mb-3">
                <button type="button" class="login-btn" @click="signIn();hide();">ENTRAR</button>
              </div>
              <div class="mb-5 text-center">
                <span class="p-desc">Olvidé mi contraseña</span>
              </div>
              <div class="mb-3">
                <button
                  type="button"
                  class="social-login-btn social-login-google"
                >Ingresar con Google</button>
              </div>
              <div class="mb-3">
                <button
                  type="button"
                  class="social-login-btn social-login-facebook"
                >Ingresar con Facebook</button>
              </div>
              <div class="mb-3">
                <button
                  type="button"
                  class="social-login-btn social-login-windows"
                >Ingresar con Microsoft</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <!-- login modal -->
      <div v-show="login_open" class="free-account-modal">
        <div class="free-account-modal-content login-m">
          <div class="row text-end">
            <span @click="hide" class="close-btn"></span>
          </div>
          <div class="row mb-3">
            <h1 class="login-h1" v-click-outside="hide" @click="subscribe_toggle">
              <img src="~/assets/images/arrowicon.svg" width="15" class="me-3" />Plan Básico
            </h1>
          </div>
          <div class="row">
            <div class="col-lg-6 col-sm-12">
              <div class="mb-3">
                <input type="email" class="form-control" placeholder="demo@moneboard.com" />
              </div>
              <div class="mb-3 d-flex align-items-center">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Contraseña"
                  id="reg_id_password"
                />
                <i
                  class="far fa-eye"
                  id="reg_togglePassword"
                  style="margin-left: -30px; cursor: pointer;"
                ></i>
              </div>
              <div class="mb-3">
                <input type="password" class="form-control" placeholder="Confirmar Contraseña" />
              </div>
              <div class="mb-3">
                <button type="button" class="login-btn">Crear Cuenta</button>
              </div>
            </div>
            <div class="col-lg-6 col-sm-12">
              <div class="mb-3">
                <button type="button" class="social-login-btn">
                  <img src="~/assets/images/googleicon.svg" class="mx-3" width="20" />Ingresar con Google
                </button>
              </div>
              <div class="mb-3">
                <button type="button" class="social-login-btn">
                  <img src="~/assets/images/facebookicon.svg" class="mx-3" width="12" />Ingresar con Facebook
                </button>
              </div>
              <div class="mb-3">
                <button type="button" class="social-login-btn">
                  <img src="~/assets/images/windowsicon.svg" class="mx-3" width="20" />Ingresar con Microsoft
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- subscribe modal -->
      <div v-show="subscribe_open" class="free-account-modal">
        <div class="free-account-modal-content login-m">
          <div class="row text-end">
            <span @click="hide" class="close-btn"></span>
          </div>
          <div class="row mb-3">
            <h1 class="login-h1">
              Suscríbete a
              <img src="~/assets/images/sblogo.svg" width="60" class="ms-3" />
            </h1>
          </div>
          <div class="row mb-3 subscribe">
            <h2>Selecciona tu plan maestro</h2>
            <p>¡Prueba cualquier plan durante 15 días gratis! Si luego deseas, puedes mantener una suscripción pagada, o quedarte en el plan gratuito.</p>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Básico</h5>
                  <h1 class="subscribe-h1 mb-4">GRATIS</h1>
                  <p class="card-text">
                    Acceso a nuestras
                    <br />herramientas financieras
                  </p>
                  <ul class="card-list-group">
                    <li class="card-list-item">Lorem ipsum dolor sit</li>
                    <li class="card-list-item">Lorem ipsum dolor sit</li>
                    <li class="card-list-item">Lorem ipsum dolor sit</li>
                    <li class="card-list-item">Lorem ipsum dolor sit</li>
                    <li class="card-list-item">Lorem ipsum dolor sit</li>
                  </ul>
                  <button
                    type="button"
                    class="subscribe-btn"
                    v-click-outside="hide"
                    @click="login_toggle"
                  >Escoger Plan</button>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Profesional</h5>
                  <h1 class="subscribe-h1 mb-4">
                    $89
                    <span class="sub-month">/mensual</span>
                  </h1>
                  <p class="card-text">
                    Acceso a nuestras
                    <br />herramientas financieras
                  </p>
                  <ul class="card-list-group">
                    <li class="card-list-item">Lorem ipsum dolor sit</li>
                    <li class="card-list-item">Lorem ipsum dolor sit</li>
                    <li class="card-list-item">Lorem ipsum dolor sit</li>
                    <li class="card-list-item">Lorem ipsum dolor sit</li>
                    <li class="card-list-item">Lorem ipsum dolor sit</li>
                  </ul>
                  <button
                    type="button"
                    class="subscribe-btn"
                    v-click-outside="hide"
                    @click="login_toggle"
                  >Escoger Plan</button>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Corporativo</h5>
                  <h1 class="subscribe-h1 mb-4">
                    $299
                    <span class="sub-month">/mensual</span>
                  </h1>
                  <p class="card-text">
                    Acceso a nuestras
                    <br />herramientas financieras
                  </p>
                  <ul class="card-list-group">
                    <li class="card-list-item">Lorem ipsum dolor sit</li>
                    <li class="card-list-item">Lorem ipsum dolor sit</li>
                    <li class="card-list-item">Lorem ipsum dolor sit</li>
                    <li class="card-list-item">Lorem ipsum dolor sit</li>
                    <li class="card-list-item">Lorem ipsum dolor sit</li>
                  </ul>
                  <button
                    type="button"
                    class="subscribe-btn"
                    v-click-outside="hide"
                    @click="login_toggle"
                  >Escoger Plan</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 
<script>
import ClickOutside from "vue-click-outside";
import DropdownMenu from "v-dropdown-menu";

export default {
  components: {
    DropdownMenu
  },
  data() {
    return {
      opened: false,
      login_open: false,
      subscribe_open: false,
      logged: true,
      sticky: false, 
      overlay: false,
      // isOpen: false,
    };
  },

  methods: {
    toggle() {
      this.opened = true;
    },
    login_toggle() {
      this.subscribe_open = false;
      this.login_open = true;
    },
    subscribe_toggle() {
      this.login_open = false;
      this.subscribe_open = true;
    },
    hide() {
      this.opened = false;
      this.login_open = false;
      this.subscribe_open = false;
    },
    handleScroll() {
      // console.log(window.scrollY)
      this.sticky = true;
      var navbar = document.getElementById("navbar");
      var sticky = navbar.offsetTop;
      if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
        this.sticky = false;
      }
    },
    // openDropdown(){
    //   this.isOpen = true;
    // }

    dispatchEvent(){
      console.log('dispatch');
    },
    signIn(){
      this.logged = false 
      this.$router.replace('/logged')
    }
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  // beforeDestroy() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // },

  mounted() {
    // prevent click outside event with popupItem.
    this.popupItem = this.$el;
    // eye icon for passwor field
    const togglePassword = document.querySelector("#togglePassword");
    const password = document.querySelector("#id_password");
    const regTogglePassword = document.querySelector("#reg_togglePassword");
    const regPassword = document.querySelector("#reg_id_password");

    togglePassword.addEventListener("click", function(e) {
      // toggle the type attribute
      const type =
        password.getAttribute("type") === "password" ? "text" : "password";
      password.setAttribute("type", type);
      // toggle the eye slash icon
      this.classList.toggle("fa-eye-slash");
    });
    regTogglePassword.addEventListener("click", function(e) {
      // toggle the type attribute
      const type =
        regPassword.getAttribute("type") === "password" ? "text" : "password";
      regPassword.setAttribute("type", type);
      // toggle the eye slash icon
      this.classList.toggle("fa-eye-slash");
    });
    // end eye icon function
  },

  // do not forget this section
  directives: {
    ClickOutside
  }
};
</script>