function Vehiculo (marca,modelo){
    this.marca = marca;
    this.modelo = modelo;
};

Vehiculo.prototype.informacion = function(){
    console.log(`La marca del vehiculo es: ${this.marca} y el modelo del vehiculo es ${this.modelo}` );
}

let renault = new Vehiculo("renault",2016);