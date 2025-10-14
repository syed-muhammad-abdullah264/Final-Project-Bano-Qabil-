// product-detail.js

let productTitle = document.querySelector('.product-title');
let productPrice = document.querySelector('.price');
let mainImage = document.getElementById('main-image');
let description = document.getElementById('description');

let params = new URLSearchParams(window.location.search);
let id = params.get('id');


const productDetailApi = async () => {
  try {
    let response = await fetch(`https://fakestoreapi.com/products/${id}`);
    let data = await response.json();
    console.log(data);

    productTitle.innerHTML = data.title;
    productPrice.innerHTML = `$${data.price}`;
    mainImage.src = data.image;
    description.innerHTML = data.description;

  } catch (error) {
  console.error("Error loading product detail:", error);
}
}

productDetailApi();
