import html from './html.js'; 

let template = function(products) {
    return html`
    <li>
    <img class="products">
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
