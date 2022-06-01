<template>
  <div class="col-lg-10 col-sm-12">
    <div class="row">
        <h2 class="snapshot-title ps-4 mb-4"><span class="color-secondary">Mis Inversiones </span>| Explorar Oportunidades</h2>
    </div>
    <div class="row bg-gray same-height">
      <div class="row"  >
          <div class="col-lg-3">
              <input type="text"  placeholder="Por Industrias"/>
          </div>
          <div class="col-lg-3">
              <input type="text" placeholder="Palabras Clave"/>
          </div>
          <div class="col-lg-3">
              <input type="text" placeholder="Rango de Valuación"/>
          </div>
          <div class="col-lg-3">
              <button type="button" class="mis-btn">Ocultar Filtros</button>
          </div>
      </div>
      <div class="row">
          <div class="col-lg-4">
              <div>
                  <img src="~/assets/images/mis_pic.svg"/>
              </div>
              <div class="mt-2">
                  <p class="mis-p">
                      Para solicitar toda la data da click a <span class="color-green">LIKE</span> 
                  </p>
              </div>
              <div class="mt-2">
                  <p class="mis-p">
                      Si no estas interesado da click a <span class="color-green">UNLIKE</span> 
                  </p>
              </div>
              <div class="mt-2">
                  <p class="mis-p">
                      Para guardarlo y ver después da click a<span class="color-green">SAVE</span> 
                  </p>
              </div>
          </div>
          <div class="col-lg-8">
              <div class="row mis-card z-index">
                <div class="mb-2">
                    <h4><img src="~/assets/images/ez_icon.svg" class="pe-2"/>EZSOFWARE S.A.</h4>
                </div>
                <div class="mis-card-scroll">
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
                </div>
                <div class="d-flex justify-content-center mt-5">
                    <div class="text-center p-3">
                        <img src="~/assets/images/missave.svg"/>
                        <div class="mis-icon-text">Guardar</div>
                    </div>
                    <div class="text-center p-3">
                        <img src="~/assets/images/misfire.svg"/>
                        <div class="mis-icon-text">Hotshot</div>
                    </div>
                    <div class="text-center p-3">
                        <img src="~/assets/images/mislike.svg"/>
                        <div class="mis-icon-text">Me Gusta</div>
                    </div>
                    <div class="text-center p-3">
                        <img src="~/assets/images/misarrow.svg"/>
                        <div class="mis-icon-text">Siguiente</div>
                    </div>
                </div>
              </div>
          </div>
      </div>
    </div> 
  </div>
</template>