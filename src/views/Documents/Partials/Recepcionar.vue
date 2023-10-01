<template>
     <form class="UbicaciónForm">
        <div class="row">
            <div class="col s12">
                <div class="row">
                    <div class="input-field col s6">

                        <div class="input-field col s12">
                            <select class="input-field">
                                <option value="" disabled selected>Seleccione una opción</option>
                                <option value="Despacho">Despacho</option>
                                <option value="Gobierno">Gobierno</option>
                                <option value="SecGeneral">Sec. General</option>
                                <option value="Hacienda">Hacienda</option>
                                <option value="Planeacion">Planeación</option>
                                <option value="Educacion">Educación</option>
                                <option value="Salud">Salud</option>
                                <option value="Transito">Transito</option>
                            </select>
                            <label class="black-text">Dependencia Productora</label>
                        </div>

                        <div class="input-field col s12">
                            <select class="input-field">
                                <option value="" disabled selected>Seleccione una opción</option>
                                <option value="Actas">Actas</option>
                                <option value="Contratos">Contratos</option>
                                <option value="Resoluciones">Resoluciones</option>
                                <option value="Decretos">Decretos</option>
                            </select>
                            <label class="black-text">Tipo de documento</label>
                        </div>

                        <div class="col s12">
                            <div class="input-field">
                                <input type="text" required>
                                <label class="black-text">Nombre</label>
                            </div>
                        </div>

                        <div class="col s12">
                            <div class="input-field">
                                <input type="text" required>
                                <label class="black-text">Código</label>
                            </div>
                        </div>

                        <div class="col s12">
                            <div class="input-field">
                                <label class="black-text" for="FechaDeElaboración">Fecha de
                                    elaboración</label>
                                <input type="text" class="datepicker">
                            </div>
                        </div>

                        <div class="col s12">
                            <div class="input-field">
                                <input type="number" required>
                                <label class="black-text">Número de folios </label>
                            </div>
                        </div>

                        <div class="col s12">
                            <div class="input-field">
                                <input type="text" required>
                                <label class="black-text">Ubicación en físico </label>
                            </div>
                        </div>
                    </div>

                    <div class="input-field col s6">

                        <div class="input-field col s12 valign-wrapper">
                            <img src="../img/Cargar documentos.png" alt="Cargar Documentos" class="responsive-img">
                        </div>
                        <p class="CargarDocumentos">Cargar Documentos</p>

                        <div class="input-field col s12 valign-wrapper">
                            <div class="VistaPrevia">
                                <i class="material-icons">visibility</i>
                                <p class="black-text">Vista Previa</p>
                            </div>
                        </div>

                        <div class="input-field col s12">
                            <div class="ButtonRecepcion">
                                <button class="btn waves-effect waves-light" type="submit" name="action">Archivar
                                </button>
                                <a class="waves-effect waves-light btn">Cancelar</a>

                                <button id="botonRegresar" class="btn waves-effect waves-light"
                                    type="button">Regresar</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
</script>