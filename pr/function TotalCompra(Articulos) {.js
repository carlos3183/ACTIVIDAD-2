function TotalCompra(Articulos) {
    let descuento = 0;
    const porcentajeIVA = 0.16;
    let totalCompra = 0;

    
    if (Articulos >= 0 && Articulos <= 10) {
        descuento = 0.05; 
    } else if (Articulos >= 11 && Articulos <= 20) {
        descuento = 0.1; 
    } else if (Articulos >= 21) {
        descuento = 0.15; 
    }

    const subtotal = 100 * Articulos; 
    const descuentoAplicado = subtotal * descuento;
    const subtotalConDescuento = subtotal - descuentoAplicado;

    
    totalCompra = subtotalConDescuento * (1 + porcentajeIVA);

    return totalCompra;
}

const cantidadComprada = 20; 
const total = TotalCompra(cantidadComprada);
console.log(`El descuento de ${cantidadComprada} artículos es: $${total.toFixed(2)}`);