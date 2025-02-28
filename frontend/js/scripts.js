
// Fetch products from backend and display them
fetch('/api/products')
    .then(response => response.json())
    .then(products => {
        const productList = document.getElementById('product-list');
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p>$${product.price}</p>
            `;
            productList.appendChild(productDiv);
        });
    });
