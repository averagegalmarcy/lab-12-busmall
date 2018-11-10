import html from './html.js'; 
// import surveyApi from './survey-api.js';
// import products from './product-list.js'; 

// let element = surveyApi.getAll();
// console.log('hello', element);

let template = function(product) {

    let name = product.name; 
    let clicks = product.clicks;
    let views = product.views;  
    
    return html`
    <li>${name} had ${clicks} clicks and ${views} views .</li>
    `; 
}; 

export default class ProductReport {
    constructor(product) {
        this.product = product;
    }
    render() {
        console.log('report', this.product); 
        let dom = template(this.product); 
        return dom; 
    }
}