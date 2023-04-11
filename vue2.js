
Vue.component('datoscliente',{
    template:`
    <section class="row mt-3">
<div class="col">
<div class="card">
    <div class="card-header">
        <CENTER>
        <h3 class="card-title">Datos del cliente</h3></CENTER>
    </div>
    <div class="card-body">
        <form class="row" id="form1">
            <div class="form-group col-md-3">
                <label for="">Nombre</label>
                <input type="text" class="form-control" placeholder="Escriba aquí su nombre" id="NombreCliente"/></input>
            </div>
             <div class="form-group col-md-3">
                <label for="">Cedula</label>
                <input type="text" class="form-control" placeholder="Escriba aquí su Cedula" id="CedulaCliente"/></input>
            </div>
            <div class="form-group col-md-3">
                <label for="">Número de la factura</label>
                <input type="text" class="form-control" placeholder="ejm:12345678" id="NumeroFactura"/></input>
            </div>
            <div class="form-group col-md-3">
                <label for="">Fecha</label>
                <input type="date" class="form-control" placeholder="ejm:12345678" id="FechaFactura"/></input>
            </div>
        </form>
    </div>

</div>
</div>
</section>`
}),

Vue.component('plantillaproductos',{
    template:`
<section class="row mt-4">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <form class="row" id="form2">
                            <div class="form-group col-2"><label for="">Cantidad</label>
                                <input type="number" class="form-control" id="InputCantidad"/></div>
                            <div class="form-group col-5"><label for="">Producto</label>
                                <select class="form-control" id="SelectProducto">
                                    <option value="0">--Seleccione su producto--</option>
                                    <option value="">Producto 1</option>
                                    <option value="">Producto 2</option>
                                    <option value="">Producto 3</option>
                                    <option value="">Producto 4</option>
                                    <option value="">Producto 5</option>
                                </select></div>
                            <div class="form-group col-md"><label for="">Precio unidad</label>
                                <input type="number" class="form-control" id="InputPrecioUnitario"/></div>
                            <div class="form-group col-md"><label for="">Total</label>
                                <input type="number" class="form-control" id="InputTotal"/></div>
                            <div class="form-group col-md mt-4">
                                <button class="btn btn-primary">
                                    Agregar
                                </button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>`
}),

Vue.component('tablaproductos',{
    template:`
<section class="row mt-4">
<div class="col">
    <table class="table text-center">
        <thead>
            <tr>
                <th>Cantidad</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Total</th>
            </tr>
        </thead>
    </table>
</div>
<button class="btn btn-primary col-12" id="AgregarFactura">Agregar Factura</button>
</section class="row">`
}),

new Vue({
    el: '#main',
    data:{
        Saludar: 'Saludar',
    },
});

