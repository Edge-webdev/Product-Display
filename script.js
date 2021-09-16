const productList = document.querySelector('ul');
const searchBar = document.querySelector('.search-bar');

var listItems = [];

searchBar.addEventListener('input', (e) => filterProducts(e.target.value));

fetchProducts();

async function fetchProducts() {
  const res = await fetch(
    'https://random-data-api.com/api/commerce/random_commerce?size=50'
  );
  const products = await res.json();

  products.forEach((product) => {
    const listItem = document.createElement('li');

    listItems.push(listItem);

    listItem.innerHTML = `
            <img
            src="https://i.stack.imgur.com/y9DpT.jpg"
            alt="Product Image"
            class="product-image"
            />
            <h4>${product.product_name} $${product.price}</h4>
            <p>Lorem ipsum dolor sit amet</p>
        `;
    productList.appendChild(listItem);
  });
}

function filterProducts(searchTerm) {
  listItems.forEach((elem) => {
    if (elem.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      elem.classList.remove('hide');
    } else {
      elem.classList.add('hide');
    }
  });
}
