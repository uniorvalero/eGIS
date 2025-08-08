import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { NavbarComponent } from "../../../../shared/navbar/navbar.component";
import { GoogleChartsModule } from 'angular-google-charts';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ChartType } from 'angular-google-charts';
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';


@Component({
  selector: 'app-mayors-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    GoogleChartsModule,
    MatInputModule,
    NavbarComponent,
    MatDatepickerModule,
    FormsModule
],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mayors-dashboard.component.html',
  styleUrls: ['./mayors-dashboard.component.css']
})
export class MayorsDashboardComponent {
filterByDate() {
  // Implement your filter logic here
  console.log('Selected date range:', this.selectedRange);
}

  chartProjectsType: ChartType = ChartType.PieChart;
  chartSummaryType: ChartType = ChartType.PieChart;

  // Summary cards data
  summary = [
    // { label: 'All Tests', value: 46, color: '#4B2885' },
    // { label: 'Passed', value: 40, color: '#2DBE7F' },
    // { label: 'Failed', value: 6, color: '#F75C7A' },
    // { label: 'Skipped', value: 6, color: '#6EC6F1' },
    // { label: 'Retry', value: 6, color: '#7C7FD1' }
    { label: 'Total Transactions', value: 6, color: '#F75C7A' },
    { label: 'Total Amount', value: 6, color: '#6EC6F1' },
    { label: 'Total Receipts', value: 6, color: '#7C7FD1' }
  ];

  // Suite info
  suite = {
    successRate: '86.96%',
    lastTransaction: '13-Dec-2024 3:57:11 pm',
    typeOfTransaction: 'Online System',
    munisipality: 'City of San Fernando',
    department: 'Office of the Mayor',
    version: '1.0.0',
  };

  // Expansion panel data (test suites & cases)
  testSuites = [
    {
      name: 'demo-todo-app.spec.ts',
      cases: [
        { name: 'should clear text input field when an item is added', status: 'failed', time: '08s:042ms' },
        { name: 'should allow me to add todo items', status: 'failed', time: '08s:120ms' },
        { name: 'should allow me to add todo items', status: 'failed', time: '07s:389ms' },
        { name: 'should clear text input field when an item is added', status: 'failed', time: '07s:616ms' }
      ]
    },
    {
      name: 'example.spec.ts',
      cases: [
        { name: 'should pass example test', status: 'passed', time: '02s:100ms' }
      ]
    }
  ];

  // Google Chart data (Summary)
  chartSummaryData = [
    ['Passed', 40],
    ['Failed', 6],
    ['Skipped', 6]
  ];
  chartSummaryOptions = {
    pieHole: 0.5,
    legend: 'none',
    colors: ['#2DBE7F', '#F75C7A', '#6EC6F1'],
    chartArea: { width: '90%', height: '90%' }
  };

  // Google Chart data (Projects)
  chartProjectsData = [
    ['chromium', 23],
    ['Mobile Chrome', 23]
  ];
  chartProjectsOptions = {
    pieHole: 0.5,
    legend: 'none',
    colors: ['#4B2885', '#7C7FD1'],
    chartArea: { width: '90%', height: '90%' }
  };
selectedRange: any;
}



//   billingTransactionCount = 0;
//   collectionSummaryTotal = 0;
//   postingRecordsCount = 0;
//   estimatedRevenue = 0;
//   formIssuanceCount = 0;
//   cashTieItemsCount = 0;
//   campaignData: CdkTableDataSourceInput<any> = [
//     { promo: 'null', revenue: '1.7k', discount: 18, buyers: 28 },
//     { promo: 'CYBER2021', revenue: 224, discount: 56, buyers: 8 },
//     { promo: 'SALE11121', revenue: 72, discount: 18, buyers: 2 },
//     { promo: 'FLASH20', revenue: 60, discount: 12, buyers: 2 },
//     { promo: 'SALE01', revenue: 28, discount: 4, buyers: 1 },
//     { promo: 'OPENINGSALE08082021', revenue: 20, discount: 4, buyers: 1 }
//   ];

//   displayedColumns: string[] = ['promo', 'revenue', 'discount', 'buyers'];

//   constructor(private collectionService: CollectionsummaryService,
//               private auth: AuthService, private collectionSummaryService: CollectionsummaryService,
//               private billingTransactionService: CollectionsummaryService,
//               private router: Router) {}

//   ngOnInit(): void {
//     this.collectionService.getCollectionSummary().subscribe({
//       next: (data: any) => {
//         this.collectionSummaryTotal = data.collectionSummaryTotal;
//         this.postingRecordsCount = data.postingRecordsCount;
//         this.estimatedRevenue = data.estimatedRevenue;
//         this.formIssuanceCount = data.formIssuanceCount;
//         this.cashTieItemsCount = data.cashTieItemsCount;
//       },
//       error: (err) => {
//         console.error('Failed to load dashboard data', err);
//       }
//     });
//   }

//   getCellColor(column: string, value: any): string {
//     // Example logic: darker shade for higher values
//       if (column === 'revenue') {
//     if (value > 1000) return '#a8e6cf'; // pastel green
//     if (value > 200) return '#dcedc1';  // light pastel green
//     if (value > 50) return '#ffe5b4';   // pastel orange
//     return '#ffd6d6';                   // pastel red
//   }
//   if (column === 'discount') {
//     if (value > 50) return '#b3e5fc';   // pastel blue
//     if (value > 10) return '#f3e5f5';   // pastel purple
//     return '#fff9c4';                   // pastel yellow
//   }
//   if (column === 'buyers') {
//     if (value > 20) return '#c1f0f6';   // pastel cyan
//     if (value > 5) return '#ffe0e9';    // pastel pink
//     return '#f0f4c3';                   // pastel lime
//   }0
//   //2 Default for promo
//   return '#f5f5f5';                     // pastel gray
// }

//   logout() {
//     localStorage.removeItem('token');
//     this.auth.logout();
//     this.router.navigate(['/login']);
//     //location.href = '/login';
//   }
//}

