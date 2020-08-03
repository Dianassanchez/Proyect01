class carrito{
    comprarProducto(a){
        a.preventDeafult(){
            if(a.target.classlist.container("agregar al carrito")){
                const producto = a.target.parenElement.parenElement;
                this.leerdatosProductos(productos)
            }
        }
    }
}