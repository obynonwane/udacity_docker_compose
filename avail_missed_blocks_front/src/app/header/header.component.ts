import { Component, Input } from '@angular/core';
import { Menu } from './model/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() menu: Menu;

  constructor() {
    this.menu = {
      home: 'Home',
    };
  }
}
