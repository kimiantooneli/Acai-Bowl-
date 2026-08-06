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



        alert(
            item.name + " masuk keranjang 🛒"
        );


    });


});
