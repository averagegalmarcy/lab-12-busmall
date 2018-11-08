// import ImageDisplay from './image-display.js'; 
import productApi from './product-api.js'; 
import html from './html.js'; 
import ProductSelector from './image-selector.js'; 

// const products = productApi.getAll(); 

function makeTemplate() {
    return html`
        <header> Product Survey </header>
        <main>
        <section class="product-selector"></section>
        <ul class="products"></ul>
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
        const root = document.getElementById('root'); 
        let html = ''; 
        this.list = dom.querySelector('ul'); 
        // let firstProduct = this.products[0];
        let productSelector = new ProductSelector(this.products, product => {
            product.count++;
            this.totalCount++; 
            let selectorSection = dom.querySelector('.product-selector');
            selectorSection.appendChild(productSelector.render());
        });
        for(let i = 0; i < 3; i++) {    
            let index = productSelector.getImage(); 
            html += `<img class="funny-image" src="${this.products[index].image}">`; 
            
        }
        
        root.innerHTML = html;
        
        const funnyImage = document.querySelectorAll('.funny-image'); 

        funnyImage.forEach(item => {
            item.addEventListener('click', () => {
                console.log('click'); 
            });
        });

        this.list.appendChild(productSelector.render()); 

        return dom;
    }
}

const productApp = new ProductApp; 

document.getElementById('root').appendChild(productApp.render()); 
