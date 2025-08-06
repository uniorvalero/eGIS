import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

// Declare google variable for Google Charts
declare var google: any;

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements AfterViewInit{
  totalDues = 0;
  property = 0;
  lastPayment = {
    date: new Date('2024-06-01'),
    amount: 1234.56,
    method: 'Cash'
  };

  assessmentHistoryTable = [
    { type: 'Residential', count: 10 },
    { type: 'Commercial', count: 5 },
    { type: 'Industrial', count: 3 }
  ];

  constructor( private router: Router){
  }
  // Example: 5x5 grid, true = delinquent, false = not
  heatmapData = [
    [false, true, false, false, true],
    [true, true, false, false, false],
    [false, false, true, true, false],
    [false, false, false, true, true],
    [true, false, false, false, false]
  ];

  // Chart.js data for assessment history
  assessmentHistoryLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  assessmentHistoryData = [
    { data: [1000, 1200, 900, 1400, 1300, 1500], label: 'Assessed Value' }
  ];
  assessmentHistoryOptions = {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  };

  ngAfterViewInit(): void {
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  drawChart() {
  const data = new google.visualization.DataTable();
  data.addColumn('string', 'Type');
  data.addColumn('number', 'Count');
  this.assessmentHistoryTable.forEach(row => {
    data.addRow([row.type, row.count]);
  });

  const options = {
    title: 'Assessment History',
    curveType: 'function',
    legend: { position: 'bottom', textStyle: { color: '#fff', fontSize: 16 } },
    backgroundColor: 'transparent',
    chartArea: { left: 60, top: 40, width: '100%', height: '70%' },
    hAxis: { textStyle: { color: '#fff', fontSize: 14 } },
    vAxis: { textStyle: { color: '#fff', fontSize: 14 }, minValue: 0 },
    width: 900,
    height: 380,
    pointSize: 8,
    colors: ['#42a5f5']
  };

  const chart = new google.visualization.LineChart(document.getElementById('assessmentPieChart'));
  chart.draw(data, options);
  }

  gotoTaxComputation(): void {
    this.router.navigate(['/mainlayout/taxcomputation']);
  }


  gotoProperty(): void{
    this.router.navigate(['/mainlayout/property']);
  }

  gotoLastPayment() {
    this.router.navigate(['/mainlayout/rptpayment']);
  }
  gotoHeatmap() {
    // Replace with your actual route
    this.router.navigate(['/mainlayout/heatmap']);
  }
  gotoAssessmentHistory() {
    // Replace with your actual route
    this.router.navigate(['/mainlayout/assessment']);
  }
}
