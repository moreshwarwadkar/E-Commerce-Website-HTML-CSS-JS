document.addEventListener("DOMContentLoaded", () => {
    let AllProducts = JSON.parse(localStorage.getItem("allproducts"));
    let productId = localStorage.getItem("productId");
    let productDetails = document.getElementById("productDetails");
    // let productReviews = document.getElementById('forreview')

    // console.log(productId);
    // console.log(AllProducts);

    if (AllProducts && productId) {
        let selectProduct = AllProducts.find((val) => {
            return val.id == productId;
        })

        // console.log(selectProduct);

        if (selectProduct) {
            productDetails.innerHTML = `

            <div id="card">
                <div id="c_img">
                    <img src="${selectProduct.thumbnail}"/>
                </div>

                <div id="c_content">
                    <h1>${selectProduct.title}</h1>
                    <p><strong>Brand:</strong> ${selectProduct.brand}</p>
                    <p><strong>Category:</strong> ${selectProduct.category}</p>
                    <strong>Description:</strong> <p>${selectProduct.description}</p>
                    <strong>Price: ${Math.round(selectProduct.price * 90)} Rs.</strong> </br></br>
                
                    <button id="addtocart">Add To Cart</button>
                    <button id="backtohome">Back To Home</button>

                </div>

            </div>
            
            <div id="review">
                <h2>Customer Reviews</h2>
                <div id="border"></div>
            
                       

            ${selectProduct.reviews.map((review) => `
                
                <div id="rating">${"❤️".repeat(review.rating)}${"🖤".repeat(5 - review.rating)}                
                </div>
               
                <p id="comment">${review.comment}</p>
                <p id="nam">By <strong>${review.reviewerName}</strong> on ${new Date(review.date)}</p>
                <div id="border"></div>
            `
            )}

            </div>
            
            `

            /* FOR BACK TO HOME BUTTON */
            document.getElementById("backtohome").addEventListener("click", () => {
                window.location.href = "../home/home.html"
            });

            document.getElementById("addtocart").addEventListener("click", () => {
                AddToCart(selectProduct)
            })

        }

        else {
            productDetails.innerHTML = "<p>Product Not Available..!</p>"
        }

    } else {
        productDetails.innerHTML = "<p>Product Not Found</p>"
    }
})


function AddToCart(product) {
    // console.log(product);

    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart))
    alert("Product Added Successfully..!")
}
