let productos=[];
const IVA= 21;


productos.push(new Producto(1,"Arroz", 100, 36,IVA));
productos.push(new Producto(2,"Fideo", 150, 48,IVA));
productos.push(new Producto(3,"Aceite", 300, 42,IVA));
productos.push(new Producto(4,"azucar", 200, 36,IVA));
productos.push(new Producto(5,"garbanzo", 2500, 24,IVA));
productos.push(new Producto(6,"Poroto", 300, 42,IVA));
productos.push(new Producto(7,"Yerba", 600, 150,IVA));
productos.push(new Producto(8,"Harina", 250, 12,IVA));
productos.push(new Producto(9,"Galletitas", 150, 6,IVA));
productos.push(new Producto(10,"Mermeladas", 200, 120,IVA));
productos.push(new Producto(11,"Mayonesa", 130, 360,IVA));
productos.push(new Producto(12,"Arroz", 150, 36,IVA));
productos.push(new Producto(13,"Atun", 100, 600,IVA));
productos.push(new Producto(14,"Vino", 500, 3,IVA));


let rta="";
let idProducto=productos.length;


do {
    const opcion= +prompt("Seleccione una opcion\n 1-Buscar producto por Nombre \n 2-Buscar precio maximo\n 3-Buscar precio minimo\n 4-Agregar un nuevo producto \n 5-Eliminar un producto \n 6-Mostrar lista de productos \n 7-Salir");
    switch(opcion){
        case 1:{
            let productoABuscar=prompt("Ingrese el nonmbre del producto a buscar.");
           for(let i=0; i<tamanio; i++){

                if(productos[i].descripcion.toUpperCase() === productoABuscar.toUpperCase()){
                    console.log(productos[i].descripcion+" Precio: "+productos[i].precio);
                    alert(productos[i].descripcion+" Precio: "+productos[i].precio+" esta en la posicion "+ (i+1));
                }                
            };
            break;
        }

        case 2:{
            let aux=productos[0].precio,
            pos=0;
            const precioMaximo = ()=>{
                productos.forEach( (producto,index, array) =>
                    {
                        console.log("Producto" , producto.descripcion );
                        console.log("Indice" , index);
                        console.log("Array" , array);
                        if(producto.precio > aux){
                            aux = producto.precio;
                            pos=index;
                        }   
                    }
                )
                console.log(`el producto mas caro es ${productos[pos].descripcion} con un valor de ${productos[pos].precio}`)
                alert(`el producto mas caro es ${productos[pos].descripcion} con un valor de ${productos[pos].precio}`)
            }
            precioMaximo();
            
            break;
        };
        case 3:{
            let aux=productos[0].precio,
            pos=0;
            const precioMinimo = ()=>{
                for(let i=0; i<tamanio; i++){
                    if(productos[i].precio < aux){
                        aux = productos[i].precio;
                        pos=i;
                    }                
                };
                console.log(`el producto mas barato es ${productos[pos].descripcion} con un valor de ${productos[pos].precio}`)
                alert(`el producto mas barato es ${productos[pos].descripcion} con un valor de ${productos[pos].precio}`)
            }
            precioMinimo();
            break;};
        case 4:{
            let nuevoId=idProducto+1;
            let nuevaDescripcion=prompt("Ingrese nombre del producto");
            let nuevoPrecio=+prompt("Ingrese el precio del producto");
            let nuevaCantidad=+prompt("Ingrese cantidad del producto");
            productos.push(new Producto(nuevoId, nuevaDescripcion, nuevoPrecio, nuevaCantidad, IVA));
            alert("producto Ingresado");
            console.log(JSON.stringify(productos));
            break;
        }    
        case 5:{
            let eliminarProducto=prompt("Ingrese el nombre del producto a eliminar");
            let posicion = productos.findIndex((producto)=>producto.descripcion.toLowerCase() === eliminarProducto.toLowerCase());
            console.log("posicion", posicion);
            let productosActualizados=productos.splice(posicion,1);
            console.log("productos eliminado", JSON.stringify(productosActualizados));
            console.log("productos actualizados", JSON.stringify(productos));
            break;
        }
        case 6:{
            productos.forEach(producto =>{
                console.log("producto: ", producto.descripcion)
            } )
            break;
        }
        case 7:{
            rta="SI";
            break;
        };
        default:{alert("la opcion ingresada no es valida. Seleccione de 1 a 4");
        }
        
    }
    rta=prompt("Continuar en la aplicacion SI / NO");
   

}while (rta.toUpperCase() !== "NO");
alert("estamos afuera!!!!!!!!!!")


