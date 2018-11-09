import products from './product-list.js'; 

const surveyApi = {
    getAll() {
        const survey = products.map(product => {
            return {
                name: product.name,
                image: product.image,
                views: 0,
                clicks: 0
            };
        });
        return survey;
    },
    save() {
        window.localStorage.setItem('products', JSON.stringify(products));
    }
}; 
export default surveyApi; 