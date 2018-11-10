// import products from './product-list.js'; 

let productArray = []; 

const surveyApi = {
    saveProducts() {
        window.localStorage.setItem('products', JSON.stringify(productArray));
    },
    getAll() {
        return JSON.parse(window.localStorage.getItem('products')); 
    },
    add(product) {
        productArray.push(product);
    },
}; 
export default surveyApi; 