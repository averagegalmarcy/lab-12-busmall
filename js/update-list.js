import html from './html.js'; 

let template = function(product) {
    return html`
    <li>
    <img class="product">
    </li>
    `; 
}; 

export default class UpdateList {
    constructor(products) {
        this.products = products; 
    }
    update(products) {
        this.products = products; 
    }
    render() {
        let dom = template(this.products); 


        return dom;
    }
}
