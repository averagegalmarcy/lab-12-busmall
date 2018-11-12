import html from './html.js';  
import surveyApi from './survey-api.js'; 
import ProductReport from './viewing-report.js'; 
// import SurveyChart from './viewing-chart.js'; 


function makeTemplate() {
    return html`
        <main>
            <ul id="product-list"></ul>
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
        
        // window.location.replace('./chart-summary.html'); 
        return dom; 
    }
}


