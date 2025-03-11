import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Subject, takeUntil } from 'rxjs';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.scss']
})
export class TaskManagementComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'company', 'website'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  data: any[] = [];
  isLoading = true;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private http: HttpClient,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  getData() {
    this.isLoading = true;
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: any) => {
          console.log('API Response (Users):', res); // Correct logging
          this.data = res; // Assign API response to this.data
          console.log('this.data:', this.data);
          this.isLoading = false;
          this.dataSource = new MatTableDataSource(this.data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.snackbarService.showNotification('snackbar-success', 'Users fetched successfully');
        },
        error: (err) => {
          this.isLoading = false;
          this.snackbarService.showNotification('snackbar-danger', err.message || 'Failed to fetch users');
        },
        complete: () => {
          // Optional: Any cleanup or completion logic
        }
      });
  }

  refresh() {
    this.getData();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}