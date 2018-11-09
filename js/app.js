import productApi from './product-api.js'; 
import html from './html.js'; 
import ProductSelector from './image-selector.js'; 
import surveyApi from './survey-api.js';


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
        this.survey = this.products;
        // this.surveyResults = surveyApi.getAll(); 
        this.totalCount = 0;  

    }
    render() {
        const dom = makeTemplate();
        this.list = dom.querySelector('ul');
        
        let productSelector = new ProductSelector(this.products, product => {
            const index = this.survey.indexOf(product);
            this.survey[index].clicks++; 
            this.totalCount++; 
            productSelector.update();
            if(this.totalCount === 5) {
                surveyApi.add(product);  
                alert('The survey has ended'); 
            }       
        });
        this.list.appendChild(productSelector.render()); 

        return dom;
    }
}

const productApp = new ProductApp; 

document.getElementById('root').appendChild(productApp.render()); 
