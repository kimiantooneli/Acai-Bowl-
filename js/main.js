// ======================================
// PRODUCT CART SYSTEM
// ======================================


const cartButtons = document.querySelectorAll(".cart-btn");


cartButtons.forEach((button)=>{


    button.addEventListener("click",()=>{


        let product = button.parentElement;


        let item = {

            name: product.querySelector("h3").innerText,

            price: product.querySelector("p").innerText

        };


        let cart = JSON.parse(

            localStorage.getItem("cart")

        ) || [];



        cart.push(item);



        localStorage.setItem(

            "cart",

            JSON.stringify(cart)

        );
// ======================================
// USER ACCOUNT
// ======================================


let username = localStorage.getItem("username");


let userNameText = document.getElementById(
"user-name"
);



if(userNameText && username){

    userNameText.innerText =
    "👤 " + username;

}



function logout(){

    localStorage.removeItem("login");

    localStorage.removeItem("username");


    window.location.href="welcome.html";

}


        alert(
            item.name + " masuk keranjang 🛒"
        );


    });


});
