import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mf2';
  itemList: string[] = [];

  constructor(private router: Router) {
    this.router.initialNavigation();    
  }
}
