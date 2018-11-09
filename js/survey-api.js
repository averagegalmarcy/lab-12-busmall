import products from './product-list.js'; 

let productArray = []; 

function saveProducts() {
    window.localStorage.setItem('products', JSON.stringify(products));
}

const surveyApi = {
    getAll() {
        return products;
    },
    add(product) {
        productArray.push(product);
        saveProducts();  
    },
}; 
export default surveyApi; 