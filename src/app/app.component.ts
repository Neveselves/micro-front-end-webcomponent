import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mf2';
  itemList: string[] = [];

  constructor() {
    this.generateItemList();
  }

  generateItemList() {
    for (let i = 1; i <= 10; i++) {
      this.itemList.push(`Item ${i}`);
    }
  }

  userTrackBy(index: number) {
    return index;
  }
}
