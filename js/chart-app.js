import html from './html.js'; 
// import productApi from './product-api.js'; 
import SurveyChart from './viewing-chart.js'; 
import surveyApi from './survey-api.js';
import ReportApp from './report.js'; 

function makeTemplate() {
    return html`
    <main>
        <section class="viewing-report"></section>
        <section class="viewing-chart"></section>
    </main>
`;
}

export default class ChartApp {
    constructor() {
        this.chartApi = surveyApi.getAll();
    }
    render() {
        const dom = makeTemplate(); 

        const reportSection = dom.querySelector('.viewing-report');
        const report = new ReportApp(this.channelData);
        reportSection.appendChild(report.render());

        const chartSection = dom.querySelector('.viewing-chart'); 
        const chart = new SurveyChart(this.surveyData); 
        chartSection.appendChild(chart.render()); 
        
        return dom; 
    }
}
