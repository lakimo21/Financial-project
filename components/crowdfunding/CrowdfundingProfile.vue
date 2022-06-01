<template>
<div class="col-lg-10 col-sm-12">
    <div class="row">
        <h2 class="snapshot-title ps-4 mb-4"><span class="color-secondary">Mis Inversiones |</span>  Perfil de Inversionista</h2>
    </div>
    <div class="row bg-gray same-height">
        <div class="row">
            <h2 class="step-content-title color-green mb-3">Mi Perfil de Inversionista</h2>
            <hr>
            <p class="step-content z-index color-primary">Cuando solicites información detallada sobre un emprendimiento o proyecto, el fundador tendrá la opción de liberar o no su información. Esto dependerá muchas veces del perfil de inversionistas que esté buscando. No se compartirá ninguna información de contacto o de identificación personal, únicamente datos de perfil relevantes para una posible inversión.</p>
        </div>
        <form>
            <div class="row mt-2">
                <div class="col-lg-6"><select><option>Tipo de Organización</option></select></div>
                <div class="col-lg-6"><select><option>Inversiones Previas</option></select></div>
            </div>
            <div class="row mt-2">
                <div class="col-lg-6">
                    <input type="text" placeholder="¿En qué industrias te especializas?"/>
                </div>
                <div class="col-lg-6">
                    <input type="text" placeholder="Países en los que inviertes"/>
                </div>
            </div>
            <div class="row mt-2">
                <div class="col-lg-12">
                    <textarea placeholder="Información que quisieras compartir con potenciales emprendedores o fundadores de proyectos."></textarea>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-lg-2">
                    <button type="button" class="snap-btn2">Guardar</button>
                </div>
            </div>
        </form>
    </div>
</div>
</template>