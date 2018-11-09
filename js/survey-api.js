import products from './product-list.js'; 

const surveyApi = {
    getAll() {
        return products;
    },

    save() {
        window.localStorage.setItem('products', JSON.stringify(products));
    }
}; 

export default surveyApi; 