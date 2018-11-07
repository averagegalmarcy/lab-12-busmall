import ImageDisplay from './image-display.js'; 
import productApi from './product-api.js'; 

const products = productApi.getAll(); 

let imageDisplay = new ImageDisplay(products); 

let app = document.getElementById('product-selection'); 
app.appendChild(imageDisplay.render()); 

console.log('hello', products);