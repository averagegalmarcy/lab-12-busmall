import html from './html.js';  
import surveyApi from './survey-api.js'; 
import ProductReport from './viewing-report-item.js'; 
// import SurveyChart from './viewing-chart.js'; 


function makeTemplate() {
    return html`
        <main>
            <h2> Result Report </h2>
            <ul id="product-list"></ul>
        </main>
    `;
}

export default class ResultApp {
    constructor() {
        this.surveyReport = surveyApi.getAll(); 
    }
    render() {

        const dom = makeTemplate(); 
        
        const reportSection = dom.querySelector('#product-list'); 
        this.surveyReport.forEach(product => {
            const report = new ProductReport (product); 
            reportSection.appendChild(report.render());
            
        });
        return dom; 
    }
}


