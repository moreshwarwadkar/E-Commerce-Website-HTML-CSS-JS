document.addEventListener("DOMContentLoaded", () => {
    displayCart();
});

function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    let cartContent = document.getElementById("cartContent");
    let totalPrice = document.getElementById("totalPrice");

    // console.log(cart);

    cartContent.innerHTML = "";
    let totalBill = 0;

    if (cart.length == 0) {
        cartContent.innerHTML = `
        <div id="empty">
            <h2>Your Cart is Empty Start Shopping</h2>
        </div>
        `
    }

    cart.map((product, i) => {
        totalBill += (product.price) * 90;

        let productElement = document.createElement("div");
        // productElement.setAttribute("class", "product-info");
        productElement.innerHTML = `
        
            <div id="card">

                <div id="c_img">
                    <img src="${product.thumbnail}"/>
                </div>

                <div id="c_content">
                    <h1>${product.title}</h1>
                    <p><strong>Availability:</strong> ${product.availabilityStatus}</p>
                    <p><strong>Category:</strong> ${product.category}</p>
                    <p><strong>Return Policy:</strong> ${product.returnPolicy}</p>
                    <p><strong>Shipping Information:</strong> ${product.shippingInformation}</p>
                    <p><strong>Stock:</strong> ${product.stock}</p>
                    <p><strong>Warranty Information:</strong> ${product.warrantyInformation}</p>
                    <p><strong>Price:<strong> <strong id="price">${Math.round(product.price * 90)}</strong> Rs.</p> </br></br>    
                
                    <button id="remove" onClick="RemoveFromCart(${i})" >Remove</button>
                </div>

            </div>
        
        `
        cartContent.appendChild(productElement);

    });

    totalPrice.innerHTML = `

        <div id="bill">
            <div id="inner">
                <h1>Total Bill: ${Math.round(totalBill)} Rs.</h1>
            </div>
        </div>

    `
}

function RemoveFromCart(index) {

    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart))
    // alert("Product Removed Successfully..!")
    displayCart()
}