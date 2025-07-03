import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-utility',
  imports: [
    CommonModule,
  ],
  templateUrl: './dashboard-utility.component.html',
  styleUrl: './dashboard-utility.component.css'
})
export class DashboardUtilityComponent {
  totalDues = 0;
  delinquency = 0;
  lastPayment = {
    date: new Date('2024-06-01'),
    amount: 1234.56,
    method: 'Cash'
  };

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

  payNow() {
    // Implement pay now logic
  }
  requestReassessment() {
    // Implement request reassessment logic
  }
}
