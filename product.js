const productForm = document.getElementById("product-form");


productForm.addEventListener("submit",(e)=>{


e.preventDefault();


let product = {

name:
document.getElementById("product-name").value,


price:
document.getElementById("product-price").value

};



let products = JSON.parse(

localStorage.getItem("products")

) || [];



products.push(product);



localStorage.setItem(

"products",

JSON.stringify(products)

);



alert("Produk berhasil ditambahkan 🍓");


window.location.href="seller.html";


});
