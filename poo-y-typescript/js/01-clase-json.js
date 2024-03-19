// clases 

var bicicleta = {
    color: 'rojo',
    modelo: 'bmx',
    frenos: 'disco',
    velocidadMaxima: '60kms',
    cambiaColor: function(nuevo_color){
        this.color = nuevo_color
        console.log(this);
    }
};

bicicleta.cambiaColor("azul")