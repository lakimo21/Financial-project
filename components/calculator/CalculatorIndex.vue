<template>
  <div class="col-lg-10 col-sm-12">
    <div class="row bg-gray">
      <h1 class="intro-title">Selecciona un tipo de tasa</h1>
      <div class="col-lg-3 mt-3">
        <div class="planes-card text-center card-active-menu">
          <h4 class="color-secondary">Tasas de Interés</h4>
          <div class="color-secondary card-text">
            Créditos
            <br />de Consumo
          </div>
        </div>
        <div class="planes-card text-center mt-4">
          <h4 class="color-secondary">Tasas de Interés</h4>
          <div class="color-secondary card-text">
            Créditos
            <br />Hipotecarios
          </div>
        </div>
        <div class="planes-card text-center mt-4">
          <h4 class="color-secondary">Tasas de Interés</h4>
          <div class="color-secondary card-text">Créditos Corporativos</div>
        </div>
      </div>
      <div class="col-lg-9 mt-3">
        <div class="calculator-card">
            <div class="row">
                <div class="col-lg-8">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="calculate-title">Mortage</div>
                            <select><option>30 year fixed</option></select>
                        </div>
                        <div class="col-lg-4">
                            <div class="calculate-title">Interest rate</div>
                            <input type="text" placeholder="3.890"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="calculate-title">Price of home</div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12"><input type="text" placeholder="$250,000"/></div>
                    </div>
                    <div class="row">
                        <div class="calculate-title">Down payment</div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12"><input type="text" placeholder="$35,000"/></div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="calculate-title">Property taxes</div>
                            <input type="text" placeholder="$1,900"/>
                        </div>
                        <div class="col-lg-4">
                            <div class="calculate-title">Insurance</div>
                            <input type="text" placeholder="$900"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="calculate-title">PMI</div>
                        <div class="col-lg-8">
                            
                            <input type="text" placeholder="$1,080"/>
                        </div>
                        <div class="col-lg-4">
                            <button type="button" class="calculate-btn">Calculate</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 calculate-left">
                    <div class="calculate-title">Total monthly payment</div>
                    <div class="calculate-money">$1,336</div>
                    <div class="pt-3 pb-3 calculate-bottom">
                        <div class="d-flex justify-content-between">
                            <div class="calculate-content color-secondary">Principal and interest</div>
                            <div class="calculate-content color-primary">$1,013</div>
                        </div>     
                        <div class="d-flex justify-content-between">
                            <div class="calculate-content color-secondary">Taxes</div>
                            <div class="calculate-content color-primary">$158</div>
                        </div>
                        <div class="d-flex justify-content-between">
                            <div class="calculate-content color-secondary">Insurance</div>
                            <div class="calculate-content color-primary">$75</div>
                        </div>
                        <div class="d-flex justify-content-between">
                            <div class="calculate-content color-secondary">PMI</div>
                            <div class="calculate-content color-primary">$90</div>
                        </div>
                        
                    </div>
                    <div class="d-flex justify-content-evenly mt-4">
                        <div class="calculate-sub"><img src="~/assets/images/rein_icon.svg"/><div class="pt-2">Reiniciar</div></div>
                        <div class="calculate-sub"><img src="~/assets/images/share_icon.svg"/><div class="pt-2">Compartir</div></div>
                        <div class="calculate-sub"><img src="~/assets/images/impr_icon.svg"/><div class="pt-2">Imprimir</div></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
