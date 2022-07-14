const getProducts = async () =>{
    const response = await fetch("/api/productos");
    const products = await response.json();
    return products;
}

export const apiRoutes ={
    getProducts
}