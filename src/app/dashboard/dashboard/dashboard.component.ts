import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  userCount: number = 0;
  albumCount: number = 0;
  photoCount: number = 0;
  loading: boolean = true;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchCounts();
  }

  fetchCounts() {
    this.loading = true;
    forkJoin([
      this.http.get('https://jsonplaceholder.typicode.com/users'),
      this.http.get('https://jsonplaceholder.typicode.com/albums'),
      this.http.get('https://jsonplaceholder.typicode.com/photos')
    ]).subscribe(
      ([users, albums, photos]: [any[], any[], any[]]) => {
        this.userCount = users.length;
        this.albumCount = albums.length;
        this.photoCount = photos.length;
        this.loading = false;
        console.log('Dashboard Counts:', {
          users: this.userCount,
          albums: this.albumCount,
          photos: this.photoCount
        });
      },
      (error) => {
        console.error('Error fetching counts:', error);
        this.loading = false;
      }
    );
  }

  navigateToUsers() {
    this.router.navigate(['/dashboard/pages/users']);
  }

  navigateToAlbums() {
    this.router.navigate(['/dashboard/pages/albums']);
  }

  navigateToPhotos() {
    this.router.navigate(['/dashboard/pages/photos']);
  }
}