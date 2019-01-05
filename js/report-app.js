import html from './html.js'; 
import SurveyChart from './viewing-chart.js'; 
import surveyApi from './survey-api.js';
import ResultApp from './viewing-report.js'; 

function makeTemplate() {
    return html`
    <main>
        <section class="viewing-report"></section>
        <section class="viewing-chart"></section>
    </main>
`;
}

export default class ReportApp {
    constructor() {
        this.chartData = surveyApi.getAll();
    }
    render() {
        const dom = makeTemplate(); 

        const reportSection = dom.querySelector('.viewing-report');
        const report = new ResultApp(this.chartData);
        reportSection.appendChild(report.render());

        const chartSection = dom.querySelector('.viewing-chart'); 
        const chart = new SurveyChart(this.chartData); 
        chartSection.appendChild(chart.render()); 
        
        return dom; 
    }
}
