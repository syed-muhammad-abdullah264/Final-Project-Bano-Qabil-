let parentDiv = document.getElementById('products-container')

console.log(parentDiv)

const productsApi = async () => {
    try {
        let response = await fetch(`https://fakestoreapi.com/products`);
        let data = await response.json()
        console.log(data);


        data.map((product, index, array) => {
            console.log(array);
            
            console.log("Product:  ", product)

            let childDiv = document.createElement(`div`);
            childDiv.innerHTML = `
            <div class="product-card">
                    <div class="product-image">
                        <img src=${product.image} alt="${product.title}">
                        <button class="product-wishlist">♥</button>
                    </div>
                    <div class="product-info">
                        <div class="product-category">${product.category}</div>
                        <h3 class="product-title">${product.title}</h3>
                        <div class="product-price">
                            <span class="current-price">$${product.price}</span>
                        </div>
                        <div class="product-rating">★★★★★</div>
                        <div class="product-actions">
                            <button class="btn btn-primary">Add to Cart</button>
                            <a href="product-detail.html?id=${product.id}" class="btn btn-outline">View Details</a>
                        </div>
                    </div>
                </div>
        `
        console.log(childDiv)
        parentDiv.appendChild(childDiv)
        })
    } catch (error) {
        console.log("402 found error")
    }

}
productsApi()