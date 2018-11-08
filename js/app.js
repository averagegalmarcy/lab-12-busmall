// import ImageDisplay from './image-display.js'; 
import productApi from './product-api.js'; 
import html from './html.js'; 
import ProductSelector from './image-selector.js'; 
// import UpdateList from './update-list.js';  

// const products = productApi.getAll(); 

function makeTemplate() {
    return html`
        <header> Product Survey </header>
        <main>
        <section class="product-selector"></section>
        <ul class="products"></ul>
        <section class="update-list"></section>
        </main>

    `;
}

class ProductApp {
    constructor(products, onSelect) { 
        this.onSelect = onSelect; 
        this.products = productApi.getAll();
        this.totalCount = 0; 
    }
    render() {
        const dom = makeTemplate();
        this.list = dom.querySelector('ul');
        
        let productSelector = new ProductSelector(this.products, product => {
            product.clicks++;
            this.totalCount++; 
            console.log("products", product); 
        
        });
        this.list.appendChild(productSelector.render()); 

        return dom;
    }
}

const productApp = new ProductApp; 

document.getElementById('root').appendChild(productApp.render()); 
