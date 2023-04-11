const formDetalle = document.getElementById("formDetalle");
const inputCantidad = document.getElementById("inputCantidad");
const selectDescripcion = document.getElementById("selectDescripcion");
const inputPUnitario = document.getElementById("inputPUnitario");
const inputPTotal = document.getElementById("inputPTotal");

let arregloDetalle = [];

formDetalle = (e) => {
    e.preventDefault();
    //objeto de detalle
    const objDetalle = {
        cant: inputCantidad. value,
        descripcion: selectDescripcion. value,
        pUnit: inputPUnitario. value,
        pTotal: inputPTotal. value, 
    }; 
    console.log(objDetalle);
};