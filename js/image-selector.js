import html from './html.js'; 
import ImageDisplay from './image-display.js'; 
import UpdateList from './update-list.js'; 

function makeTemplate() {
    return html`
        <ul class="product-selector-list"><ul>
    `;
}

export default class ProductSelector {
    constructor(products, onSelect) {
        this.products = products;
        this.onSelect = onSelect; 
        this.totalViews = 0; 
        console.log(products); 
    }
    update(){ 
        let productUpdate = document.getElementById('.product-selector-list');

        let updateList = new UpdateList(this.product, products => {
            products.views++;
            this.totalCount++; 
        });
        productUpdate.appendChild(updateList.render()); 
    }
    render(){
        let dom = makeTemplate(); 
        const ul = dom.querySelector('ul'); 

        for(let i = 0; i < 3; i++) {    
            let index = this.getImage(); 
            let imageDisplay = new ImageDisplay(this.products[index], this.onSelect); 
        
            ul.appendChild(imageDisplay.render()); 

        }

        return dom; 
    }
    getImage() {

        const index = Math.floor(Math.random() * 23);

        // let productUpdate = document.getElementById('.product-selector-list');

        // let updateList = new UpdateList(this.product, products => {
        //     products.views++;
        //     this.totalCount++; 
        // });
        // productUpdate.appendChild(updateList.render()); 
        
        return index;

    }
}


