<template>
<div class="intro">
    <div class="container">
        <div class="row pt-5">
            <div class="col-lg-2 col-sm-12">
                <LoggedSidebar/>
            </div>
            <div class="col-lg-10 col-sm-12">
                <div class="row bg-gray">
                    <h1 class="intro-title">Planes</h1>
                    <div class="col-lg-3 mt-3">
                        <div class = 'planes-card text-center card-active-menu' @click="planClick" id="plan">
                            <h4 class="color-secondary">plan Actual</h4>
                            <div class="color-secondary card-text">
                                Modificación de<br> suscripciones
                            </div>
                        </div>
                        <div class = 'planes-card text-center mt-4' @click="medioClick" id="medio">
                            <h4 class="color-secondary">Medio de Pago</h4>
                            <div class="color-secondary card-text">
                                Actualizar el medio de pago registrado y datos de facturación.
                            </div>
                        </div>
                        <div class = 'planes-card text-center mt-4' @click="facturasClick" id="facturas">
                            <h4 class="color-secondary">Facturas</h4>
                            <div class="color-secondary card-text">
                                Descargar facturas previas.
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9 mt-3">
                        <div v-if="plan" class="row d-flex justify-content-center same-height">
                            <div class="col-lg-4">
                                <div class="plan-card plan-card-active">
                                    <h4>Básico</h4>
                                    <h1>GRATIS</h1>
                                    <div class="card-text mt-3">Acceso a nuestras herramientas financieras</div>
                                    <ul class="card-list-group mt-3">
                                        <li class="card-list-item">Lorem ipsum dolor sit</li>
                                        <li class="card-list-item">Lorem ipsum dolor sit</li>
                                        <li class="card-list-item">Lorem ipsum dolor sit</li>
                                        <li class="card-list-item">Lorem ipsum dolor sit</li>
                                        <li class="card-list-item">Lorem ipsum dolor sit</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="plan-card">
                                    <h4>Profesional</h4>
                                    <h1 class="subscribe-h1">$89<span class="sub-month">/mensual</span></h1>
                                    <div class="card-text mt-3">Acceso a herramientas de valuación y crowdfunding</div>
                                    <ul class="card-list-group mt-3">
                                        <li class="card-list-item">Lorem ipsum dolor sit</li>
                                        <li class="card-list-item">Lorem ipsum dolor sit</li>
                                        <li class="card-list-item">Lorem ipsum dolor sit</li>
                                        <li class="card-list-item">Lorem ipsum dolor sit</li>
                                        <li class="card-list-item">Lorem ipsum dolor sit</li>
                                    </ul>
                                    <div class="mt-4">
                                        <button type="button" class="plan-btn">Cambiar de Plan</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="plan-card">
                                    <h4>Corporativo</h4>
                                    <h1 class="subscribe-h1">$299<span class="sub-month">/mensual</span></h1>
                                    <div class="card-text mt-3">Suite de análisis e inteligencia financiera</div>
                                    <ul class="card-list-group mt-3">
                                        <li class="card-list-item">Lorem ipsum dolor sit</li>
                                        <li class="card-list-item">Lorem ipsum dolor sit</li>
                                        <li class="card-list-item">Lorem ipsum dolor sit</li>
                                        <li class="card-list-item">Lorem ipsum dolor sit</li>
                                        <li class="card-list-item">Lorem ipsum dolor sit</li>
                                    </ul>
                                    <div class="mt-4">
                                        <button type="button" class="plan-btn">Cambiar de Plan</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="medio" class="row">
                            <h1 class="intro-title mb-5">Tarjeta Registrada</h1>
                            <div class="col-lg-4 ">
                                <img src="~/assets/images/visa_icon.svg" class="pe-2"/><span>VISA-4450</span>
                            </div>
                            <div class="col-lg-4 offset-md-4">
                                <button type="button" class="plan-btn">Agregar o Editar</button>
                            </div>
                            <h1 class="intro-title mt-5 mb-3">Datos de Facturación</h1>
                            <div class="col-lg-4">
                                <input type="text" placeholder="RUC / Cédula / DNI" class="mb-3"/>
                            </div>
                            <div class="col-lg-8">
                                <input type="text" placeholder="Nombre o Razón Social" class="mb-3"/>
                            </div>
                            <div class="col-lg-8">
                                <input type="text" placeholder="Dirección (Calle Principal y numeración)" class="mb-3"/>
                            </div>
                            <div class="col-lg-4">
                                <input type="text" placeholder="País" class="mb-3"/>
                            </div>
                            <div class="col-lg-4">
                                <input type="text" placeholder="Ciudad" class="mb-3"/>
                            </div>
                            <div class="col-lg-4">
                                <input type="text" placeholder="Teléfono" class="mb-3"/>
                            </div>
                            <div class="col-lg-4">
                                <input type="text" placeholder="Email para factura" class="mb-3"/>
                            </div>
                            <div class="col-lg-4">
                                <button type="button" class="medio-btn">Guardar</button>
                            </div>
                        </div>
                        <div v-if="facturas" class="row">
                            <h1 class="intro-title mb-5">Facturas / Órdenes Previas</h1>
                            <div class="col-lg-3 table-title">Fecha</div>
                            <div class="col-lg-3 table-title">Plan / Servicio</div>
                            <div class="col-lg-3 table-title">Monto</div>
                            <div class="col-lg-3 table-title">Estado</div>
                            <hr class="mt-2 break-line">
                            <div class="row pb-2">
                                <div class="col-lg-3 table-content">Oct-20-21</div>
                                <div class="col-lg-3 table-content">Plan enterprise - Anual</div>
                                <div class="col-lg-3 table-content">$900</div>
                                <div class="col-lg-3 table-content-icon">Pagado<img src="~/assets/images/print_icon.svg" class="ps-5"/></div>
                            </div>
                            <div class="row pb-2">
                                <div class="col-lg-3 table-content">Sep-01-21 </div>
                                <div class="col-lg-3 table-content">Valuación de Proyecto</div>
                                <div class="col-lg-3 table-content">$399</div>
                                <div class="col-lg-3 table-content-icon">Pagado<img src="~/assets/images/print_icon.svg" class="ps-5"/></div>
                            </div>
                            <hr class="mt-2 break-line">
                            <div class="row">
                                <span class="d-flex justify-content-center pagenation"><img src="~/assets/images/pre_icon.svg"/>1/1<img src="~/assets/images/next_icon.svg"/></span>
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
export default {
    data(){
        return {
            plan:true,
            medio:false,
            facturas: false
        }
    },
    methods:{
        planClick(){
            this.plan = true
            this.medio = false
            this.facturas = false
            var plan = document.getElementById("plan")
                plan.classList.add('card-active-menu')
            var medio = document.getElementById("medio")
                if(medio.classList.contains('card-active-menu')){
                    medio.classList.remove('card-active-menu')
                }
            var facturas = document.getElementById("facturas")
                if(facturas.classList.contains('card-active-menu')){
                    facturas.classList.remove('card-active-menu')
                }
        }, 
        medioClick(){
            this.plan = false
            this.medio = true
            this.facturas = false
            var medio = document.getElementById("medio")
                medio.classList.add('card-active-menu')
            var plan = document.getElementById("plan")
                if(plan.classList.contains('card-active-menu')){
                    plan.classList.remove('card-active-menu')
                }
            var facturas = document.getElementById("facturas")
                if(facturas.classList.contains('card-active-menu')){
                    facturas.classList.remove('card-active-menu')
                }
        }, 
        facturasClick(){
            this.plan = false
            this.medio = false
            this.facturas = true
            var facturas = document.getElementById("facturas")
                facturas.classList.add('card-active-menu')
            var medio = document.getElementById("medio")
                if(medio.classList.contains('card-active-menu')){
                    medio.classList.remove('card-active-menu')
                }
            var plan = document.getElementById("plan")
                if(plan.classList.contains('card-active-menu')){
                    plan.classList.remove('card-active-menu')
                }
        }
    },
  
}
</script>