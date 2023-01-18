const productForm = document.getElementById("add-product");
const allproductDiv = document.getElementById("all-product");
const productNameInput = document.getElementById("product-name");
const productImageInput = document.getElementById("product-image");
const productPriceInput = document.getElementById("product-price");
const productTextInput = document.getElementById("product-text");

const products = JSON.parse(localStorage.getItem("lsProduct")) || [];

// add product
const addProduct = ( nameValue, imageValue, priceValue, textValue ) => {
    products.push({
        image: imageValue,
        price: priceValue,
        name: nameValue,
        text: textValue
    });
    // add products localstorage
    localStorage.setItem("lsProduct", JSON.stringify(products));
}


// create element
const createElement = (nameValue, imageValue, priceValue, textValue) => {
// task one
    // create col-lg
    const productCol = document.createElement("div");
    productCol.classList.add("col-lg-3");
    
    // create single-product
    const productDiv = document.createElement("div");
    productDiv.classList.add("single-product");
    
    // create img
    const productImag = document.createElement("img");
    productImag.setAttribute("src", imageValue);
    
    // create Price
    const productPrice = document.createElement("h5");
    productPrice.innerText = priceValue;
    
    // create Price
    const productName = document.createElement("h3");
    productName.innerText = nameValue;
    
    // create Price
    const productText = document.createElement("p");
    productText.innerText = textValue;

    // complete single product

    productDiv.append(productImag, productPrice, productName, productText);

    // complete col-lg
    productCol.appendChild(productDiv);

    // complete all-product
    allproductDiv.appendChild(productCol);
};

productForm.addEventListener("submit", function(e){
    e.preventDefault();
    const nameValue = productNameInput.value;
    const imageValue = productImageInput.value;
    const priceValue = productPriceInput.value;
    const textValue = productTextInput.value;

// task one
createElement(nameValue, imageValue, priceValue, textValue);
   
// task two
addProduct(nameValue, imageValue, priceValue, textValue)
});

// show product from localstorage
products.forEach(product => {
    createElement(
    product["name"],
    product["image"],
    product["price"],
    product["text"]);
});