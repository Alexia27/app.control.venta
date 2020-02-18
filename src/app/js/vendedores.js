let ModeloVendedores = {
    datos: [],
    cargar: function () {
        fetch('../api/v1.0/vendedores').then(function(respuesta) {
            return respuesta.json();
        }).then((datosJson) => {
            //console.log(this);
            this.datos=datosJson;
        })
    },
};
let VistaSelectorVendedores = {
    selector: {},
    preparar: function(selectId){
        this.selector =document.getElementById(selectId);
        this.selector.innerHTML ="<option value='0'>Todos</option>";

    },
    representar: function (datos) {
        datos.forEach((vendedor) => {
            this.selector.innerHTML+= `<option value="${vendedor.id}">${vendedor.apellidos}, ${vendedor.nombre} 
            </option>`;
        })

    },
};
let controladorVendedores={
   modelo: ModeloVendedores,
    vista: VistaSelectorVendedores,
    iniciar: function () {
    ModeloVendedores.cargar();
    }
    representar: function () {
       this.vista.representar(this.modelo.datos);

    }
};