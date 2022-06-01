<template>
    <div class="intro">
    <div class="container">
        <div class="row pt-5">
            <div class="col-lg-2 col-sm-12">
                <LoggedSidebar/>
            </div>
            <div class="col-lg-10 col-sm-12">
                <div class="row bg-gray">
                    <h1 class="intro-title">Mi Cuenta</h1>
                    <div class="col-lg-3"><input type="text" placeholder="Nombres"/></div>
                    <div class="col-lg-3"><input type="text" placeholder="Apellidos"/></div>
                    <div class="col-lg-3">
                        <select>
                        <option>Selecciona tu País</option>
                        </select>
                    </div>
                    <div class="col-lg-3">
                        <select>
                        <option>Selecciona tu Ciudad</option>
                        </select>
                    </div>
                </div>
                <div class="row gray">
                    <div class="col-lg-3"><input type="text" placeholder="Fecha de Nacimiento"/></div>
                    <div class="col-lg-3"><input type="text" placeholder="Género"/></div>
                    <div class="col-lg-6">
                        <select>
                        <option>¿A qué te dedicas?</option>
                        </select>
                    </div>
                </div>
                <div class="row gray">
                    <div class="col-lg-3 col-sm-12">
                        <button type="button" class="login-btn">Guardar</button>
                    </div>
                </div>
                <div class="row gray">
                    <h1 class="intro-title">Acceso</h1>
                    <div class="col-lg-6 col-sm-12">
                        <div class="row gray ps-0 pe-0">
                            <div class="col-lg-6">
                                <input type="text" placeholder="Correo Electrónico"/>
                            </div>
                        </div>
                        <div class="row gray ps-0 pe-0">
                            <div class="col-lg-6"><input type="text" placeholder="Contraseña"/></div>
                            <div class="col-lg-6"><input type="text" placeholder="Repetir Contraseña"/></div>
                        </div>
                        <div class="row gray ps-0 pe-0">
                            <div class="col-lg-6 col-sm-12"><button type="button" class="subscribe-btn">Cambiar Contraseña</button></div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12">
                        <div class="row gray">
                            <div class="col-lg-6">
                                <div class="mi-card">
                                    <h4>Login con 3ros</h4>
                                    <div class="list_menu"><img src="~/assets/images/google_icon.svg"/></div>
                                    <div class="list_menu color-primary">Login con Google</div>
                                    <div class="list_menu color-secondary">juan.ap@gmail.com</div>
                                    <div class="list_menu color-green">Desvincular</div>
                                </div>
                            </div>        
                            <div class="col-lg-6">
                                <div class="mi-card">
                                    <h4>Otras Opciones</h4>
                                    <div class="list_menu color-primary">Unificar Cuentas<br>Duplicadas</div>
                                    <div class="list_menu color-red">Eliminar Cuenta</div>
                                </div>
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
    
}
</script>