import html from './html.js'; 
import surveyApi from './survey-api.js';


let template = function(product) {
    let element = surveyApi.getAll
    let name = element.name; 
    let clicks = element.clicks;
    let views = element.views;  
    
    return html`
    <li>${name} had ${clicks} clicks and ${views} .</li>
    `; 
}; 

export default class ProductReport {
    constructor(product) {
        this.product = product;
    }
    render() {
        let dom = template(this.product); 
        return dom; 
    }
}