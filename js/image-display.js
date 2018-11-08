import html from './html.js'; 
// import products from './product-list.js';

function makeTemplate() {
    return html`
        <li>
        <img class="product">
        </li>
   
    `; 
}

class ImageDisplay {

    constructor(product, onSelect) {
        this.product = product; 
        // this.randomImages = []; 
        this.onSelect = onSelect;  
    }

    render() { 
        // this.getImage(); 
        
        const dom = makeTemplate(); 
        const listItem = dom.querySelector('img'); 
        // listItem.addEventListener('click', () => {
        //     this.onSelect(this.product); 
        // }); 
        
        
        listItem.src = this.product.image;  
    

        return dom;
    }
    // getImage() {
    //     for(let i = 0; i < 3; i++) {
    //         const index = Math.floor(Math.random() * 22);
    //         this.randomImages.push(this.product[index]); 

    //     }
    // } 
}

export default ImageDisplay; 