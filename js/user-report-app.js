import html from './html.js';  
import surveyApi from './survey-api.js'; 
import ProductReport from './viewing-report.js'; 

function makeTemplate() {
    return html`
        <main>
            <section class="viewing-report"></section>
        </main>
    `;
}

export default class ReportApp {
    constructor() {
        this.surveyData = surveyApi.getAll(); 
    }
    render() {
        const dom = makeTemplate(); 
        const reportSection = dom.querySelector('.viewing-report'); 
        const report = new ProductReport (this.productData); 
        reportSection.appendChild(report.render());
        
        return dom; 
    }
}


