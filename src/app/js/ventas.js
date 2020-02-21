let ModeloVentas = {
    url: '../api/v1.0/ventas',
    cargar: function(url= '') {
        if(url=='') url= this.url;
        fetch (url).then(function (respuesta) {
            return respuesta.json();
        }).then((json) => {
            this.datos = json;
            this.controlador.representar(this.datos);
        })
    },
    datos: [],
    controlador: {}
};

let VistaTablaVentas= {
    tabla: '',
    preparar: function(tablaId) {
        this.tabla = document.getElementById(tablaId);
    },
    representar: function (datos) {
        this.tabla.innerHTML = "";
        let contador = 25;
        datos.forEach((venta) => {
            contador--;
            if(contador > 0) {
                this.tabla.innerHTML += `<tr>
                <td> ${venta.vendedor.apellidos}, ${venta.vendedor.nombre}</td> 
                <td>${venta.cliente.nombre}</td> 
                <td>${venta.fecha}</td> 
                <td>${venta.importe}</td></tr>`;
            }
        })
    }
};

let ControladorVentas = {
    modelo: ModeloVentas,
    vista: VistaTablaVentas,
    iniciar: function () {
        this.modelo.controlador = this;
        this.modelo.cargar();
    },
    representar: function (datos) {
        this.vista.representar(this.modelo.datos);
    }
};