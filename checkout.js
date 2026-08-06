// ======================================
// CHECKOUT SYSTEM
// ======================================


const form = document.getElementById("checkout-form");


form.addEventListener("submit",(e)=>{


e.preventDefault();



let order = {


name:
document.getElementById("name").value,


address:
document.getElementById("address").value,


payment:
document.getElementById("payment").value,


cart:
JSON.parse(localStorage.getItem("cart")) || []


};



localStorage.setItem(

"order",

JSON.stringify(order)

);



localStorage.removeItem("cart");



alert(
"Pesanan berhasil dibuat 🍓"
);



window.location.href="index.html";


});
