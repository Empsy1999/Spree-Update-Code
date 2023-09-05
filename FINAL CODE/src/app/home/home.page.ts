import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    const isLoggedIn = localStorage.getItem('is_logged_in');
    if (isLoggedIn) {
      this.router.navigate(['/dashboard'])
    }
  }
}
