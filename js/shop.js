// ======================================
// SHOW SELLER PRODUCT TO BUYER
// ======================================


let products = JSON.parse(

localStorage.getItem("products")

) || [];



const customerProducts = document.getElementById(
"customer-products"
);



if(customerProducts){


products.forEach((product)=>{


customerProducts.innerHTML += `

<div class="product-card">


<h3>
${product.name}
</h3>


<p>
${product.price}
</p>


<button class="cart-btn">

Tambah Keranjang

</button>


</div>

`;

});


}
