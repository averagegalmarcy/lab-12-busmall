// import ReportApp from './user-report-app.js';
import ChartApp from './chart-app.js';

const app = new ChartApp();
const root = document.getElementById('user-summary-text-results');
root.appendChild(app.render());