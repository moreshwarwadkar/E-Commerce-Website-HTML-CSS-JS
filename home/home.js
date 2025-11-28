let AllProducts = [];

function fetchData() {
    fetch("https://dummyjson.com/products").then((res) => {
        return res.json()
    }).then((val) => {
        AllProducts = val.products;
        displayProduct(AllProducts)
        localStorage.setItem("allproducts", JSON.stringify(AllProducts))
    })
}

function displayProduct(product) {

    let output = "";
    product.map((v) => {
        output += `
        
        <main>
            <img src="${v.thumbnail}"/>
            <h2>${v.title}</h2>
            <h3 id="rating">Rating: ${"⭐".repeat(v.rating) + "".repeat(5 - v.rating)}</h3>

            <div id="end">
                <h2>Price: </h2><strong>${Math.round(v.price * 90)} Rs.</strong>
                <button id="view" onclick="viewMore(${v.id})">View More</button>
            </div>
        </main>
        `
    })

    document.getElementById("containerBox").innerHTML = output;

}

fetchData()

/* ---------- TO Search Product ---------- */

document.getElementById("searchProduct").addEventListener("input",function searchTerm(e){
    let searchTerm = e.target.value.toLowerCase();
    console.log(searchTerm);

    let filterProduct = AllProducts.filter((product)=>{
        return(
            product.title.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
    });

    displayProduct(filterProduct)
});


/* ---------- VIEW MORE ---------- */

function viewMore(id){
    console.log(id);
    localStorage.setItem("productId",id);
    window.location.href = "../viewMore/viewMore.html"
}