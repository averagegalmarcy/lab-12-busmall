import html from './html.js'; 
import ImageDisplay from './image-display.js'; 
// import products from './product-list.js'; 

function makeTemplate() {
    return html`
        <ul class="product-selector-list"><ul>
    `;
}

export default class ProductSelector {
    constructor(products, onSelect) {
        this.products = products;
        this.onSelect = onSelect; 
    }
    render(){
        let dom = makeTemplate(); 
        const ul = dom.querySelector('ul'); 

        // for(var i = 0; i < 3; i++) {
        //     let productComp = new ImageDisplay(this.products[this.getImage()], this.onSelect); 
        //     ul.appendChild(productComp.render()); 
        // }
        // let product = products[i]; 
        // const randomArray = []; 
        
        // if(product.indexOf(product) === -1) {
        //     product.push(product); 
        // }
        // else if 

        return dom; 
    }
    getImage() {
        // for(let i = 0; i < 3; i++) {
            const index = Math.floor(Math.random() * 22);
            // this.randomImages.push(this.product[index]); 

            return index;

        }
    // } 
}


