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

        for(let i = 0; i < 3; i++) {    
            let index = this.getImage(); 
            let imageDisplay = new ImageDisplay(this.products[index], this.onSelect); 
            // html += `<img class="funny-image" src="${this.products[index].image}">`;   
        
            ul.appendChild(imageDisplay.render()); 
        }

        return dom; 
    }
    getImage() {
        const index = Math.floor(Math.random() * 22);

        return index;

    }
    // } 
}


