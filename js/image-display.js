import product from './product-list.js'; 
import productApi from './product-api'; 
import html from './html.js'; 
import productsApi from '../../lab-09-fundraiser/js/product-api.js';

let products = productApi.getAll(); 

function makeTemplate() {
    return html`
    <section>
        <div>
        <img id="product-1" src="$">
        </div>
        <div>
        <img id="product-2" src="$">
        </div>
        <div>
        <img id="product-3" src="$">
        </div>
    </section>
    `; 
}

class ImageDisplay {

    constructor(products) {
        this.products = products; 
        this.randomImages = []; 
    }

    render() {

        const dom = makeTemplate(); 

        const image1 = dom.getElementById('product-1');
        const image2 = dom.getElementById('product-2'); 
        const image3 = dom.getElementById('product-3');  

        return dom;
    }

    getImage() {
        for(let i = 0; i < 3; i++); {
            const index = Math.floor(Math.random() * 19);
            this.products = this.randomImages[index]; 
        }
    }
    
}; 

export default ImageDisplay; 