import html from './html.js';  
import surveyApi from './survey-api.js'; 
import ProductReport from './viewing-report.js'; 
// import productApi from './product-api.js';

function makeTemplate() {
    return html`
        <main>
            <section class="viewing-report">
            <ul id="product-list"></ul>
            </section>
        </main>
    `;
}

export default class ReportApp {
    constructor() {
        this.surveyData = surveyApi.getAll(); 
    }
    render() {

        const dom = makeTemplate(); 
        const reportSection = dom.querySelector('#product-list'); 

        this.surveyData.forEach(product => {
            const report = new ProductReport (product); 
            reportSection.appendChild(report.render());
            
        });
        
        return dom; 
    }
}


