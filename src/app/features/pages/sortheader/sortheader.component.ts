import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-page-sort-header',
  imports: [RouterLink, MatSortModule, MatTableModule, MatIconModule],
  template: `
    <div class="page-container">
      <nav class="breadcrumb">
        <a routerLink="/components" routerLinkActive="active">Components</a>
        <mat-icon>chevron_right</mat-icon>
        <span>Sort Header</span>
      </nav>
      
      <header class="page-header">
        <h1>Sort Header</h1>
        <p>Table column headers that support sorting.</p>
      </header>
      
      <section class="demo-section">
        <h2>Table with Sorting</h2>
        <p>Click column headers to sort the data.</p>
        <div class="demo-row">
          <table matSort (matSortChange)="sortData($event)" class="sort-table">
            <thead>
              <tr>
                <th mat-sort-header="name">Name</th>
                <th mat-sort-header="age">Age</th>
                <th mat-sort-header="department">Department</th>
                <th mat-sort-header="status">Status</th>
              </tr>
            </thead>
            <tbody>
              @for (item of sortedData; track item.name) {
                <tr>
                  <td>{{item.name}}</td>
                  <td>{{item.age}}</td>
                  <td>{{item.department}}</td>
                  <td>{{item.status}}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .page-container { max-width: 1000px; margin: 0 auto; padding: 32px; }
    .breadcrumb { display: flex; align-items: center; gap: 8px; margin-bottom: 24px; font-size: 14px; }
    .breadcrumb a { color: #1976d2; text-decoration: none; }
    .breadcrumb mat-icon { font-size: 18px; width: 18px; height: 18px; color: #9e9e9e; }
    .page-header { margin-bottom: 48px; }
    .page-header h1 { font-size: 36px; font-weight: 600; color: #1c1b1f; margin: 0 0 8px; }
    .page-header p { font-size: 16px; color: #616161; margin: 0; line-height: 1.6; }
    .demo-section { margin-bottom: 48px; padding: 24px; background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); }
    .demo-section h2 { font-size: 20px; font-weight: 600; color: #1c1b1f; margin: 0 0 8px; }
    .demo-section p { font-size: 14px; color: #616161; margin: 0 0 20px; }
    .demo-row { display: flex; gap: 16px; flex-wrap: wrap; align-items: flex-start; overflow: auto; }
    .sort-table { width: 100%; border-collapse: collapse; }
    .sort-table th { text-align: left; padding: 12px 16px; font-weight: 600; cursor: pointer; user-select: none; }
    .sort-table th:hover { background: #f5f5f5; }
    .sort-table td { padding: 12px 16px; border-bottom: 1px solid #e0e0e0; }
    .sort-table tr:hover { background: #fafafa; }
  `]
})
export class PageSortHeaderComponent {
  employees = [
    { name: 'John Doe', age: 28, department: 'Engineering', status: 'Active' },
    { name: 'Jane Smith', age: 34, department: 'Marketing', status: 'Active' },
    { name: 'Bob Johnson', age: 45, department: 'Engineering', status: 'On Leave' },
    { name: 'Alice Brown', age: 32, department: 'HR', status: 'Active' },
    { name: 'Charlie Wilson', age: 29, department: 'Sales', status: 'Inactive' },
  ];
  
  sortedData = [...this.employees];
  
  sortData(sort: Sort): void {
    if (!sort.active || sort.direction === '') {
      return;
    }
    
    this.sortedData = [...this.employees].sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      return this.compare(a[sort.active as keyof typeof a], b[sort.active as keyof typeof a], isAsc);
    });
  }
  
  private compare(a: string | number, b: string | number, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
