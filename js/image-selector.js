import html from './html.js'; 
import ImageDisplay from './image-display.js'; 


function makeTemplate() {
    return html`
        <ul class="product-selector-list"><ul>
    `;
}


class ProductSelector {
    constructor(products, onSelect) {
        this.products = products;
        this.onSelect = onSelect; 
    }

    render() {
        
        let dom = makeTemplate(); 
        this.ul = dom.querySelector('ul');

        this.update(); 

        return dom; 
    }
    update() {

        while(this.ul.lastElementChild) {
            this.ul.lastElementChild.remove();  
        }

        
        for(let i = 0; i < 3; i++) {    
            let index = this.getImage(); 
            let imageDisplay = new ImageDisplay(this.products[index], this.onSelect);
            this.products[index].views++; 
        

            this.ul.appendChild(imageDisplay.render());
        }
    }
    getImage() {

        const index = Math.floor(Math.random() * 23);

        
        return index;

    }
}

export default ProductSelector; 

