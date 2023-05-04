class Producto{
    id;
    descripcion;
    precio;
    cantidad;
    IVA;

    constructor(id, descripcion, precio, cantidad, IVA){
        this.id=id;
        this.descripcion=descripcion;
        this.precio=precio;
        this.cantidad=cantidad;
        this.IVA=IVA
    }

    productoConIva(){
        return(this.precio + (this.precio*(this.IVA/100)))
    };

    productoSinIva(){
        return(this.precio);
    }



}
