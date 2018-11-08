import html from './html.js'; 
import ImageDisplay from './image-display.js'; 
// import UpdateList from './update-list.js'; 

function makeTemplate() {
    return html`
        <ul class="product-selector-list"><ul>
    `;
}

export default class ProductSelector {
    constructor(products, onSelect, countStop) {
        this.products = products;
        this.onSelect = onSelect; 
        // this.countStop = 0; 
         
    }
    render(){
        
        let dom = makeTemplate(); 
        this.ul = dom.querySelector('ul'); 

        this.update(); 

        return dom; 
    }
    update() {

        while(this.ul.lastElementChild) {
            this.ul.lastElementChild.remove(); 
            // console.log('sup', this.ul.lastElementChild); 
        }


        
        for(let i = 0; i < 3; i++) {    
            let index = this.getImage(); 
            let imageDisplay = new ImageDisplay(this.products[index], this.onSelect);
            this.products[index].views++; 

            // console.log('hello', this.products[index]); 
        

            this.ul.appendChild(imageDisplay.render());
        }
    }
    getImage() {

        const index = Math.floor(Math.random() * 23);

        
        return index;

    }
}


